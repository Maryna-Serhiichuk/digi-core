import dayjs from "dayjs";

export function dateFormater(date: string | undefined) {
    return date ? dayjs(date, 'MM-DD-YYYY').format('D MMMM YYYY') : undefined
}