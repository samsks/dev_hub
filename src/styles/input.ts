import styled from "styled-components";

export const S_defaultInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 1rem;
  gap: 10px;

  width: fit-content;
  height: 48px;

  background: var(--grey-2);

  border: 1px solid var(--grey-2);
  border-radius: 4px;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;

    color: var(--grey-1);
  }

  :focus {
    outline: none;
    border: 1px solid var(--grey-0);
  }
  :focus::placeholder {
    color: var(--grey-0);
  }
`;
