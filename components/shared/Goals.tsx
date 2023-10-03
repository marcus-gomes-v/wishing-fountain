import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

function Goals() {
    const { t } = useTranslation();

    const goals = [
        {
            name: t('components.goals.items.one.name'),
            description: t('components.goals.items.one.description'),
            icon: faCompass,
        },
        {
            name: t('components.goals.items.two.name'),
            description: t('components.goals.items.two.description'),
            icon: faStar,
        },
        {
            name: t('components.goals.items.three.name'),
            description: t('components.goals.items.three.description'),
            icon: faChildReaching,
      },
      {
        name: t('components.goals.items.four.name'),
        description: t('components.goals.items.four.description'),
        icon: faChildReaching,
      }
    ]

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {t('components.goals.title')}
                    </h2>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                      {goals.map((goal) => (
                            <div key={goal.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                                        <FontAwesomeIcon icon={goal.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {goal.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">{goal.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Goals;