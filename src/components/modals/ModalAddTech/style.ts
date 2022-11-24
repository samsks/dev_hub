import styled from "styled-components";

export const S_ModalAddTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;
  z-index: 105;

  background-color: var(--grey-2-shadow);

  & > div {
    width: 90%;
    max-width: 370px;
    height: fit-content;

    background-color: var(--grey-3);

    & > form {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;

      padding: 1rem 5%;

      & > button {
        width: 100%;
      }
    }
  }
`;
