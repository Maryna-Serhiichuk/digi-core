import { apolloQuery } from "@/utils/apolloQuery"
import { VariableDocument } from "@/graphql"
import { ApolloQueryResult } from "@apollo/client"

export async function getVariable (): Promise<ApolloQueryResult<VariableQuery | undefined>> {
  return await apolloQuery<VariableQuery, PagesQueryVariables>({
    query: VariableDocument,
  });
}
