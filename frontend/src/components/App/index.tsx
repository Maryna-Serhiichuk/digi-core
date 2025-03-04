import { ReactElement } from "react"
import ApolloProvider from "./ApolloProvider";
import ErrorBoundary from "./ErrorBoundary";
import ThemeProvider from "./ThemeProvider";

export type AppProps = {
    children: ReactElement | ReactElement[]
}

App.ApolloProvider = ApolloProvider
App.ErrorBoundary = ErrorBoundary;
App.ThemeProvider = ThemeProvider;
  
export function App({ children }: AppProps) {
    return <App.ThemeProvider>
        <App.ErrorBoundary>
            <App.ApolloProvider>
                {children}
            </App.ApolloProvider>
        </App.ErrorBoundary>
    </App.ThemeProvider>
}