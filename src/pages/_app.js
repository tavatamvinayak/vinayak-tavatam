import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

// // bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'


/// /// content store
import { aboutPage, article } from '../../AppStore/Store1'

/// /// Context Api
import createContextApi from '../../contextApi/contextCreateApi'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='font-serif'>


        <createContextApi.Provider value={{ aboutPage, article }} >


          <Navbar />
          <Component {...pageProps} />
          <Footer />


        </createContextApi.Provider>

      </div>
    </>
  )
}
