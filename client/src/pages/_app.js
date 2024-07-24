import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from './store'
import { useRouter } from 'next/router'

export default function App({Component, pageProps}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>HavenGram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png"/>
      </Head>
      <Provider store={store}>
          {/* <Navbar /> */}
          <Component key={router.asPath} {...pageProps} />
        </Provider>
    </>
    
  )
}
