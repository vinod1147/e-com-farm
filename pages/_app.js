import '../styles/globals.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component />
    <Footer />
  </>

}

export default MyApp
