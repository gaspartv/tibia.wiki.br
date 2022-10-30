import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { getCharacterInfo, getGuild, getServidor } from "../../api/tibialabs";
import { AnimationContext } from "../../contexts/AutoAnimation";
import { ModalSearchFast } from "./ModalSearch";

import { SearchStyled } from "./styles";

export const SearchFast = () => {
  const { parent } = useContext(AnimationContext);
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);
  const [personagem, setPersonagem] = useState(false);
  const [guild, setGuild] = useState(false);
  const [servidor, setServidor] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const { register, handleSubmit } = useForm();

  const character = async (search: any) => {
    const { data } = await getCharacterInfo(search.name);
    setSearchResult(data);
    setModal(true);
  };

  const guildSearch = async (search: any) => {
    const { data } = await getGuild(search.name);
    setSearchResult(data);
    setModal(true);
  };

  const servidorSearch = async (search: any) => {
    const { data } = await getServidor(search.name);
    setSearchResult(data);
    setModal(true);
  };

  return (
    <SearchStyled ref={parent}>
      {modal && (
        <ModalSearchFast searchResult={searchResult} setModal={setModal} />
      )}
      {search ? (
        <>
          <button onClick={() => setSearch(false)}>
            {search ? "Fechar menu pesquisa" : "Abrir menu pesquisa"}
          </button>

          <label>
            Personagem
            {personagem ? (
              <button onClick={() => setPersonagem(false)}>X</button>
            ) : (
              <button onClick={() => setPersonagem(true)}>Buscar</button>
            )}
          </label>
          <form onSubmit={handleSubmit(character)}>
            {personagem && (
              <>
                <input
                  type="text"
                  placeholder="pesquisar personagem"
                  {...register("name")}
                />
                <button type="submit">Buscar</button>
              </>
            )}
          </form>

          <label>
            Guild
            {guild ? (
              <button onClick={() => setGuild(false)}>X</button>
            ) : (
              <button onClick={() => setGuild(true)}>Buscar</button>
            )}
          </label>
          <form onSubmit={handleSubmit(guildSearch)}>
            {guild && (
              <>
                <input
                  type="text"
                  placeholder="pesquisar guild"
                  {...register("name")}
                />
                <button>Buscar</button>
              </>
            )}
          </form>

          <label>
            Servidor
            {servidor ? (
              <button onClick={() => setServidor(false)}>X</button>
            ) : (
              <button onClick={() => setServidor(true)}>Buscar</button>
            )}
          </label>
          <form onSubmit={handleSubmit(servidorSearch)}>
            {servidor && (
              <>
                <input
                  type="text"
                  placeholder="pesquisar servidor"
                  {...register("name")}
                />
                <button>Buscar</button>
              </>
            )}
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
