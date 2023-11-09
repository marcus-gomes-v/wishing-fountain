import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Team from '../components/shared/Team'
import AmbassadorsComponent from '../components/shared/Ambassadors'

const AboutUs: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'About Us - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='aboutUs'>    
        <Head>
          <title>Unwrap Your Dream | About Us</title>
          <meta
            name="description"
            content={pageTitle}
          />
          <meta
            property="og:image"
            content={`https://www.unwrapyourdream.com/images/og-image.jpg`}
          />
        </Head>
        <div className='mx-4 my-3 grid gap-y-3'>
            <Team></Team>
        </div>
    </Layout> 
  )
}

export default AboutUs
