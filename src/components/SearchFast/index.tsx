import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCharacterInfo } from "../../api/tibialabs";
import { ModalSearchFast } from "./ModalSearch";

import { SearchStyled } from "./styles";

export const SearchFast = () => {
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);
  const [characterResult, setCharacterResul] = useState("")
  const { register, handleSubmit } = useForm();

  const character = async (search: any) => {
    const { data } = await getCharacterInfo(search.name);
    setCharacterResul(data);
    setModal(true)
  };

  return (
    <SearchStyled>
      {modal && <ModalSearchFast characterResult={characterResult} setModal={setModal} />}
      {search ? (
        <>
          <button onClick={() => setSearch(false)}>
            {search ? "Fechar menu pesquisa" : "Abrir menu pesquisa"}
          </button>

          <form onSubmit={handleSubmit(character)}>
            <label>Personagem</label>
            <input
              type="text"
              placeholder="pesquisar personagem"
              {...register("name")}
            />
            <button type="submit">Buscar</button>
          </form>

          <form action="">
            <label htmlFor="">Guild</label>
            <input type="text" placeholder="pesquisar guild" />
            <button>Buscar</button>
          </form>

          <form action="">
            <label htmlFor="">Servidor</label>
            <input type="text" placeholder="pesquisar servidor" />
            <button>Buscar</button>
          </form>

          <form action="">
            <label htmlFor="">Shared XP</label>
            <input type="number" placeholder="pesquisar shared xp" />
            <button>Buscar</button>
          </form>
        </>
      ) : (
        <button onClick={() => setSearch(true)}>
          {search ? "Fechar menu pesquisa" : "Abrir menu pesquisa"}
        </button>
      )}
    </SearchStyled>
  );
};
