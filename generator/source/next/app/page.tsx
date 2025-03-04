import { BuildPage } from "../components/BuildPage/BuildPage"
import { getVariable } from "@/queries/getVariable"

export const dynamic = 'force-dynamic';

export default async function Home() {
    const { data } = await getVariable()

  const sections = data?.variable?.data?.attributes?.mainPage?.data?.attributes?.section;

  return <BuildPage sections={ sections as PageSectionDynamicZone[] }/>
}
