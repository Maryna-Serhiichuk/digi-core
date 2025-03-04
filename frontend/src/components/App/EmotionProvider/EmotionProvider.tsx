import { theme } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ThemeConfig } from './../ThemeProvider'

export const EmotionProvider: FC<PropsWithChildren> = ({ children }) => {
    const { token } = theme.useToken();
    
    return <ThemeProvider
        theme={{ token: (token || {}) as ThemeConfig['token'] }}
    >
        {children}
    </ThemeProvider>
}