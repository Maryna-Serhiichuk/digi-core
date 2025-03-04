import { apolloQuery } from "@/utils/apolloQuery"
import { PagesDocument } from "@/graphql"
import { ApolloQueryResult } from "@apollo/client"

export async function getPage (page: string): Promise<ApolloQueryResult<PagesQuery | undefined>> {
  return await apolloQuery<PagesQuery, PagesQueryVariables>({
    query: PagesDocument,
    variables: { slug: page },
  });
}
