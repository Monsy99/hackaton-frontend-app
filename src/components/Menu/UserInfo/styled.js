import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const UserAvatar = styled.img`
  width: 48px;
  border-radius: 10px;
  margin-right: 11px;
`;
export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
export const UserDetail = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 0;
`;
