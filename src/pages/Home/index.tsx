import { CardStyled, Diary, HomeStyled, ImportantTopics } from "./styles";
import { ArrowRightIcon } from "@chakra-ui/icons";

import { BossBoosted } from "../../components/BossBoosted";
import { CreatureBoosted } from "../../components/CreatureBoosted";
import { DreamScarBoss } from "../../components/DreamScarBoss";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Rashid } from "../../components/Rashid";

import quest from "../../assets/quests.png";
import creatures from "../../assets/creatures.png";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeStyled>
          <Diary>
            <Rashid />
            <CreatureBoosted />
            <BossBoosted />
            <DreamScarBoss />
          </Diary>
          <ImportantTopics>
            <div>
              <h3>
                <ArrowRightIcon w={3} h={3} />
                Biblioteca
              </h3>
            </div>
            <section>
              <CardStyled to="/quests">
                <span></span>
                <img src={quest} alt="Quest" />
                <p>Quests</p>
                <span></span>
              </CardStyled>
              <CardStyled to="/criaturas">
                <span></span>
                <img src={creatures} alt="Criaturas" />
                <p>Criaturas</p>
                <span></span>
              </CardStyled>
            </section>
          </ImportantTopics>
        </HomeStyled>
      </Main>
      <Footer />
    </>
  );
};
