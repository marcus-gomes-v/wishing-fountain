import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import ExplainImproved from "./ExplainImproved";

function OurEventComponent() {
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

    const content = [
      {
        title: "Dream Discussion:",
        description: "Begin by hosting a dedicated class or session on the power of dreams and aspirations. Adjust the depth and style of the conversation based on the school level you're engaging with. See suggestions above!"
      },
      {
        title: "Creative Expression:",
        description: "Encourage your students to channel their thoughts, hopes, and aspirations into illustrations or drawings."
      },
      {
        title: "Share on X with the World:",
        description: "If possible, post these artworks on December 22nd on your (institution's) Twitter channels using the hashtag #UnwrapYourDream. This showcases your students' visions and contributes to a global tapestry of dreams."
      },
      {
        title: "Privacy Matters:",
        description: "When sharing artworks on platforms like Twitter, include only the artwork, first names,age and country. If there's parental permission, you can have kids in the photos holding their art work. Otherwise, share only the artwork itself with a short description, age, country, and use the hashtag #UnwrapYourDream."
      }
    ]

  return (
    <div className="px-3 md:px-0">
      <div className="mx-auto max-w-4xl lg:max-w-7xl py-10">
        <h2 className="
          text-[69px]
          font-bold
          tracking-wide
          text-gray-600
          text-center
          underline
          decoration-wavy
          decoration-[#ffd24a]
          underline-offset-8
          decoration-[8px]">
          A Global Invitation to Visualize the Future
        </h2>
        <div className="py-6">
          <p className="mt-4 text-[24px] text-gray-600">
            The core of our campaign is simple: inspiring children to draw their dreams for the future. But making it global requires everyone — teachers, parents, corporates, and you.
          </p>
        </div>
        <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px]">
          <strong>How to Participate?</strong>
        </h2>
        
        {/* <div>
          <p className="mt-4 text-[24px] text-gray-600">
            🎨 <strong>Age Suitability:</strong> This activity is adaptable for various school levels:
            <br /><a href="#" aria-label="Kindergarten" className="font-secundary">- Kindergarten</a>
            <br /><a href="#" aria-label="Primary School" className="font-secundary">- Primary School</a>
            <br /><a href="#" aria-label="Secondary School" className="font-secundary">- Secondary School</a>
          </p>
          {content.map((cont, i) => (
            <p className="mt-4 text-[24px] text-gray-600 py-3" key={i}>
              🎨 <strong>{cont.title}</strong> {cont.description}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default OurEventComponent;