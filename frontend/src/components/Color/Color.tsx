import { ColorsType } from "@/types/theme";
import { ColorPicker } from "antd";
import { FC, useEffect, useState } from "react";

interface ColorArgs {
    onChange?: (values: ColorsType['primary']) => void
}

export const Color: FC<ColorArgs> = ({ onChange }) => {
    const [palitra, setPalitra] = useState<ColorsType['primary']>()
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

    const shapeColors = ({ r, g, b }: {r: number, g: number, b: number, a:number}): ColorsType['primary'] => {
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

    return <ColorPicker defaultValue={'#DA9E8A'} onChange={e => setRgb(e?.toRgb())}/>
}