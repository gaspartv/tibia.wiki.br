import styled from "styled-components";

export const StoreStyled = styled.div`
  margin: 75px 0;
`;

export const SectionStoreStyled = styled.section`
  padding: 16px;
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    > li {
      cursor: pointer;
    }
  }
`;

export const SectionSellStyled = styled.section``;
export const SectionBuyStyled = styled.section`
  display: flex;
  justify-content: center;
  > form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-2);
    padding: 16px;
    border-radius: 12px;
    > h2 {
      font-family: var(--font-family-2);
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      text-align: center;
      margin-bottom: 20px;
    }
    > h3 {
      font-size: 18px;
      font-family: var(--font-family-2);
      font-weight: 600;
      color: var(--color-white);
      letter-spacing: 1px;
      padding-left: 8px;
    }
    > input {
      padding: 8px;
      border-radius: 8px;
    }
    > input[type="range"] {
      width: 100%;
      margin: 0;
    }
    > datalist {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      writing-mode: vertical-lr;
      width: 100%;
      color: var(--color-white);
      font-family: var(--font-family-2);
      > option {
        padding: 0;
      }
    }
    > button {
      font-size: 18px;
      letter-spacing: 1px;
      margin: 20px 0;
      text-transform: uppercase;
      background-color: var(--color-3);
      padding: 12px;
      border-radius: 8px;
      color: var(--color-white);
      font-family: var(--font-family-2);
      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;
