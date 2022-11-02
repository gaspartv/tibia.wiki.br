import styled, { keyframes } from "styled-components";

const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

export const HomeStyled = styled.div``;

export const Diary = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin: 50px 0;
  @media (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ImportantTopics = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-2);
  border-radius: 6px;
  margin-bottom: 50px;
  background-color: var(--color-white);
  > div {
    display: flex;
    align-items: center;
    background-color: var(--color-2);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    > h3 {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-family-2);
      color: var(--color-white);
      padding: 12px;
      font-size: 16px;
      letter-spacing: 2px;
      cursor: default;
    }
  }
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 16px;
    > li {
      background-color: var(--color-grey-4);
      width: 180px;
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-shadow: 2px 2px 10px 0px;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.3s;
      > span {
        height: 2px;
      }
      :hover > span {
        height: 2px;
        background-color: var(--color-2);
        width: 75%;
        border-radius: 5px;
        animation: ${entring} 0.2s linear forwards;
      }
      > img {
        height: 70px;
      }
      > p {
        color: var(--color-1);
        transition: 0.3s;
      }
      :hover > p {
        color: var(--color-white);
      }
    }
  }
`;
