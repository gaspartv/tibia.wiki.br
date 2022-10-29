import styled from "styled-components";

export const RashidStyled = styled.div`
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
    }
  }
`;
