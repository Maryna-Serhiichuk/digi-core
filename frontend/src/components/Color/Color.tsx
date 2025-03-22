import { ColorsType } from "@/types/theme";
import { ColorPicker } from "antd";
import { FC, useEffect, useState } from "react";

type ColorResponse = 'primary' | 'dark'

interface ColorArgs {
    onChange?: (values: ColorsType[ColorResponse]) => void
    defaultValue?: string
    type?: 'theme' | 'primary'
}

export const Color: FC<ColorArgs> = ({ onChange, defaultValue, type }) => {
    const [palitra, setPalitra] = useState<ColorsType[ColorResponse]>()
    const [rgb, setRgb] = useState<{r: number, g: number, b: number, a:number}>()

    useEffect(() => {
        (onChange && palitra) && onChange(palitra)
    }, [palitra])

    useEffect(() => {
        if(rgb) {
            const result = shapeColors(rgb)
            setPalitra(result)
        }
    }, [rgb])

    const shapeColors = ({ r, g, b }: {r: number, g: number, b: number, a:number}): ColorsType[ColorResponse] => {

        if(type == 'theme') {
            const factors: { [key in keyof ColorsType['dark']]: number } = {
                '06': 1.0,
                '10': 1.67,
                '12': 2.07,
                '15': 2.53,
                '20': 3.4,
                '25': 4.27,
                '30': 5.07,
                '35': 5.93
            }

            const pal = Object.entries(factors)?.map(item => {
                const newR = Math.min(255, Math.round(r * item[1]));
                const newG = Math.min(255, Math.round(g * item[1]));
                const newB = Math.min(255, Math.round(b * item[1]));
                return [item[0], `rgb(${newR}, ${newG}, ${newB})`]
            })

            return Object.fromEntries(pal)
        }

        return {
            '60': `rgb(${Math.round(r * 0.7)}, ${Math.round(g * 0.7)}, ${Math.round(b * 0.7)})`,
            '65': `rgb(${Math.round(r * 0.85)}, ${Math.round(g * 0.85)}, ${Math.round(b * 0.85)})`,
            '70': `rgb(${r}, ${g}, ${b})`,
            '80': `rgb(${Math.round(r + (255 - r) * 0.2)}, ${Math.round(g + (255 - g) * 0.2)}, ${Math.round(b + (255 - b) * 0.2)})`,
            '90': `rgb(${Math.round(r + (255 - r) * 0.4)}, ${Math.round(g + (255 - g) * 0.4)}, ${Math.round(b + (255 - b) * 0.4)})`,
            '95': `rgb(${Math.round(r + (255 - r) * 0.6)}, ${Math.round(g + (255 - g) * 0.6)}, ${Math.round(b + (255 - b) * 0.6)})`,
            '97': `rgb(${Math.round(r + (255 - r) * 0.8)}, ${Math.round(g + (255 - g) * 0.8)}, ${Math.round(b + (255 - b) * 0.8)})`,
            '99': `rgb(${Math.round(r + (255 - r) * 0.95)}, ${Math.round(g + (255 - g) * 0.95)}, ${Math.round(b + (255 - b) * 0.95)})`
        }
    }

    return <ColorPicker defaultValue={defaultValue} onChange={e => setRgb(e?.toRgb())}/>
}