import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  ${({ gridArea }) => css`
    grid-area: ${gridArea};
  `}
`;
