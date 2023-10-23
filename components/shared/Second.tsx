import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFireFlame, faMap, faQuestion, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslation } from 'react-i18next'

interface First {
    name: string
    description: string[]
    icon: IconProp
}

function Second() {

    const { t } = useTranslation();

    return (
      <div className="bg-gradient-to-t from-[#ecc347] to-[#FFD24A]">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-24">
          <div className="flex flex-col sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1">
              <div className="">
                <img
                  src="/images/photos/girl-brushes.png"
                  alt="Girl VR"
                  className="bg-[#ffd24a] border-[12px] border-[#ffffff] hover:bg-[#ffffff]  rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col text-black">
              <h2 className="text-[69px] font-bold tracking-wide text-gray-900 underline decoration-wavy decoration-[#ffffff] underline-offset-8 decoration-[8px] pb-10">{t('components.second.title')}</h2>
              <p className="mt-4  text-[24px] ">
                {t('components.second.description')}
              </p>
              <p className="mt-4  text-[24px] ">
                <span className="font-bold ">{t('components.second.bottomBold')}&nbsp;</span>
                {t('components.second.bottomText')}
              </p>
              <a href="/our-event" className="flex items-center mt-10 bg-[#ffffff] text-black mx-auto px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
                <FontAwesomeIcon icon={faFireFlame} className="h-6 w-6" />
                IGNITE THEIR DREAMS
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Second;