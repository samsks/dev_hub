import styled from "styled-components";

export const S_Homepage = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  background-color: var(--grey-4);

  & > main {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: fit-content;

      margin-top: 19px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      width: 100%;
      height: fit-content;
      max-height: 500px;

      overflow-y: auto;

      margin-top: 22px;
      padding: 22px 3%;

      background-color: var(--grey-3);

      border-radius: 4px;
    }
  }
`;
