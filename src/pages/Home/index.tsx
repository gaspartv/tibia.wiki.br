import { CreatureBoosted } from "../../components/CreatureBoosted";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Rashid } from "../../components/Rashid";
import { HomeStyled } from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeStyled>
          <Rashid />
          <CreatureBoosted />
        </HomeStyled>
      </Main>
      <Footer />
    </>
  );
};
