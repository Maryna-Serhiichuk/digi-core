import { ApolloError, ApolloQueryResult, OperationVariables, QueryOptions } from "@apollo/client"
import { getClient, query } from '@/components/App/ApolloProvider/apolloClient'

export async function apolloQuery<
  TResponse = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  options: QueryOptions<TVariables, TResponse>
): Promise<ApolloQueryResult<TResponse | undefined> | undefined> {
  try {
    return await getClient().query<TResponse, TVariables>(options)
  } catch (error) {
    console.error('RSC QUERY FAILED!', error);

    return {
      data: undefined,
      networkStatus: 8,
      loading: false,
      error: error as ApolloError,
    };
  }
}
