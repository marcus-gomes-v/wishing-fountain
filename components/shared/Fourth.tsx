import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFireFlame, faInfo, faMap, faQuestion, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslation } from 'react-i18next'


function Fourth() {

    const { t } = useTranslation();

    return (
      <div className="bg-gradient-to-t from-[#206179] to-[#3a8ba9]">
        <div className="mx-auto max-w-4xl lg:max-w-7xl pt-36 pb-[40px]">
          <div className="flex flex-col sm:flex-row gap-10 px-6 sm:px-0">
            <div className="flex flex-1">
              <div className="w-[700px] h-[317px] pt-[60px]">
                <Image
                  src="/images/photos/woman.png"
                  alt="Woman"
                  width={"2000px"}
                  height={"1400px"}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col text-gray-200">
              <h2 className="text-[56px] font-bold tracking-wide text-gray-50">{t('components.forth.title')}</h2>
              <p className="mt-4  text-[18px] font-mono">
                {t('components.forth.descriptionNormal')}
              </p>
              <p className="mt-4  text-[18px] font-mono">
                {t('components.forth.descriptionNormalSecond')}&nbsp;
                <span className="font-bold font-mono">{t('components.forth.descriptionBold')}&nbsp;</span>
                {t('components.forth.descriptionNormalThird')}
              </p>
              <a href="#ignite" className="flex items-center mt-10 bg-yellow-500 text-white mx-auto px-6 py-3 rounded-full tracking-wider font-bold text-[24px] gap-2">
                <FontAwesomeIcon icon={faInfo} className="h-6 w-6" />
                SEE HER HISTORY
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Fourth;