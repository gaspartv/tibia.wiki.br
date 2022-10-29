import { ContainerStyled } from "../../styles/Global";

import { DivStyled, HeaderStyled, LinkStyled, NavStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <DivStyled>
          <h1>Tibia Wiki BR</h1>
          <NavStyled>
            <LinkStyled to="/"> Início </LinkStyled>
            <LinkStyled to="/loja"> Loja </LinkStyled>
            <LinkStyled to="/contato"> Contato </LinkStyled>
          </NavStyled>
        </DivStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
