import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Team from '../components/shared/Team'

const AboutUs: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'About Us - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='aboutUs'>    
        <Head>
              <title>Unwrap Your Dream</title>
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
        <div className='mx-4 my-3 grid gap-y-3'>
            <Team></Team>
        </div>
    </Layout> 
  )
}

export default AboutUs
