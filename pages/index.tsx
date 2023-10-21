import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/shared/Hero'
import { useTranslation } from 'react-i18next';
import First from '../components/shared/First'
import Second from '../components/shared/Second'
import Third from '../components/shared/Third'
import Fourth from '../components/shared/Fourth'

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageTitle = t('header.page_title_default') 
  return (
    <Layout page='home'>    
      <Head>
        <title>{t('common.logo_name')}</title>
        <meta
          name="description"
          content={pageTitle}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            pageTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fgrandparentals.vercel.app%2Flogo%2Ficon.svg`}
        />
      </Head>
      <Hero />
      {/* <ExplainImproved></ExplainImproved> */}
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      {/* <FeaturesGradient></FeaturesGradient>
      <Goals></Goals> */}
      {/* <DynamicTestMap /> */}
    </Layout> 
  )
}

export default Home
