import React from 'react';
import { Tag, Space } from 'antd';
import styled from 'styled-components';
import { FilterProps } from '../types/types';

const FilterContainer = styled.div`
  margin-bottom: 32px;
  padding: 18px 20px 14px 20px;
  background: #f7faff;
  border-radius: 14px;
  box-shadow: 0 1px 6px 0 rgba(24, 144, 255, 0.04);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledTag = styled(Tag)<{ $active?: boolean }>`
  font-size: 15px;
  border-radius: 8px !important;
  padding: 4px 18px;
  margin-bottom: 8px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#e6f4ff' : '#f0f5ff')};
  color: ${({ $active }) => ($active ? '#1677ff' : '#222')};
  border: ${({ $active }) => ($active ? '1.5px solid #1677ff' : 'none')};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: all 0.2s;
`;

const FilterTags: React.FC<FilterProps> = ({ tags, selectedTag, onTagSelect }) => {
  const uniqueTags = Array.from(new Set(tags));

  return (
    <FilterContainer>
      <Space size={[8, 16]} wrap>
        <StyledTag
          $active={selectedTag === null}
          onClick={() => onTagSelect(null)}
        >
          Все
        </StyledTag>
        {uniqueTags.map((tag) => (
          <StyledTag
            key={tag}
            $active={selectedTag === tag}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </StyledTag>
        ))}
      </Space>
    </FilterContainer>
  );
};

export default FilterTags; 