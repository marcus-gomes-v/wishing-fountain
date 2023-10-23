import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import OurEventComponent from '../components/shared/OurEventComponent'
import ExplainImproved from '../components/shared/ExplainImproved'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faGraduationCap, faHatHard, faRocket } from '@fortawesome/pro-solid-svg-icons'
import { useState } from 'react'
import ExplainImprovedStartup from '../components/shared/ExplainImprovedStartup'
import ExplainImprovedCorporate from '../components/shared/ExplainImprovedCorporate'
import HeroPaint from '../components/shared/Hero-Girl'

const Ambassadors: NextPage = () => {
  const { t } = useTranslation();
    
  const [page, setPage] = useState("")

  const pageTitle = 'Our Event - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='our-event'>    
        <Head>
          <title>Unwrap Your Dream | Our Event</title>
          <meta
            name="description"
            content={pageTitle}
          />
          <meta
            property="og:image"
            content={`https://www.unwrapyourdream.com/images/og-image.jpg`}
          />
        </Head>
        
      <HeroPaint></HeroPaint>
      <OurEventComponent></OurEventComponent>
    </Layout> 
  )
}

export default Ambassadors
