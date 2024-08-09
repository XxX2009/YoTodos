// 用于渲染Todos列表的组件。

import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';
import { fetchTodos } from '../services/todoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={todo => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodoList;
