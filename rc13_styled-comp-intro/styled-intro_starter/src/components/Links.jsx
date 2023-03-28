import styled, { css } from "styled-components";

const Links = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  &:hover {
    font-weight: 1000;
    font-size: 1.7rem;
  }

  ${({ small }) =>
    small &&
    css`
      background-color: black;
      color: white;
      padding: 20px;
      font-size: 1.5rem;
      border-radius: 10px;
    `}
`;

export default Links;
