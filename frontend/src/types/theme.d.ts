import 'antd/es/theme/interface';
import { ThemeConfig as AntdThemeConfig, } from 'antd';

type AppThemeToken = Required<AntdThemeConfig['token']> & { colors: ColorsType }

type ThemeConfig = Omit<AntdThemeConfig, 'token'> & {
    token?: Partial<AppThemeToken>
};

type ColorsType = {
    test: string,
    absolute: {
        text: string,
        background: string
    },
    orange: {
        '60': string,
        '65': string,
        '70': string,
        '80': string,
        '90': string,
        '95': string,
        '97': string,
        '99': string,
    },
    dark: {
        '06': string,
        '10': string,
        '12': string,
        '15': string,
        '20': string,
        '25': string,
        '30': string,
        '35': string,
    },
    grey: {
        '40': string,
        '50': string,
        '70': string,
        '80': string,
        '90': string,
        '95': string,
        '97': string,
        '99': string,
    },
}

declare module 'antd/es/theme/interface' {
  interface GlobalToken {
    colors?: ColorsType
  }
}
