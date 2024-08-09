// 用于创建新的Todo项的组件。

import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { createTodo } from '../services/todoService';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    createTodo({ title }).then(() => {
      window.location.reload(); // 重新加载页面
    });
  };

  return (
    <Form layout="inline" onFinish={handleSubmit}>
      <Form.Item>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New Todo Title"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Todo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
