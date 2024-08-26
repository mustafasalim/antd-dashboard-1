import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  layoutContent: css`
    margin: '24px 16px 0';
    padding: 10px 0px;
  `,
  layoutContentMain: css`
    height: 100%;
    padding: 24px;
    background: ${token.colorBgContainer};
    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadiusLG}px;
    overflow-y: auto;
  `,
}));
