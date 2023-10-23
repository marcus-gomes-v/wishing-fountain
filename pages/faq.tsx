import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import FaqComponent from '../components/shared/Faq'

const OurCampaign: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'Faq - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='faq'>    
        <Head>
          <title>Unwrap Your Dream | FAQ</title>
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
            <FaqComponent></FaqComponent>
        </div>
    </Layout> 
  )
}

export default OurCampaign
