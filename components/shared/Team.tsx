import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

function Team() {
  const { t } = useTranslation();

  const people = [
    {
      name: 'Karolina Stawinska',
      role: 'Co-founder #UnwrapYourDream',
      imageUrl:
        '/images/team/karolina-1.png',
      bio: "Karolina’s passion for the #UnwrapYourDream movement was kindled after studying the inspiring case of Tererai Trent during her Semester at Sea journey. This voyage, along with her travels to over 60 countries, fortified a realization in her: every child, regardless of their geographical location, smiles in the same universal language and possesses an innate curiosity coupled with the courage to dream.  In 2014, her dedication to this vision came alive with the #tweetadream campaign where over 25,000 children visualized their dreams across 35. countries. Working in talent development for both startups and corporates, Karolina possesses a unique insight into potential and passion. This perspective was further illuminated when, as a mentor in STEM, she journeyed to Tajikistan, guiding her mentee and local youths in harnessing solar power for innovation. Whether it's crafting solar-powered LEGO toys with girls to demonstrate boundless potential or being an ally to the most vulnerable refugee families, Karolina's actions consistently underline her belief: dreams are the catalysts of hope and transformation, regardless of one's situation.",
      twitterUrl: '#',
      linkedinUrl: 'https://www.linkedin.com/in/karolinastawinska/',
    },
    {
      name: 'Karolina Cikowska',
      role: 'Co-Founder #UnwrapYourDream',
      imageUrl:
        '/images/team/karolina-2.png',
      bio: "Karolina’s life story is a testament to the transformative power of dreams. As the co-founder of Girl Code Fun, she ignited the aspirations of countless young girls, empowering them with STEM skills and opening doors to a world of endless potential. Her dedication to sparking creativity in STEM is relentless, especially within communities that often lie in the shadows of opportunity. This same spirit led her to her current role at Upwardly Global. As the Polish Country Representative, Karolina has been a beacon of hope for Ukrainian war refugees in Poland. Recognizing the dreams and aspirations they carry, she works fervently to facilitate their job placements, ensuring that even in their new homeland, their professional ambitions remain within reach. Whether it's a young girl coding her first app or a displaced family seeking a fresh start, Karolina stands alongside every dreamer, underscoring the belief that every dream, big or small, deserves to be cherished.",
      twitterUrl: '#',
      linkedinUrl: 'https://www.linkedin.com/in/karolina-cikowska-she-her-hers-39312418/',
    },
    {
      name: 'Marcus Gomes',
      role: 'Dream Developer & Amplifier',
      imageUrl:
        '/images/team/marcus.png',
      bio: "Marcus, with his infectious enthusiasm and zeal, exemplifies the power of dreams. Growing up in Brazil, his early years amidst the favelas painted a vivid picture of the dichotomy of dreams vs reality. Yet, his childlike wonder envisioned a world brimming with opportunities. With an early aspiration of becoming the next president to solve housing crises, Marcus soon realized the transformative power of technology. Despite challenges, his indomitable spirit and an insatiable curiosity led him to self-learn, eventually leading to the creation of an immensely popular blog that simplified the intricacies of coding. Having witnessed the meteoric rise of Dafiti, Brazil's unicorn, Marcus understands the impact of dreaming big. Now, as a pillar of the #UnwrapYourDream campaign, he's committed to ensuring every child gets the opportunity to dream, innovate, and transform the world.",
      twitterUrl: '#',
      linkedinUrl: 'https://www.linkedin.com/in/gomesmarcusv/',
    },
  ]

  return (
    <div >
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
        md:decoration-[8px]">Our team</h2>
        <p className="my-6 text-lg leading-8 text-gray-600">
          We are a collective of dreamers, rooted in the belief that every child deserves a canvas to paint their aspirations. At the heart of the #UnwrapYourDream campaign, we're not just changemakers but custodians of young aspirations, ensuring that dreams aren't just fleeting thoughts but seeds sown for a brighter tomorrow.
        </p>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="
                text-[28px]
                font-bold
                tracking-wide
                text-gray-600
                underline
                decoration-wavy
                decoration-[#ffd24a]
                underline-offset-8
                decoration-[4px]
                mb-3
              ">{person.name}</h3>
              <p className="text-base leading-7 text-gray-700 font-bold">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500" target="_blank">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team;