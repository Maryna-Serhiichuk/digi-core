import { ColorsType } from "@/types/theme";
import { FC, useEffect, useState } from "react";

interface ColorArgs {
    onChange?: (values: Pick<ColorsType, 'dark' | 'primary'>) => void
}

type OptionType = { theme: string, color: string }

const options: Array<OptionType> = [
    { theme: 'rgb(15, 15, 15)', color: 'rgb(250, 125, 82)' },
    { theme: 'rgb(26, 37, 51)', color: 'rgb(248, 199, 204)' },
    { theme: 'rgb(31, 39, 27)', color: 'rgb(244, 162, 97)' },
    { theme: 'rgb(10, 15, 13)', color: 'rgb(255, 209, 102)' },
    { theme: 'rgb(33, 37, 41)', color: 'rgb(32, 201, 151)' },
    // { theme: '', color: '' },
]

export const Color: FC<ColorArgs> = ({ onChange }) => {
    const [theme, setTheme] = useState<Pick<ColorsType, 'dark' | 'primary'>>()

    useEffect(() => {
        (onChange && theme) && onChange(theme)
    }, [theme])

    const shapeColors = ({ theme, color }: OptionType) => {

        const getDark = () => {
            const { r, g, b } = rgbToObject(theme)
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

        const getPrimaty = () => {
            const { r, g, b } = rgbToObject(color)
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
        
        setTheme({ dark: getDark(), primary: getPrimaty() })
    }

    function rgbToObject(rgb: string): { r: number; g: number; b: number } {
        const matches = rgb.match(/\d+/g)
        if (!matches) {
            throw new Error("Invalid RGB format")
        }
        const [r, g, b] = matches.map(Number)
        return { r, g, b };
    }

    return <div style={{ padding: 5, display: 'flex', gap: 10 }}>
        {options?.map(opt => (
            <div style={{ 
                background: `linear-gradient(to bottom right, ${opt?.theme} 30%, ${opt?.color} 70%)`,
                height: 25,
                width: 25
            }} onClick={() => shapeColors(opt)}>

            </div>
        ))}
    </div>
}