import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFireFlame, faInfo, faMap, faQuestion, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslation } from 'react-i18next'


function Fourth() {

    const { t } = useTranslation();

    return (
      <div className="bg-gradient-to-t from-[#ffffff] to-[#fdfdfd]">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-16 lg:py-24">
          <div className="flex flex-col-reverse sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1">
              <div className="relative py-16">
                <img
                  src="/images/photos/woman.png"
                  alt="Woman"
                  className="bg-[#white] border-[12px] border-[#ffd24a] hover:bg-[#ffd24a]  rounded-t-2xl"
                />
                <a href="#ignite" className="
                flex
                items-baseline
                justify-center
                bg-[#ffd24a]
                text-black 
                px-6 py-3 
                font-light 
                text-[24px]
                font-secundary 
                rounded-b-2xl
                shadow-md">
                  <FontAwesomeIcon icon={faInfo} className="h-6 w-6 inline" />
                  SEE HER STORY
                </a>
              </div>
              
            </div>
            <div className="flex flex-1 flex-col text-gray-600">
              <h2 className="text-[69px] font-bold tracking-wide text-gray-500 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px] pb-10">{t('components.forth.title')}<br />{t('components.forth.subtitle')}</h2>
              <p className="mt-4  text-[24px] ">
                {t('components.forth.descriptionNormal')}
              </p>
              <p className="mt-4  text-[24px] ">
                {t('components.forth.descriptionNormalSecond')}&nbsp;
                <span className="font-bold ">{t('components.forth.descriptionBold')}&nbsp;</span>
                {t('components.forth.descriptionNormalThird')}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Fourth;