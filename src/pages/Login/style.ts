import styled from "styled-components";

export const S_LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  & > img {
    width: 100px;
  }

  & > form {
    width: 90%;
    max-width: 370px;
    height: fit-content;

    margin-top: 20px;
    padding: 5% 5% 0 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    background-color: var(--grey-3);
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 4px 4px 0 0;

    & > h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 14.439px;
      line-height: 22px;

      color: var(--grey-0);
    }
  }

  & > div.divSign {
    width: 90%;
    max-width: 370px;
    height: fit-content;

    padding: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;

    background-color: var(--grey-3);
    box-shadow: 0px 4px 0px -8px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 4px 4px;
  }

  & a {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    text-decoration: none;

    color: var(--grey-1);
  }

  & button,
  .spanButton,
  .linkButton {
    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;

    color: var(--color-white);
  }

  @media (min-width: 500px) {
    & > img {
      width: 145px;
    }

    & > form {
      margin-top: 36px;
      padding: 42px 22px 0 22px;

      gap: 10px;

      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

      & > h3 {
        font-size: 18px;
        line-height: 28px;
      }
    }

    & > div.divSign {
      padding: 34px 22px 42px 22px;
    }

    & a {
      font-size: 12px;
      line-height: 18px;
    }

    & button,
    .spanButton,
    .linkButton {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
