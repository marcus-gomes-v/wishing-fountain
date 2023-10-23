import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import OurImpactComponent from '../components/shared/OurImpactComponent'
import DynamicTestMap from '../components/shared/MapComponents'

const Ambassadors: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'Our Impact - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='our-impact'>    
        <Head>
          <title>Unwrap Your Dream | Our Impact</title>
          <meta
            name="description"
            content={pageTitle}
          />
          <meta
            property="og:image"
            content={`https://www.unwrapyourdream.com/images/og-image.jpg`}
          />
        </Head>
        <DynamicTestMap />
    </Layout> 
  )
}

export default Ambassadors
