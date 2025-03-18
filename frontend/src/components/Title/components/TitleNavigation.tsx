import { Button, Space } from "antd";
import { FC, useEffect, useState } from "react";

export interface TitleNavigationArgs {
    filterArray?: Array<{key: string, label: string}>
    onChange?: (key: string | undefined) => void
}

export const TitleNavigation: FC<TitleNavigationArgs> = ({ filterArray, onChange }) => {
    const [activeKey, setActiveKey] = useState(filterArray?.[0]?.key)

    useEffect(() => {
        onChange && onChange(activeKey)
    }, [activeKey])

    return filterArray && <Space size={12}>
        {filterArray?.map(item => (
            <Button key={item?.key} onClick={() => setActiveKey(item?.key)} type={activeKey === item?.key ? 'primary' : 'default'} ghost={activeKey !== item?.key}>
                {item?.label}
            </Button>
        ))}
    </Space>
}