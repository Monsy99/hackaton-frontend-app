import styled from "styled-components";

export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: -40px;
  margin-top: 30px;
`;

export const Label = styled.div`
  flex: 1;
  text-align: ${({ textAlign }) => textAlign};
`;
