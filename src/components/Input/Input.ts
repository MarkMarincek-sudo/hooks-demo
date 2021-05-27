import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  color: black;
  margin-bottom: 8px;
  padding: 0 8px;
  border: 2px solid transparent;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

export default Input;
