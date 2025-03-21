import { CSSProperties, RefObject, useState } from "react";

interface UseAffixContainerControllerArgs {
    ref: RefObject<HTMLDivElement | null>
}

type UseAffixContainerControllerResponse = [
    () => void,
    CSSProperties | undefined
]

export function useAffixContainerController(ref: UseAffixContainerControllerArgs['ref']): UseAffixContainerControllerResponse {
    const [affixStyles, setAffixStyles] = useState<CSSProperties | undefined>(undefined)

    const controler = () => {
        if(ref){
            const top = ref?.current?.getBoundingClientRect()?.top
            const height = ref?.current?.offsetHeight

            if(top && height){
                if(top < (0 - height)){
                    setAffixStyles({ opacity: 0 })
                } else {
                    setAffixStyles(undefined)
                }
            }
        }
    }
    
    return [
        controler,
        affixStyles
    ]
}