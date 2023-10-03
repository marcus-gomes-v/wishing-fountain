import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

function AmbassadorsComponent() {
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

  const people = [
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    {
      name: 'Name Surname',
      role: 'Role / Position',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    }
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our voices around the world.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are proud to work with a global network of incredible changemakers who are committed to our mission and to reaching out to young people everywhere.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AmbassadorsComponent;