import { BuildPage } from "../../components/BuildPage/BuildPage"
import { getPage } from "@/queries/getPage"
import { getVariable } from "@/queries/getVariable"
import { redirect } from 'next/navigation'
// import NotFound from "@/app/not-found"

export const dynamic = 'force-dynamic';

export default async function Page ({ params }: { params: { slug: string } }) {
  const { data: variableData } = await getVariable()

  const mainSlug = variableData?.variable?.data?.attributes?.main_page?.data?.attributes?.slug
  if (params?.slug === mainSlug) redirect('/')

  const { data } = await getPage(params?.slug ?? "home")

  // if (!data?.pages?.data?.length) return <NotFound/>

  const sections = data?.pages?.data?.[0]?.attributes?.section;

  return <BuildPage sections={ sections as PageSectionDynamicZone[] }/>
}
