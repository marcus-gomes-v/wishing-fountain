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
      <div className="bg-gradient-to-t from-white to-gray-100">
        <div className="mx-auto max-w-4xl lg:max-w-7xl pb-24">
          <div className="flex flex-col sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1 flex-col text-gray-600">
              <h2 className="text-[64px] font-bold tracking-wide text-gray-500">{t('components.second.title')}</h2>
              <p className="mt-4  text-[18px] font-mono">
                {t('components.second.description')}
              </p>
              <p className="mt-4  text-[18px] font-mono">
                <span className="font-bold font-mono">{t('components.second.bottomBold')}&nbsp;</span>
                {t('components.second.bottomText')}
              </p>
              <a href="#ignite" className="flex items-center mt-10 bg-yellow-500 text-white mx-auto px-6 py-3 rounded-full tracking-wider font-bold text-[24px] gap-2">
                <FontAwesomeIcon icon={faFireFlame} className="h-6 w-6" />
                IGNITE THEIR DREAMS
              </a>
            </div>
            <div className="flex flex-1">
              <div className="w-[700px] h-[517px]">
                <Image
                  src="/images/photos/girl-vr.png"
                  alt="Girl VR"
                  width={"1600px"}
                  height={"1400px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Second;