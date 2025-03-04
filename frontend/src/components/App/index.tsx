import { PropsWithChildren, ReactElement } from "react"
import ErrorBoundary from "./ErrorBoundary";
import ThemeProvider from "./ThemeProvider";

App.ErrorBoundary = ErrorBoundary;
App.ThemeProvider = ThemeProvider;
  
function App({ children }: PropsWithChildren) {
    return <App.ThemeProvider>
        <App.ErrorBoundary>
            {children}
        </App.ErrorBoundary>
    </App.ThemeProvider>
}

export default App