import { RunLine } from "@/components/RunLine";
import { FC } from "react";

const data = ['Follow Us on Social Media']
const repeated = new Array(8).fill(data[0]);

export const Follow: FC = () => {
    return <RunLine data={repeated} background={'ghost'} />
}