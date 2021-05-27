import React from 'react';
import RowWrapper from './Row.styles';

interface RowProps {
  children?: React.ReactNode;
  label?: string;
}

export default function Row(props: RowProps) {
  const { children, label } = props;
  return (
    <RowWrapper>
      {label && <label>{label}</label>}
      {children}
    </RowWrapper>
  );
}
