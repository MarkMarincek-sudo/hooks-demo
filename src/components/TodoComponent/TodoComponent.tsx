import React from 'react';
import { Todo } from '../../utils/interfaces';
import { TodoWrapper } from './TodoComponent.styles';

interface TodoComponentProps {
  todo: Todo;
  onClick: () => void;
}
export default function TodoComponent(props: TodoComponentProps) {
  const { todo, onClick } = props;
  console.log('render');
  return (
    <TodoWrapper $done={todo.completed} onClick={onClick}>
      <p>{todo.title}</p>
    </TodoWrapper>
  );
}
