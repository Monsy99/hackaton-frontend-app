import styled, { css } from "styled-components";

export const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 16px 14px 14px;
  margin-bottom: 18px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  outline: none;
  &:hover {
    cursor: not-allowed;
  }
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.governorBay};
  ${({ reversed }) =>
    reversed &&
    css`
      color: ${({ theme }) => theme.colors.governorBay};
      background-color: ${({ theme }) => theme.colors.white};
    `}
  ${({ active }) =>
    active &&
    css`
      &:hover {
        filter: brightness(1.2);
        cursor: pointer;
      }
    `}
`;
export const ButtonImg = styled.img`
  width: 18px;
  transform: translateY(-2px);
  margin-right: 8px;
`;
