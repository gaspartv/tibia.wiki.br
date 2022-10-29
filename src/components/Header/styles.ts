import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--color-grey-4);
  box-shadow: 0px 2px 5px 0px;
  position: fixed;
  z-index: 201;
  top: 0;
  width: 100%;
`;

export const DivStyled = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  > h1 {
    visibility: hidden;
    color: var(--color-1);
    @media (min-width: 425px) {
      visibility: visible;
    }
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 16px;
`;

export const LinkStyled = styled(Link)`
  background-color: var(--color-grey-3);
  padding: 8px;
  color: var(--color-1);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  :hover {
    background-color: var(--color-grey-1);
  }
`;
