import React, { useState, useMemo } from 'react';
import { Row, Col, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Image, ImageFormData } from '../types/types';
import { mockImages } from '../data/mockData';
import ImageCard from './ImageCard';
import FilterTags from './FilterTags';
import AddImageForm from './AddImageForm';
import { AnimatePresence, motion } from 'framer-motion';

const GalleryContainer = styled.div`
  padding: 40px 8px 64px 8px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
  flex-wrap: wrap;
  gap: 18px;
`;

const GradientTitle = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 1.5px;
  background: linear-gradient(90deg, #6366f1 10%, #60a5fa 50%, #38bdf8 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 2px 16px #60a5fa44);
  user-select: none;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(90deg, #6366f1 0%, #60a5fa 100%);
  color: #fff !important;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0 32px;
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 #60a5fa33;
  transition: box-shadow 0.2s, transform 0.2s;
  height: 48px;
  &:hover, &:focus {
    background: linear-gradient(90deg, #60a5fa 0%, #6366f1 100%);
    color: #fff !important;
    box-shadow: 0 6px 32px 0 #60a5fa55;
    transform: translateY(-2px) scale(1.04);
  }
`;

const StyledRow = styled(Row)`
  min-height: 300px;
`;

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>(mockImages);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const allTags = useMemo(() => {
    const tags = images.flatMap((image) => image.tags);
    return Array.from(new Set(tags));
  }, [images]);

  const filteredImages = useMemo(() => {
    if (!selectedTag) return images;
    return images.filter((image) => image.tags.includes(selectedTag));
  }, [images, selectedTag]);

  const handleAddImage = (data: ImageFormData) => {
    const newImage: Image = {
      id: uuidv4(),
      ...data,
    };
    setImages([...images, newImage]);
    setIsAddModalVisible(false);
    message.success('Image added successfully!');
  };

  const handleDeleteImage = (id: string) => {
    setImages(images.filter((image) => image.id !== id));
    message.success('Image deleted successfully!');
  };

  return (
    <GalleryContainer>
      <Header>
        <GradientTitle>Галерея вдохновения</GradientTitle>
        <GradientButton
          type="primary"
          icon={<PlusOutlined style={{ fontSize: 22, marginRight: 8 }} />}
          size="large"
          onClick={() => setIsAddModalVisible(true)}
        >
          Добавить картинку
        </GradientButton>
      </Header>

      <FilterTags
        tags={allTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />

      <StyledRow gutter={[24, 24]}>
        <AnimatePresence>
          {filteredImages.map((image) => (
            <Col
              key={image.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ display: 'flex' }}
            >
              <motion.div
                style={{ width: '100%', display: 'flex' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <ImageCard
                  image={image}
                  onDelete={handleDeleteImage}
                />
              </motion.div>
            </Col>
          ))}
        </AnimatePresence>
      </StyledRow>

      <AddImageForm
        visible={isAddModalVisible}
        onSubmit={handleAddImage}
        onCancel={() => setIsAddModalVisible(false)}
      />
    </GalleryContainer>
  );
};

export default Gallery; 