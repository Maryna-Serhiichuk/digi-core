import { RefObject, useState } from "react";

interface UseAffixContainerControllerArgs {
    ref: RefObject<HTMLDivElement | null>
}

type UseAffixContainerControllerResponse = [
    () => void,
    string|undefined
]

export function useAffixContainerController(ref: UseAffixContainerControllerArgs['ref']): UseAffixContainerControllerResponse {
    const [affixPosition, setAffixPosition] = useState<string|undefined>(undefined)

    const controler = () => {
        if(ref){
            const scroll = window?.scrollY
            const top = ref?.current?.offsetTop
            const height = ref?.current?.offsetHeight
    
            if(top && height) {
                if(scroll > (top + height + 200)) {
                    setAffixPosition('none')
                } else {
                    setAffixPosition(undefined)
                }
            }
        }
    }
    
    return [
        controler,
        affixPosition
    ]
}