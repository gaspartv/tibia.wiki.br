import { HomeStyled } from "./styles";

import { BossBoosted } from "../../components/BossBoosted";
import { CreatureBoosted } from "../../components/CreatureBoosted";
import { DreamScarBoss } from "../../components/DreamScarBoss";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Rashid } from "../../components/Rashid";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeStyled>
          <Rashid />
          <CreatureBoosted />
          <BossBoosted />
          <DreamScarBoss />
        </HomeStyled>
      </Main>
      <Footer />
    </>
  );
};
