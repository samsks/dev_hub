import styled from "styled-components";

export const S_techCard = styled.li`
  width: 100%;
  min-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;

  border-radius: 4px;

  background-color: var(--grey-4);

  cursor: pointer;

  &:hover {
    background-color: var(--grey-2);
  }
`;
