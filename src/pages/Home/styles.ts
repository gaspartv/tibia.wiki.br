import styled from "styled-components";

export const HomeStyled = styled.div`
  > section {
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
  }
`;

export const SearchStyled = styled.section`

`