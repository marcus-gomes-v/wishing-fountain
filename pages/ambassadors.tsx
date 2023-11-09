import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import AmbassadorsComponent from '../components/shared/Ambassadors'
import IndividualComponent from '../components/shared/IndividualComponent'

const Ambassadors: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'Ambassadors - Discover more about how we are helping kids to keep dreaming.'
  return (
    <Layout page='ambassadors'>    
        <Head>
           <title>Unwrap Your Dream</title>
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
          <AmbassadorsComponent></AmbassadorsComponent>
          <IndividualComponent></IndividualComponent>
        </div>
    </Layout> 
  )
}

export default Ambassadors
