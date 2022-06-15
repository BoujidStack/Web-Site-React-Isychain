import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import MainLayout from '../components/layouts/main'
import NavigatinoBar from "../components/navigation/navigationBar";
import Footer from '../components/layouts/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const IsyChain_Simulator = ({Component, pageProps}) => {

  useEffect(()=>{
    AOS.init({
      duration : 1000
    })
  })
  return (
    <>
        <Head>
            <title>IsyChain - We Make Blockchain Easy</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="IsyChain est une entreprise marocaine mais à vocation africaine regroupant une équipe pluridisciplinaire d'experts passionnés par les technologies du web décentralisés et spécialisés dans la technologie blockchain." />
        </Head>
        <MainLayout>
            <NavigatinoBar />
            <Component {...pageProps} />
            <Footer />
        </MainLayout>
        
    </>
        
  );
}

export default IsyChain_Simulator;