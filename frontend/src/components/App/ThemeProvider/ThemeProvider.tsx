"use client"

import { FC, PropsWithChildren, useState, useMemo, useCallback } from 'react';
import { ConfigProvider, Grid } from 'antd';
import { Roboto_Mono, Roboto_Flex } from 'next/font/google'
import EmotionProvider from '../EmotionProvider';
import { responsiveSize } from '@/utils/responsiveSize';
import { ColorsType, ThemeConfig } from '@/types/theme';

const robotoMono = Roboto_Mono({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const robotoFlex = Roboto_Flex({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

const darkTheme: ThemeConfig = {

}

const colors: ColorsType = {
    test: '#ff0000',
    absolute: {
        text: '#ffffff',
        background: '#000000'
    },
    orange: {
        '60': '#ce7d63',
        '65': '#D48E77',
        '70': '#DA9E8A',
        '80': '#E7BEB1',
        '90': '#F3DFD8',
        '95': '#F9EFEC',
        '97': '#FBF5F3',
        '99': '#FEFCFB'
    },
    dark: {
        '06': '#0F0F0F',
        '10': '#191919',
        '12': '#1F1F1F',
        '15': '#262626',
        '20': '#333333',
        '25': '#404040',
        '30': '#4C4C4C',
        '35': '#595959'
    },
    grey: {
        '40': '#676665',
        '50': '#81807E',
        '70': '#B3B3B2',
        '80': '#CCCCCC',
        '90': '#E6E6E6',
        '95': '#F2F2F2',
        '97': '#F7F7F7',
        '99': '#FCFCFC'
    }
}

const globalStyles = `
    * {
        font-family: ${robotoMono.style.fontFamily};
    }
    @media (prefers-color-scheme: dark) {
        :root {
            --background: ${colors.dark['06']};
        }
    }
    .ant-btn-color-primary {
        box-shadow: none;
    }
    a.active {
        .ant-btn.ant-btn-default {
            color: ${colors.orange[80]};
        }
    }
    .ant-btn {
        text-transform: uppercase;
        font-weight: 500;
    }
    h1.ant-typography {
        ${responsiveSize('font-size', 78, 54, 28)}
        letter-spacing: -2px;
        font-weight: 500;
        text-transform: uppercase;
    }
    h2.ant-typography {
        ${responsiveSize('font-size', 48, 38, 28)}
        font-weight: 600;
        text-transform: uppercase;
    }
    h3.ant-typography { 
        font-family: ${robotoMono.style.fontFamily};
        font-weight: 400;
        color: ${colors.orange[95]};
        text-transform: uppercase;
        ${responsiveSize('font-size', 30, 20, 20)}
    }
    h4.ant-typography { 
        font-family: ${robotoMono.style.fontFamily};
        font-weight: 500;
        color: ${colors.grey[40]};
        ${responsiveSize('font-size', 23, 20, 18)}
    }
    h5.ant-typography {
        font-weight: 400;
        color: ${colors.grey[70]};
        margin-bottom: 5px;
        ${responsiveSize('font-size', 21, 16, 14)}
    }
    h1, h2, h3, h4, h5 {
        &.ant-typography {
            font-family: ${robotoFlex.style.fontFamily};
            
        }
    }
    .ant-typography {
         ${responsiveSize('font-size', 18, 16, 14)}
    }
    .ant-form-item-label {
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const { xs, sm, md, lg, xl } = Grid.useBreakpoint()
    const [isDarkMode, setIsDarkMode] = useState(false)

    const getCollapseHeadPadding = useCallback(() => {
        if (xl) return 50
        if (md) return 40
        if (sm) return 24
        if (xs) return 24
        return 60
    }, [xl, md, sm, xs])

    const lightTheme: ThemeConfig = useMemo(() => ({
        // algorithm: theme.darkAlgorithm,
        token: {
            colors: colors,
            // Seed Token
            // colorPrimary: '#cebd63',
            borderRadius: 2,
    
            colorBgBase: colors.dark['06'],  // Фон всього сайту
            // colorText: colors.grey[70],    // Основний колір тексту
    
            // Alias Token
            // colorBgContainer: '#f6ffed',
        },
        components: {
            Button: {
              colorPrimary: colors.orange[60],
            //   algorithm: true, // Enable algorithm
              paddingInline: 24,
              paddingBlock: 18,
              borderRadius: 10,
              controlHeight: 63,
              primaryColor: colors.dark['06'],
              colorPrimaryHover: colors.orange[70],
              ghostBg: colors.dark[12],
              defaultGhostColor: colors.orange[95],
              defaultGhostBorderColor: 'transparent',
              defaultBg: colors.absolute.background,
              defaultColor: colors.grey[50],
              defaultBorderColor: 'transparent',
              defaultHoverBg: colors.absolute.background,
              defaultHoverColor: colors.orange[80],
              defaultHoverBorderColor: 'transparent',
              defaultActiveBg: colors.orange[80],
              defaultActiveBorderColor: 'transparent',
              contentFontSize: 18,
              colorLink: colors.orange[90],
              colorLinkActive: colors.orange[60],
              colorLinkHover: colors.orange[60],
              colorIconHover: colors.orange[60],
            },
            Form: {
                labelColor: colors?.orange[90],
                labelFontSize: 18,
            },
            Input: {
              colorPrimary: '#eb2f96',
              paddingBlock: 24,
              paddingInline: 24,
              borderRadius: 12,
              colorText: colors.grey[90],
              fontSize: 18,
              colorTextPlaceholder: colors.grey[40],
              activeBorderColor: colors?.orange[70],
              hoverBorderColor: colors?.orange[70],
              activeShadow: 'none',
              // algorithm: true, // Enable algorithm
            },
            Typography: {
                colorText: colors.grey[70],
                // fontSizeHeading1: getFontSizeHeading1(),
                // fontSizeHeading4: 20,
                // fontSizeHeading5: 18,
                colorTextHeading: colors.orange[95],
                titleMarginTop: 0,
                titleMarginBottom: 0,
            },
            Collapse: {
                contentPadding: getCollapseHeadPadding(),
                headerPadding: getCollapseHeadPadding(),
            },
            Divider: {
                colorSplit: colors?.dark[15]
            },
            Checkbox: {
                colorText: colors.grey[70],
                colorPrimary: colors?.orange[60],
                colorPrimaryHover: colors?.orange[60],
                colorWhite: colors?.dark?.['06'],
                controlInteractiveSize: 28,
                fontSize: 18
            }
        },
    }), [xl])

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     } else {
//       setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//   }, []);

    return (
        <ConfigProvider
            theme={isDarkMode ? darkTheme : lightTheme}
        >
            <EmotionProvider>
                <style>{globalStyles}</style>
                {children}
            </EmotionProvider>
        </ConfigProvider>
    )
}