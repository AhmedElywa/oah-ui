import { Card } from 'oah-ui';
import styled, { css } from 'styled-components';

const MdxLayoutStyle = styled(Card)`
  ${({ theme }) => css`
    margin-bottom: 1rem;

    .note {
      padding: 1.25rem 3rem 1.5rem 1.25rem;
      border-radius: 0.25rem;
      margin-bottom: 3rem;

      .note-title {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      .note-body {
        font-size: 0.875rem;
        line-height: 1.5;
      }

      &.note-info,
      &.note-info p {
        color: ${theme.colorInfo600};
        background-color: #f0f6ff;
      }

      &.note-warning {
        color: ${theme.colorWarning600};
        background-color: #fffae4;
      }
    }

    .color-swatch {
      display: inline-block;
      border: 1px solid black;
      width: 0.875rem;
      height: 0.875rem;
      margin-left: 7px;
      margin-bottom: -2px;
      border-radius: 2px;
    }
    p {
      font-size: ${theme.textParagraphFontSize};
      line-height: 1.5;
    }
    a {
      color: ${theme.linkTextColor};
      font-weight: ${theme.cardTextFontWeight};
      text-decoration: none;
      &:hover {
        color: ${theme.linkTextHoverColor};
        text-decoration: underline;
      }
    }
    .menu-items > .menu-item {
      margin-bottom: 0.5rem;
      font-weight: bold;
      a:hover {
        font-weight: bold;
        text-decoration: none;
      }
      li {
        font-size: 0.875rem;
        font-weight: normal;
      }
      li.menu-group {
        font-weight: bold;
        padding-top: 1.25rem;
        padding-bottom: 1rem;
      }
    }
  `}
`;
export default MdxLayoutStyle;
