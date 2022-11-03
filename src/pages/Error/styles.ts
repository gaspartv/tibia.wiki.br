import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const ErrorStyled = styled.div`
  margin-top: 175px;
  text-align: center;
  cursor: default;
  > h1 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: var(--font-family-1);
  }
  > h2 {
    font-size: 160px;
    font-weight: 400;
    color: var(--color-2);
    font-family: var(--font-family-2);
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  position: relative;
  :hover span {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 1px;
    background-color: var(--color-2);
    animation: ${entring} 0.2s linear forwards;
  }
`;
