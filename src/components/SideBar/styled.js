import styled, { css } from "styled-components";
import logo from "../../images/logo.svg";

export const SideBarContainer = styled.div`
  margin: 45px 20px 0 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  border: none;
  padding: 5px;
  border-radius: 10px;
  height: 50px;
  line-height: 35px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.div`
  height: 35px;
  width: 85%;
  line-height: 35px;
  border: none;
`;

export const Avator = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin-right: 5px;
`;

export const DailyReport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(alignItems) => alignItems};
  justify-content: ${(justifyContent) => justifyContent};
  border: none;
  padding: 10px;
  border-radius: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h4`
  font-weight: 700;
  line-height: 10px;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: center;
    `}
`;

export const Hr = styled.hr`
  width: 100%;
  height: 0.5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const ReportItem = styled.div`
  line-height: 50px;
  padding-top: 10px;
`;

export const Figure = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 24px;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  ${({ small }) =>
    small &&
    css`
      font-size: 14px;
      line-height: 16px;
    `}
`;
