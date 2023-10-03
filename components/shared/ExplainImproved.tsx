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
    <div className="relative bg-white py-24 sm:py-32 lg:py-20">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mx-auto max-w-prose text-xl text-gray-500">
          {t('components.testimonials.text')}
        </p>
        <h2 className="text-lg font-semibold text-teal-600">{t('components.testimonials.author')}</h2>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-teal-500 p-3 shadow-lg">
                        <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
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
