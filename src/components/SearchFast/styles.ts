import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: var(--color-grey-1);
  padding: 5px;
  border-radius: 7px;
  > label {
    color: var(--color-1);
    margin-top: 15px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > button {
      cursor: pointer;
      padding: 10px;
      border-radius: 4px;
      border: none;
      background-color: var(--color-2);
      color: var(--color-1);
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin-bottom: 10px;
    > input {
      padding: 10px;
      border-radius: 4px;
      border: none;
    }
    > button {
      padding: 10px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      background-color: var(--color-2);
      color: var(--color-1);
    }
  }
  > button {
    padding: 5px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    border-radius: 6px;
    border: none;
    background-color: var(--color-2);
    color: var(--color-5);
    cursor: pointer;
  }
`;
