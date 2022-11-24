import styled from "styled-components";
import { BaseRedirection } from "./components/redirection";

export const S_defaultButton = styled(BaseRedirection)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  gap: 10px;

  width: fit-content;
  height: 48px;

  background: var(--color-primary);

  border: 1px solid var(--color-primary);
  border-radius: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;

  color: var(--color-white);

  &:hover {
    background-color: var(--color-primary-focus);
    border-color: var(--color-primary-focus);
  }

  &::disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &&.negative {
    background-color: var(--color-primary-negative);
    border-color: var(--color-primary-negative);
  }

  &&.disabled {
    background-color: var(--grey-1);
    border-color: var(--grey-1);
  }

  &&.disabled:hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }
`;

export const S_fitButton = styled(BaseRedirection)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;

  width: fit-content;
  height: 32px;

  background: var(--grey-3);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;

  text-align: center;

  color: var(--grey-0);

  &:hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const S_plusButton = styled.button`
  width: fit-content;
  height: 32px;
  padding: 11px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--grey-3);
  border-radius: 4px;

  font-size: 1rem;
  font-weight: 900;
  text-align: center;

  &:hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
