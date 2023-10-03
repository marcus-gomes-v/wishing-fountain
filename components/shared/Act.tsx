import { faGroupArrowsRotate, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching, faCompass, faRocket, faShare, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from 'react-i18next'


export default function Act() {

  const { t } = useTranslation();

  const incentives = [
    {
      name: t('components.act.icons.one.name'),
      description: t('components.act.icons.one.description'),
      imageSrc: faShare,
    },
    {
      name: t('components.act.icons.two.name'),
      description: t('components.act.icons.two.description'),
      imageSrc: faPeopleGroup,
    },
    {
      name: t('components.act.icons.three.name'),
      description: t('components.act.icons.three.description'),
      imageSrc: faRocket,
    }
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-gray-100">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div className="text-center">
              <h2 className="text-pelorous-600 text-2xl font-bold">{t('components.act.title')}</h2>
              <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                  {incentives.map((incentive) => (
                    <div key={incentive.name}>
                      <h3 className="mt-6 text-2xl font-bold tracking-tight text-pelorous-600 text-center mb-3">{incentive.name}</h3>
                      <FontAwesomeIcon icon={incentive.imageSrc} className="h-16 w-16 text-pelorous-500 mx-auto" aria-hidden="true" />
                      <p className="mt-2 text-lg text-gray-500">{incentive.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-gray-500 text-xl italic">
                <span>{t('components.act.down_text')}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
