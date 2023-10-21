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
              <title>Unwrap Your Dream</title>
            <meta
            name="description"
            content={pageTitle}
            />
            <meta
            property="og:image"
            content={`https://www.unwrapyourdream.com/images/photos/home.jpg`}
            />
        </Head>
        
      <HeroPaint></HeroPaint>
      <OurEventComponent></OurEventComponent>
      <div className="flex flex-col md:flex-row mx-auto max-w-4xl lg:max-w-7xl px-3 md:px-0">
          <div className=''>
            <div className="bg-gray-200 py-12 px-12 rounded-lg">
                <p className="mx-auto max-w-prose text-[24px] text-gray-500 tracking-wider">
                  {t('components.testimonials.text.0')}<br />
                  {t('components.testimonials.text.1')}<br />
                  {t('components.testimonials.text.2')}<br />
                  {t('components.testimonials.text.3')}
                </p>
                <h2 className="text-[24px] font-bold text-gray-700 ">{t('components.testimonials.author')}</h2>
              </div>
          </div>
          <div className="flex flex-col items-start  gap-y-3 py-9 pl-9 ">
            <button onClick={() => setPage("educator")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
              <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              Educators
            </button>
            <button onClick={() => setPage("startup")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
              <FontAwesomeIcon icon={faRocket} className="h-6 w-6" />
              Startups
            </button>
            <button onClick={() => setPage("corporate")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
              <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" />
              Corporates
            </button>
          </div>
        </div>
        <div className="py-9 upp">
          { page != "" && page == "educator" ? <ExplainImproved></ExplainImproved> : <></> }
          { page != "" && page == "startup" ? <ExplainImprovedStartup></ExplainImprovedStartup> : <></> }
          { page != "" && page == "corporate" ? <ExplainImprovedCorporate></ExplainImprovedCorporate> : <></> }
        </div>
    </Layout> 
  )
}

export default Ambassadors
