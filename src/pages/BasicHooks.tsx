import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '../components/Container/Container';
import Input from '../components/Input';
import Row from '../components/Row';
import TodoComponent from '../components/TodoComponent';
import ToggleSwitch from '../components/ToggleSwitch';
import { loadTodos } from '../utils/api';
import { Todo } from '../utils/interfaces';
import { useBackgroundColor, useWidth } from '../utils/hooks';

const BasicHooks = () => {
  const [name, setName] = useState('test');
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined);
  const [animateBackground, setAnimateBackground] = useState(true);

  const width = useWidth();
  const backgroundColor = useBackgroundColor(animateBackground);

  useEffect(() => {
    document.title = name;
  });

  useEffect(() => {
    loadTodos().then((todos) => setTodos(todos));
  }, []);

  const onTodoClick = useCallback((todo: Todo) => {
    setTodos((state) =>
      state?.map((t) => {
        if (t.id !== todo.id) return t;
        return {
          ...t,
          completed: !t.completed,
        };
      })
    );
  }, []);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  return (
    <Container $color={backgroundColor}>
      <Row label={'name'}>
        <Input onChange={handleNameChange} value={name} />
      </Row>
      <Row label="Animated background">
        <ToggleSwitch checked={animateBackground} onChange={setAnimateBackground} />
      </Row>
      <Row label={String(width)} />
      {todos?.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} onClick={onTodoClick} />
      ))}
    </Container>
  );
};

export default BasicHooks;
