import { faGroupArrowsRotate, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from 'react-i18next'

function Features() {

    const { t } = useTranslation();

    const incentives = [
        {
            name: t('components.features.icons.one.name'),
            description: t('components.features.icons.one.description'),
            imageSrc: faCompass,
        },
        {
            name: t('components.features.icons.two.name'),
            description: t('components.features.icons.two.description'),
            imageSrc: faStar,
        },
        {
            name: t('components.features.icons.three.name'),
            description: t('components.features.icons.three.description'),
            imageSrc: faChildReaching,
        }
    ]

    return (
        <div className="relative overflow-hidden">
            <div className="relative bg-gray-100">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div className="">
                            <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                                    {incentives.map((incentive) => (
                                        <div key={incentive.name}>
                                            <FontAwesomeIcon icon={incentive.imageSrc} className="h-16 w-16 text-pelorous-500 mx-auto"  aria-hidden="true" />
                                            <h3 className="mt-6 text-xl font-bold tracking-tight text-pelorous-600">{incentive.name}</h3>
                                            <p className="mt-2 text-lg text-gray-500">{incentive.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;