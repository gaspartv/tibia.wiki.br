import styled from "styled-components";

export const DreamScarBossStyled = styled.div`
  background-color: var(--color-grey-4);
  min-width: 180px;
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px 0px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    max-height: 100%;
    width: 100%;
    > span {
      width: 100%;
      height: 10px;
      background-color: var(--color-2);
    }
    > img {
    }
    > p {
      display: flex;
      align-items: center;
      gap: 2px;
      color: var(--color-1);
      cursor: default;
      position: relative;
      > span {
        visibility: hidden;
        position: absolute;
        z-index: 101;
      }
      :hover span {
        visibility: visible;
        background-color: var(--color-grey-4);
        color: var(--color-1);
        width: 300px;
        font-size: 13px;
        letter-spacing: 1px;
        line-height: 18px;
        border-radius: 4px;
        padding: 8px;
        text-align: center;
        border: 1px dashed white;
      }
    }
  }
`;
