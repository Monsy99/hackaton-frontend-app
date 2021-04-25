import styled from "styled-components";

export const BottomComponentWrapper = styled.div`
  display: flex;
  margin: 20px 0 20px 0;
  overflow-x: scroll;
`;

export const SpecialistsCard = styled.div`
  border: none;
  padding: 20px;
  border-radius: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 20px;
  width: 340px;
  height: 195px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SpecialistsItem = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 30px;
`;

export const TopServicesCard = styled.div`
  flex-direction: column;
  border: none;
  padding: 20px;
  border-radius: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 20px;
  width: ${({ width }) => width};
  height: 195px;
  background-color: ${({ theme }) => theme.colors.white};
`;
