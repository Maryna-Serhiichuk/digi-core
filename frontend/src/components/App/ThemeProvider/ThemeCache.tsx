import { FC, PropsWithChildren, useEffect, useState } from "react";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Row, Spin } from "antd";
import { Loading } from "@/components/Loading";

const cache = createCache({ key: 'css' });

export const ThemeCache: FC<PropsWithChildren> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return <Loading/>
    }

    return <CacheProvider value={cache}>
        {children}
    </CacheProvider>
}