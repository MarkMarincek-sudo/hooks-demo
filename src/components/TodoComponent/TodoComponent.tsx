import React from 'react';
import { Todo } from '../../utils/interfaces';
import { TodoWrapper } from './TodoComponent.styles';

interface TodoComponentProps {
  todo: Todo;
  onClick: (todo: Todo) => void;
}
function TodoComponent(props: TodoComponentProps) {
  const { todo, onClick } = props;
  console.log('render');
  return (
    <TodoWrapper $done={todo.completed} onClick={() => onClick(todo)}>
      <p>{todo.title}</p>
    </TodoWrapper>
  );
}

export default React.memo(TodoComponent);
