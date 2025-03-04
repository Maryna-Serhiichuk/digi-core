"use client"

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ConfigProvider, theme, ThemeConfig } from 'antd';

const darkTheme: ThemeConfig = {

}

const lightTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // screenXS: 480, // Мобільний екран // TODO: need testing
        // screenSM: 576, // Малий екран
        // screenMD: 768, // Планшет
        // screenLG: 992, // Десктоп

        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
    },
    components: {
        Button: {
          colorPrimary: '#00b96b',
          algorithm: true, // Enable algorithm
        },
        Input: {
          colorPrimary: '#eb2f96',
          algorithm: true, // Enable algorithm
        }
    },
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

    return (
        <ConfigProvider
            theme={isDarkMode ? darkTheme : lightTheme}
        >
            {children}
        </ConfigProvider>
    )
}

// const { useToken } = theme;
// import { Grid } from 'antd';
// const { useBreakpoint } = Grid;

// const Example: FC = () => {
//     const { token } = useToken();
//     const { xs, sm, md, lg } = useBreakpoint();

//     return (
//         <div
//           style={{
//             backgroundColor: token.colorPrimaryBg,
//             padding: token.padding,
//             borderRadius: token.borderRadius,
//             color: token.colorPrimaryText,
//             fontSize: token.fontSize,
//           }}
//         >
//           Example
//         </div>
//     );
// }