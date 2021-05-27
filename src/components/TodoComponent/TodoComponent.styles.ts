import styled from 'styled-components';

type TodoWrapperProps = {
  $done: boolean;
};
const TodoWrapper = styled.div<TodoWrapperProps>`
  display: flex;
  flex: 1;
  background: ${(p) => (p.$done ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)')};
  padding: 8px 24px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 8px;
`;

export { TodoWrapper };
