export interface Image {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ImageFormData {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface FilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export interface ImageCardProps {
  image: Image;
  onDelete?: (id: string) => void;
}

export interface AddImageFormProps {
  onSubmit: (data: ImageFormData) => void;
  onCancel: () => void;
  visible: boolean;
} 