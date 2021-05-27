import React from 'react';
import { ToggleSwitchWrapper } from './ToggleSwitch.styles';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (state: boolean) => void;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { onChange, checked } = props;
  function handleOnChange() {
    onChange(!checked);
  }
  return (
    <ToggleSwitchWrapper>
      <input type="checkbox" onChange={handleOnChange} checked={checked} />
      <span className="slider"></span>
    </ToggleSwitchWrapper>
  );
}
