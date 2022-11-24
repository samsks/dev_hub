import styled from "styled-components";

export const S_SignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100vw;
  height: 100%;

  & > div.divSignHeader {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    width: 90%;
    max-width: 370px;

    margin-top: 50px;

    & > img {
      width: 100px;
    }

    & > a {
      text-decoration: none;

      & > span {
        width: 80px;

        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 23px;

        text-align: center;

        color: var(--grey-0);
      }
    }
  }

  & > form {
    width: 90%;
    max-width: 370px;
    margin-bottom: 58px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 5%;

    background-color: var(--grey-3);
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    & > div.divSignTitle {
      width: 100%;
      margin-top: calc(34px - 5%);

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;

      & > h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;

        color: var(--grey-0);
      }

      & > p {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;

        color: var(--grey-1);
      }
    }

    & > button {
      width: 100%;

      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 21px;

      color: var(--color-white);
    }
  }

  @media (min-width: 500px) {
    gap: 40px;

    & > div.divSignHeader {
      width: 90%;

      margin-top: 48px;

      & > img {
        width: 125px;
      }

      & span {
        width: 70px;

        font-size: 12px;
        line-height: 28px;
      }
    }

    & > form {
      margin-bottom: 45px;

      gap: 20px;

      padding: 42px 22px;

      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

      & > div.divSignTitle {
        gap: 22px;

        & > h3 {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 22px;

          color: var(--grey-0);
        }

        & > p {
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 18px;

          color: var(--grey-1);
        }
      }
    }
  }
`;
