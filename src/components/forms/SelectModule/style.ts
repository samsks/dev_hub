import styled from "styled-components";

export const S_SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > label {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;

    color: var(--grey-0);
  }

  & > select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;

    width: 100%;
    height: 50px;

    background: var(--grey-2);

    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }
`;
