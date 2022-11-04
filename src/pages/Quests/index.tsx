import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { dataQuests } from "../../data/data_quests";
import { ContainerStyled } from "../../styles/Global";
import {
  CardStyled,
  HeaderStyled,
  ListStyled,
  QuestStyled,
  SectionStyled,
} from "./styles";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

interface iQuestList {
  id: number;
  level: string;
  reward: string;
  status: string;
  title: string;
}

export const Quests = () => {
  const [listQuest, setListQuest] = useState<iQuestList[] | null>(null);
  const [orderList, setOrderList] = useState("alphabetical");

  useEffect(() => {
    if (orderList === "alphabetical") {
      const result = dataQuests.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setListQuest(result);
    }
    if (orderList === "level") {
      const result = dataQuests.sort(
        (a, b) => Number(a.level) - Number(b.level)
      );
      setListQuest(result);
    }
  }, [orderList]);

  return (
    <>
      <Header />
      <QuestStyled>
        <ContainerStyled>
          <SectionStyled>
            <ListStyled>
              <HeaderStyled>
                <Menu>
                  <MenuButton
                    colorScheme="#348e91"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    _hover={{ bg: "#348e91" }}
                    _expanded={{ bg: "#348e91" }}
                  >
                    Pesquisar por
                  </MenuButton>
                  <MenuList backgroundColor={"#348e91"}>
                    <MenuItem
                      onClick={() => setOrderList("alphabetical")}
                      _focus={{ bg: "#1c5052" }}
                    >
                      Ordem alfabética
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOrderList("level")}
                      _focus={{ bg: "#1c5052" }}
                    >
                      Level
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HeaderStyled>
            </ListStyled>
            {listQuest?.map((elem) => (
              <ListStyled key={elem.id}>
                <CardStyled to="">
                  <h3>{elem.title}</h3>
                  <p>
                    <span>Level: </span>
                    {elem.level}
                  </p>
                  <p>
                    <span>Status: </span>
                    {elem.status}
                  </p>
                  <p className="reward">
                    <span>Recompensas: </span>
                    {elem.reward}
                  </p>
                </CardStyled>
              </ListStyled>
            ))}
          </SectionStyled>
        </ContainerStyled>
      </QuestStyled>
      <Footer />
    </>
  );
};
