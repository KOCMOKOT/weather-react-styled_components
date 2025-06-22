import styled from 'styled-components';

export const ToastMessage__Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4d4f;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  z-index: 9999;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToastMessage__CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: #fff0f0;
  }
`;