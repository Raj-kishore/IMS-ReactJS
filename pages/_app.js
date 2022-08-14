import '../styles/globals.css' //you can't use globals.css anywhere else instead of _app.js

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
