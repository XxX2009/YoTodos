// 主组件，包含了应用的逻辑。

import React from 'react';
import { Layout } from 'antd';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const { Header, Content } = Layout;

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ color: 'white', fontSize: '24px' }}>Yo! Todos App</Header>
    <Content style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="https://img.ixintu.com/upload/jpg/20210523/9e546ef1c24351123346a1022119bfed_148455_800_800.jpg!con"
          alt="Apple Style"
          style={{ width: '40%', height: 'auto', borderRadius: '10px', marginRight: '20px' }}
        />
        <div style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '1.5' }}>
          Yo Todos App<br />
          Your todos list!
        </div>
      </div>
      <TodoForm />
      <TodoList />
    </Content>
  </Layout>
);

export default App;