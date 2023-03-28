import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink;
  color: white; */

  background-color: ${(props) => (props.primary ? "white" : "hotpink")};
  color: ${({ primary }) => (primary ? "hotpink" : "white")};
  width: 8rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid hotpink;
  border-color: hotpink;
  margin-right: 10px;
  font-size: 1.1rem;
  &:hover {
    transform: scale(0.95);
  }
`;

export const FS13Button = styled(Button)`
  background-color: ${({ react }) => (react ? "gray" : "white")};
  color: ${({ react }) => (react ? "white" : "gray")};
  border: 2px solid gray;
  border-color: ${({ react }) => (react ? "white" : "gray")};
`;
