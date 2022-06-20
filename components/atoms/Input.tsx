import styled from "styled-components";

export const Input = () => {
  return <InputWrapper />;
};

const InputWrapper = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  line-height: 28px;
`;
