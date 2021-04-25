import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${({ height }) => height};
`;

export const Header = styled.h3`
  font-weight: 700;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SelectWrapper = styled.div`
  display: flex;
  padding: ${({ padding }) => padding};
  border-radius: 10px;
  border: solid thin ${({ theme }) => theme.colors.mercury};
`;

export const Select = styled.select`
  border: none;
  width: 90%;
  line-height: 19px;
  font-weight: bold;
  option {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Input = styled.input`
  width: 92%;
  line-height: 19px;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  border: solid thin ${({ theme }) => theme.colors.mercury};
  &::placeholder {
    color: ${({ theme }) => theme.colors.scorpion};
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  width: 92%;
  height: 100px;
  border: solid thin ${({ theme }) => theme.colors.mercury};
`;
