import React from 'react';
import { Card, Tag, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ImageCardProps } from '../types/types';

const NeonCardWrapper = styled.div`
  position: relative;
  border-radius: 22px;
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0 0 0 0px #60a5fa00;
  z-index: 1;
  &:hover {
    box-shadow: 0 0 32px 0 #60a5fa55, 0 0 0 4px #38bdf8cc;
    transform: translateY(-8px) scale(1.03);
  }
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 24px;
    z-index: -1;
    background: linear-gradient(120deg, #6366f1 0%, #38bdf8 100%);
    opacity: 0.7;
    filter: blur(8px);
    transition: opacity 0.3s;
  }
  &:hover::before {
    opacity: 1;
    filter: blur(16px);
  }
`;

const StyledCard = styled(Card)`
  transition: box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1);
  margin-bottom: 0;
  border-radius: 18px !important;
  overflow: hidden;
  box-shadow: 0 2px 16px 0 rgba(24, 144, 255, 0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04);
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2.5px solid transparent;
  background-clip: padding-box;

  .ant-card-cover img {
    height: 220px;
    object-fit: cover;
    width: 100%;
    border-radius: 0;
    transition: filter 0.3s;
    filter: brightness(0.97) saturate(1.1);
  }

  .ant-card-actions {
    background: #f7faff;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 18px 18px;
  }
`;

const TagContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const ImageCard: React.FC<ImageCardProps> = ({ image, onDelete }) => {
  return (
    <NeonCardWrapper>
      <StyledCard
        hoverable
        cover={<img alt={image.title} src={image.imageUrl} />}
        actions={[
          onDelete && (
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete(image.id)}
              style={{ fontWeight: 500 }}
            >
              Delete
            </Button>
          ),
        ].filter(Boolean)}
      >
        <Card.Meta
          title={<span style={{ fontWeight: 600, fontSize: 18 }}>{image.title}</span>}
          description={<span style={{ color: '#555', fontSize: 15 }}>{image.description}</span>}
        />
        <TagContainer>
          {image.tags.map((tag) => (
            <Tag key={tag} color="geekblue" style={{ fontSize: 13, borderRadius: 6, padding: '2px 10px' }}>
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </StyledCard>
    </NeonCardWrapper>
  );
};

export default ImageCard; 