// 渲染单个Todo项的组件。

import React from 'react';
import { List, Button } from 'antd';
import { deleteTodo } from '../services/todoService';

const TodoItem = ({ todo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id).then(() => {
      window.location.reload(); // 重新加载页面
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" danger onClick={handleDelete}>
          Delete
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={todo.title}
        description={todo.completed ? 'Completed' : 'Not Completed'}
      />
    </List.Item>
  );
};

export default TodoItem;
