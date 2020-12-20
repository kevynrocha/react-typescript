/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface FieldsetProps {
  disabled: boolean;
}

export const Fieldset = styled.fieldset<FieldsetProps>`
  padding: 5px;
  width: 100%;
  margin-bottom: 1rem;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  border: 1px solid
    ${({ theme, disabled }) => (disabled ? theme.colors.secondary : theme.colors.primary)};
`;

export const Legend = styled.legend`
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  padding: 0 1rem;
  background: transparent;
`;
