import { ModalSearchStyled } from "./styles";

interface iModalSearchFastProps {
  searchResult: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSearchFast = ({
  searchResult,
  setModal,
}: iModalSearchFastProps) => {
  return (
    <ModalSearchStyled>
      <div>
        <button onClick={() => setModal(false)}>X</button>
        <span>
          {searchResult.split("-").map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}
        </span>
      </div>
    </ModalSearchStyled>
  );
};
