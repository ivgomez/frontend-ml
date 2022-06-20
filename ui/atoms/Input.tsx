import styled from "styled-components";

export const Input = (props: any) => {
  return <InputWrapper {...props} />;
};

const InputWrapper = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-size: 16px;
  line-height: 28px;
`;
