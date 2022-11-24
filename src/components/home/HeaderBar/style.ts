import styled from "styled-components";

export const S_HeaderBar = styled.header`
  position: fixed;
  top: 0;

  z-index: 200;

  height: 72px;
  width: 100%;

  background-color: var(--grey-4);

  border-bottom: 1px solid var(--grey-3);

  & > div {
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 105.5px;
    }
  }

  @media (min-width: 500px) {
    & > div {
      & > img {
        width: 122px;
      }
    }
  }
`;
