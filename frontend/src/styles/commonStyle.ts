// commonStyles.ts
import { css } from '@emotion/react';

export const boxShadow = css`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const linkStyle = css`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
