import styled, { css } from "styled-components";

export const ReservationsCard = styled.div`
  border: none;
  padding: 20px;
  border-radius: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Reservation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  line-height: 30px;
`;

export const ReservationItem = styled.div`
  flex: 1;
  text-align: ${({ textAlign }) => textAlign};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
`;

export const Button = styled.button`
  flex: 1;
  text-align: center;
  border-radius: 10px;
  padding: ${({ padding }) => padding};
  border: none;
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.blue};
`;
