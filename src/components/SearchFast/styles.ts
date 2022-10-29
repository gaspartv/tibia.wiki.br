import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
  width: 300px;
  > form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    > input {
      padding: 10px;
    }
    > button {
      padding: 10px;
      cursor: pointer;
    }
  }
  > button {
    width: 300px;
    padding: 12px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    background-color: var(--color-grey-4);
    color: var(--color-1);
    cursor: pointer;
  }
`;
