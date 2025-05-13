import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { AddImageFormProps, ImageFormData } from '../types/types';

const { Option } = Select;

const AddImageForm: React.FC<AddImageFormProps> = ({
  onSubmit,
  onCancel,
  visible,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values as ImageFormData);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Add New Image"
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Add Image
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ tags: [] }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a description' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Image URL"
          rules={[
            { required: true, message: 'Please enter an image URL' },
            { type: 'url', message: 'Please enter a valid URL' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="tags"
          label="Tags"
          rules={[{ required: true, message: 'Please select at least one tag' }]}
        >
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Select or create tags"
            tokenSeparators={[',']}
          >
            <Option value="nature">Nature</Option>
            <Option value="urban">Urban</Option>
            <Option value="architecture">Architecture</Option>
            <Option value="beach">Beach</Option>
            <Option value="mountains">Mountains</Option>
            <Option value="ocean">Ocean</Option>
            <Option value="city">City</Option>
            <Option value="night">Night</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddImageForm; 