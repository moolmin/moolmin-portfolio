import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import AnimatedCursor from "react-animated-cursor"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AnimatedCursor color="203, 237, 107" />
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
