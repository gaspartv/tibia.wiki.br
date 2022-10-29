import styled from "styled-components";

export const CreatureBoostedStyled = styled.div`
  background-color: var(--color-grey-4);
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 2px 2px 10px 0px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
