import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuestStyled = styled.div`
  margin: 75px 0;
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 16px;
`;

export const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const HeaderStyled = styled.div`
  font-family: var(--font-family-1);
  background-color: var(--color-3);
  color: var(--color-white);
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CardStyled = styled(Link)`
  font-family: var(--font-family-1);
  background-color: var(--color-white);
  padding: 16px;
  border-radius: 6px;
  border: 2px solid var(--color-2);
  box-shadow: 0px 2px 5px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  align-items: center;
  gap: 20px;
  > h3 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
    max-width: 200px;
    width: 100%;
  }
  > p {
    letter-spacing: 1px;
    line-height: 24px;
    > span {
      font-weight: 600;
    }
  }
  .reward {
    width: 100%;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DivSearchStyled = styled.form`
  display: flex;
  width: 100%;
  max-width: 350px;
  position: relative;
  > button {
    height: 100%;
    width: 40px;
    background-color: var(--color-3);
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid var(--color-2);
    border-left: transparent;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    :hover {
      background-color: var(--color-2);
    }
  }
`;

export const InputStyled = styled.input`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 100%;
    border-radius: 6px;
    padding: 8px;
    color: var(--color-5);
    ::placeholder {
      color: var(--color-1);
    }
  }
`;
