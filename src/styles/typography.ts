import styled, { css, keyframes } from "styled-components";
import { BaseTypography } from "./components/typography";

interface iTitleProps {
  fontSize?: string;
}

export const fadeIn = keyframes`
    20%{
        opacity: 0;
    } 
    50%{
        opacity: 5;
    }
    100%{
        opacity: 1;
    }
`;

export const Title = styled(BaseTypography)<iTitleProps>`
  font-size: 1rem;
  animation: ${fadeIn} 0.1s forwards;

  color: var(--grey-0);

  &&.grey {
    color: var(--grey-1);
  }

  &&.primary {
    color: var(--color-primary);
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-style: normal;
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 28px;
        `;

      case "two":
        return css`
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 26px;
        `;

      case "three":
        return css`
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 24px;
        `;
    }
  }}
`;

export const HeadlineText = styled(BaseTypography)<iTitleProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  animation: ${fadeIn} 0.1s forwards;

  color: var(--color-white);

  &&.bold {
    font-weight: 600;
    line-height: 18px;
  }

  &&.italic {
    font-style: italic;
  }

  &&.grey {
    color: var(--grey-1);
  }

  &&.primary {
    color: var(--color-primary);
  }
`;
