import { ModalSearchStyled } from "./styles";

interface iModalSearchFastProps {
  characterResult: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSearchFast = ({
  characterResult,
  setModal,
}: iModalSearchFastProps) => {
  return (
    <ModalSearchStyled>
      <div>
        <button onClick={() => setModal(false)}>X</button>
        <span>
          {characterResult.split("-").map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}
        </span>
      </div>
    </ModalSearchStyled>
  );
};
