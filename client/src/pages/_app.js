import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from './store'

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <>
      <Head>
        <title>HavenGram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png"/>
      </Head>
      <Provider store = {store}>
        <SessionProvider session={session}>
          <Component {...pageProps}/>
        </SessionProvider>
      </Provider>
    </>
    
  )
}
