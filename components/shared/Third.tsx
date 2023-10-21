import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFireFlame, faMap, faQuestion, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslation } from 'react-i18next'


function Third() {

    const { t } = useTranslation();

    return (
      <div className="bg-gradient-to-t from-white to-gray-100">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-24">
          <div className="flex flex-col sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1 flex-col text-gray-600">
              <h2 className="text-[69px] font-bold tracking-wide text-gray-500 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px] pb-10">{t('components.third.title')}</h2>
              <p className="mt-4  text-[24px] ">
                <span className="font-bold ">{t('components.third.descriptionBold')}&nbsp;</span>
                {t('components.third.descriptionNormal')}
              </p>
              <p className="mt-4  text-[24px] ">
                {t('components.third.descriptionEnd')}
              </p>
              <a href="#ignite" className="flex items-center mt-10 bg-[#ffd24a] text-black mx-auto px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
                <FontAwesomeIcon icon={faFireFlame} className="h-6 w-6" />
                IGNITE THEIR DREAMS
              </a>
            </div>
            <div className="flex flex-1">
              <div className="relative py-10">
                <img
                  src="/images/photos/girl-yeah.png"
                  alt="Girl VR"
                  className="bg-[#white] border-[12px] border-[#ffd24a] hover:bg-[#ffd24a]  rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Third;