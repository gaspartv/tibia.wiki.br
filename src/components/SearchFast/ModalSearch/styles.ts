import styled from "styled-components";

export const ModalSearchStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000095;
  > div {
    background-color: var(--color-5);
    width: 300px;
    height: 300px;
    border-radius: 6px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-1);
    position: relative;
    > button {
      background-color: transparent;
      position: absolute;
      right: 10px;
      top: 10px;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 22px;
      font-weight: 700;
      color: var(--color-1);
      cursor: pointer;
      :hover {
        color: #fff;
      }
    }
    > span {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;
