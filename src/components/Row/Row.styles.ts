import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-bottom: 3px solid black;
  margin-bottom: 16px;

  label {
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

export default RowWrapper;
