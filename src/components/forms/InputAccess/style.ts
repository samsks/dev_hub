import styled from "styled-components";

export const S_inputForm = styled.div`
  width: 100%;
  min-height: 70px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  & > label {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: var(--grey-0);

    & > input {
      width: 100%;
      min-height: 38px;

      ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;

        color: var(--grey-1);
      }
    }
  }

  & > span {
    font-size: 8px;
    line-height: 8px;
    height: fit-content;
    color: var(--color-negative);
  }

  @media (min-width: 500px) {
    gap: 4px;
    min-height: 87px;

    & > label {
      font-size: 12px;

      & > input {
        height: 48px;

        ::placeholder {
          font-size: 16px;
          line-height: 26px;
        }
      }
    }

    & > span {
      font-size: 10px;
      line-height: 10px;
    }
  }
`;
