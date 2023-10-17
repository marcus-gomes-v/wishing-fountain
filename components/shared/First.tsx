import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFireFlame, faMap, faQuestion, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

interface First {
    name: string
    description: string[]
    icon: IconProp
}

function First() {

    const { t } = useTranslation();

    return (
      <div className="bg-gradient-to-b from-white to-gray-100">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-24">
          <div className="flex flex-col sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1 flex-col text-gray-600">
              <h2 className="text-[64px] font-bold tracking-wide text-gray-500">{t('components.first.title.0')}<br /> {t('components.first.title.1')}</h2>
              <p className="mt-4  text-[18px] font-mono">
                <span className="font-bold font-mono">{t('components.first.topic.0.title')}&nbsp;</span>
                {t('components.first.topic.0.description')}
              </p>
              <p className="mt-4  text-[18px] font-mono">
                <span className="font-bold font-mono">{t('components.first.topic.1.title')}&nbsp;</span>
                {t('components.first.topic.1.description')}
              </p>
              <a href="#ignite" className="flex items-center mt-10 bg-yellow-500 text-white mx-auto px-6 py-3 rounded-full tracking-wider font-bold text-[24px] gap-2">
                <FontAwesomeIcon icon={faFireFlame} className="h-6 w-6" />
                IGNITE THEIR DREAMS
              </a>
            </div>
            <div className="flex flex-1">
              <img src="/images/photos/girl-writing.png" alt="Girl Writing" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default First;