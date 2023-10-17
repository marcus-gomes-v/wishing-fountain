import { faArrowUp, faCog, faEye, faLock, faMap, faPortalEnter, faServer, faShield } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';



export default function ExplainImproved() {
  const { t } = useTranslation();

  const features = [
    {
      name: t('components.explain.left.title'),
      description: t('components.explain.left.description'),
      icon: faEye
    },
    {
      name: t('components.explain.right.title'),
      description: t('components.explain.right.description'),
      icon: faMap
    }
  ]

  

  return (
    <div className="relative bg-gradient-to-b from-[#D3A55C] to-[#dbae61] py-24 sm:py-32 lg:py-20">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mx-auto max-w-prose text-[32px] text-gray-50 tracking-wider">
          {t('components.testimonials.text')}
        </p>
        <h2 className="text-[24px] font-bold text-yellow-100">{t('components.testimonials.author')}</h2>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 min-h-[260px]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl p-3 shadow-lg bg-gradient-to-b from-[#f9d59c] to-[#dbae61]">
                        <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-[24px] tracking-wide font-bold leading-8 text-gray-900 text-left">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-[18px] font-sans tracking-wider leading-7 text-gray-600 text-left">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
