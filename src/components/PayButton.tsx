import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  position: relative;
  padding: 0.8em;
  outline: none;
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
  background: #fff;
  border: 1px solid #1b1b1b;
  transition: background 200ms ease;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`;
