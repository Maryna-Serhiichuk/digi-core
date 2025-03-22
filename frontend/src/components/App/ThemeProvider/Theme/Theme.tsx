import { ColorsType } from "@/types/theme";
import { FC, useEffect, useState } from "react";

interface ColorArgs {
    onChange?: (values: Pick<ColorsType, 'dark' | 'primary'>) => void
}

type OptionType = { theme: string, color: string }

const options: Array<OptionType> = [
    { theme: 'rgb(15, 15, 15)', color: 'rgb(206, 125, 99)' },
    { theme: 'rgb(26, 37, 51)', color: 'rgb(248, 199, 204)' },
    { theme: 'rgb(31, 39, 27)', color: 'rgb(244, 162, 97)' },
    { theme: 'rgb(10, 15, 13)', color: 'rgb(255, 209, 102)' },
    { theme: 'rgb(33, 37, 41)', color: 'rgb(32, 201, 151)' },
]

export const Theme: FC<ColorArgs> = ({ onChange }) => {
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

        function generateRGB(r: number, g: number, b: number, factor: number, isDarkening: boolean = false): string {
            const calcValue = (base: number) => 
                isDarkening 
                    ? Math.round(base * factor) 
                    : Math.round(base + (255 - base) * factor);
            return `rgb(${calcValue(r)}, ${calcValue(g)}, ${calcValue(b)})`;
        }

        const getPrimaty = () => {
            const { r, g, b } = rgbToObject(color)
            const factors: { [key in keyof ColorsType['primary']]: number } = {
                '60': 1,
                '65': 0.85,
                '70': 0.25,
                '80': 0.2,
                '90': 0.7,
                '95': 0.9,
                '97': 0.8,
                '99': 0.95
            }
            
            return {
                '60': generateRGB(r, g, b, factors['60'], true),
                '65': generateRGB(r, g, b, factors['65'], true),
                '70': generateRGB(r, g, b, factors['70']),
                '80': generateRGB(r, g, b, factors['80']),
                '90': generateRGB(r, g, b, factors['90']),
                '95': generateRGB(r, g, b, factors['95']),
                '97': generateRGB(r, g, b, factors['97']),
                '99': generateRGB(r, g, b, factors['99'])
            };
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
            <div key={opt?.color} style={{ 
                background: `linear-gradient(to bottom right, ${opt?.theme} 30%, ${opt?.color} 70%)`,
                height: 25,
                width: 25,
                cursor: 'pointer'
            }} onClick={() => shapeColors(opt)}/>
        ))}
    </div>
}