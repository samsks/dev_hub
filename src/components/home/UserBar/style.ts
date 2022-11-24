import styled from "styled-components";

export const S_UserBar = styled.section`
  height: 131px;
  width: 100%;

  margin-top: 73px;
  border-bottom: 1px solid var(--grey-3);

  & > div {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  @media (min-width: 500px) {
    height: 118px;

    & > div {
      flex-direction: row;
      gap: unset;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
