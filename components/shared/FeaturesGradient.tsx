import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChartLineUp, faMap, faQuestion, faSportsball, faUserAstronaut, faUserTie } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

interface Feature {
    name: string
    description: string[]
    icon: IconProp
}

function FeaturesGradient() {

    const { t } = useTranslation();

    const features: Array<Feature> = [
        {
            name: t('components.featuresGradient.icons.one.name'),
            description: [
                t('components.featuresGradient.icons.one.description.one'),
                t('components.featuresGradient.icons.one.description.second')
            ],
            icon: faQuestion,
        },
        {
            name: t('components.featuresGradient.icons.two.name'),
            description: [
                t('components.featuresGradient.icons.two.description.one'),
                t('components.featuresGradient.icons.two.description.second')
            ],
            icon: faMap,
        }
        ,
        {
            name: t('components.featuresGradient.icons.three.name'),
            description: [
                t('components.featuresGradient.icons.three.description.one'),
                t('components.featuresGradient.icons.three.description.second')
            ],
            icon: faUserAstronaut,
        }
    ]

    return (
        <div className="bg-gradient-to-r from-pelorous-800 to-pelorous-700">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
                <h2 className="text-3xl font-bold tracking-tight text-white">{t('components.featuresGradient.title')}</h2>
                <p className="mt-4 max-w-3xl text-lg text-pelorous-200">
                    {t('components.featuresGradient.description')}
                </p>
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                                    <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                <ol className="mt-2 text-base text-pelorous-200 list-disc">
                                    {feature.description.map((text, i) => {
                                        return (
                                            <li key={i}>
                                                {text}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesGradient;