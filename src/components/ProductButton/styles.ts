import styled from 'styled-components';

type ButtonProps = {
  status: 'primary' | 'success' | 'danger';
  disabled: boolean;
};

const colors = {
  primary: '#007bff',
  success: '#28a745',
  danger: '#dc3545',
};

export const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ status }) => colors[status]};
  border: 1px solid ${({ status }) => colors[status]};
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s;
  width: 100%;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'grayscale(0)')};
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};

  &:hover {
    color: ${({ disabled, status }) => (disabled ? colors[status] : 'white')};
    background-color: ${({ status, disabled }) =>
      disabled ? 'transparent' : colors[status]};
  }
`;
