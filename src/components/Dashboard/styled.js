import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
export const Greeting = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin: 0;
  margin-right: 86px;
  color: ${({ theme }) => theme.colors.black};
`;
export const Info = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;
export const Input = styled.input`
  display: inline;
  border: none;
  padding: 20px 16px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  flex-grow: 1;
  line-height: 19px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &::placeholder {
    color: ${({ theme }) => theme.colors.scorpion};
  }
`;

export const Image = styled.img`
  width: 100%;
`;
