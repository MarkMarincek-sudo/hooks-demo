import styled from 'styled-components';

type Props = {
  $color?: string;
};

const Container = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: ${(p) => p.$color ?? 'lightGrey'};
  margin: 5%;
  border-radius: 8px;
  transition: 0.2s;
`;

export default Container;
