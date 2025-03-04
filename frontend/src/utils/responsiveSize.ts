export const responsiveSize = (property: string, pcSize: number, middleSize: number, mobSize: number) => {
    const maxView = 1900
    const middleView = 1440
    const minView = 390

    const mob = mobSize,
        middle = middleSize,
        pc = pcSize

    const addSize = pc - mob
    const addMiddle = middle - mob
    const addMiddleSize = addMiddle + addMiddle * 0.01
    const addMobSize = addSize + addSize * 0.7

    return `
        ${property}: calc(${mob/1.21}px + ${addSize} * (100vw/${maxView}));
        @media(max-width: 1440px) {
            ${property}: calc(${mob}px + ${addMiddleSize} * ((100vw)/${middleView}));
        }
        @media(max-width: 767px) {
            ${property}: calc(${mob}px + ${addMobSize} * ((100vw - ${minView}px)/${maxView}));
        }
    `
}