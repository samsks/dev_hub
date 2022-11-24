import styled from "styled-components";

export const S_modalHeader = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  background-color: var(--grey-2);

  & > span {
    padding: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
