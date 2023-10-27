import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
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
      name: 'Patrice Madurai',
      role: 'Colorado, USA',
      imageUrl:
        '/images/ambassadors/patrice-madurai.jpeg',
    },
    {
      name: 'Karol Gornowicz',
      role: 'Warsaw, Poland',
      imageUrl:
        '/images/ambassadors/karol-gornowicz.jpeg',
    },
    {
      name: 'Agnieszka Mucha-Ryka',
      role: 'Krakow, Poland',
      imageUrl:
        '/images/ambassadors/agnieszka.jpg',
    },
    {
      name: 'Blake MacDonald',
      role: 'Toronto, Canada',
      imageUrl:
        '/images/ambassadors/blake-macdonald.jpg',
    },
    {
      name: 'Arek Skuza',
      role: 'Texas, USA',
      imageUrl:
        '/images/ambassadors/arek.jpg',
    },
    {
      name: "Aldrin	D'Souza",
      role: 'Vancouver, Canada',
      imageUrl:
        '/images/ambassadors/aldrin-souza.jpg',
    },
    {
      name: 'Gulnora Anvarova',
      role: 'Dushanbe, Tajikistan',
      imageUrl:
        '/images/ambassadors/gulnora.jpg',
    },
    {
      name: 'Marcos Vargas',
      role: 'Lima, Peru',
      imageUrl:
        '/images/ambassadors/marcos-vargas.jpeg',
    },
    {
      name: 'Natasha Tolub',
      role: 'Toronto, Canada',
      imageUrl:
        '/images/ambassadors/natasha.jpg',
    },
    {
      name: 'Joe Deobald',
      role: 'Canada',
      imageUrl:
        '/images/ambassadors/joe-deobald.jpg',
    },
    {
      name: 'Madison MacDonald',
      role: 'Toronto, Canada',
      imageUrl:
        '/images/ambassadors/madison-macdonald.png',
    },
    {
      name: 'You?',
      role: '',
      imageUrl:
        '/images/avatar/placeholder.jpeg',
    },
    
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <h2 className="
          text-[48px]
          md:text-[69px]
          font-bold
          tracking-wide
          text-gray-600
          text-center
          underline
          decoration-wavy
          decoration-[#ffd24a]
          underline-offset-8
          decoration-[4px]
          md:decoration-[8px]">Our voices around the world.
          </h2>
          <p className="mt-4 text-[24px] text-gray-600">
            We are proud to work with a global network of incredible changemakers who are committed to our mission and to reaching out to young people everywhere.
          </p>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 font-secundary leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AmbassadorsComponent;