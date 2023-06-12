import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import {wrapper} from '../redux/store'
import AuthProvider from "@/context/AuthProvider";
import {useEffect} from "react";
import {loadUser} from "@/redux/user/userActions";
import {useStore} from "react-redux";

function App({ Component, pageProps }: AppProps) {

  const store = useStore()

  useEffect(() => {
    loadUser(store)
  } , [])
  return <>
    <Component {...pageProps} />
    <Toaster/>
  </>


}

export default wrapper.withRedux(App)