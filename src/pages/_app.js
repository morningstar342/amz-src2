import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Provider store={store}>
//         <Component {...pageProps}/>
//       </Provider>
//     </SessionProvider>
//   );
// };
// export default MyApp;
