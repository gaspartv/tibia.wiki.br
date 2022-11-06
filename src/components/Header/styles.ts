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

export const HeaderStyled = styled.header`
  background-color: var(--color-grey-4);
  box-shadow: 0px 2px 5px 0px;
  position: fixed;
  z-index: 201;
  top: 0;
  width: 100%;
  min-width: 320px;
`;

export const DivStyled = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  > h1 {
    visibility: hidden;
    color: var(--color-white);
    font-family: var(--font-family-3);
    font-size: 28px;
    cursor: default;
    @media (min-width: 768px) {
      visibility: visible;
    }
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 16px;
`;

export const LinkStyled = styled(Link)`
  font-family: var(--font-family-2);
  padding: 8px;
  color: var(--color-1);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  position: relative;
  :hover {
    color: var(--color-white);
  }
  :hover span {
    position: absolute;
    bottom: 11px;
    left: 0;
    height: 1px;
    background-color: var(--color-2);
    animation: ${entring} 0.2s linear forwards;
  }
`;
