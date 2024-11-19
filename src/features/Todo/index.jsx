import React, { useEffect, useState, useMemo } from 'react';
import TodoList from './components/TodoList';
import { useSearchParams } from 'react-router-dom';
import TodoForm from './components/TodoForm';

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      status: 'new',
      title: 'Eat',
    },

    {
      id: 2,
      status: 'completed',
      title: 'Sleep',
    },

    {
      id: 3,
      status: 'new',
      title: 'Code',
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    return searchParams.get('status') || 'all';
  });

  useEffect(() => {
    // lấy lại URL đã cập nhật khi có sự thay đổi URL mà searchParams phát hiện
    const currentStatus = searchParams.get('status') || 'all';
    setFilteredStatus(currentStatus);
  }, [searchParams]);

  const handleTodoClick = (todo, idx) => {
    // Clone current arr to the new one
    const newTodoList = [...todoList];

    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setSearchParams({ status: 'all' });
  };

  const handleShowCompletedClick = () => {
    setSearchParams({ status: 'completed' });
  };

  const handleShowNewClick = () => {
    setSearchParams({ status: 'new' });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    // console.log('Form submit: ', values);
    const newTodo = {
      id: Date.now(),
      status: 'new',
      title: values.title,
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>TodoList</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>All</button>
      <button onClick={handleShowCompletedClick}>Completed</button>
      <button onClick={handleShowNewClick}>New</button>
    </div>
  );
}

export default TodoFeatures;
