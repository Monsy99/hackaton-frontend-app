import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.governorBay};
  color: ${({ theme }) => theme.colors.white};
  padding: 45px 18px 45px 18px;
`;
