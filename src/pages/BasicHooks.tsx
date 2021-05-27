import React from 'react';
import Container from '../components/Container/Container';
import Input from '../components/Input';
import Row from '../components/Row';

const BasicHooks = () => {
  return (
    <Container>
      <Row label="name">
        <Input value="Mark" />
      </Row>
      <Row label="surname">
        <Input value="Marincek" />
      </Row>
    </Container>
  );
};

export default BasicHooks;
