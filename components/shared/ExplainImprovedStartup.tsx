import { faArrowUp, faCog, faDiceFour, faDiceOne, faDiceThree, faDiceTwo, faEye, faLock, faMap, faPortalEnter, faServer, faShield, faStar } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';



export default function ExplainImprovedStartup() {
  const { t } = useTranslation();

  const features = [
    {
      title: "Start a Dream Discussion Startup:",
      description: "Begin by hosting a dedicated class or session on the power of dreams and aspirations. Adjust the depth and style of the conversation based on the school level you're engaging with. See suggestions above!",
      icon: faDiceOne
    },
    {
      title: "Foster Creative Expression:",
      description: "Encourage your students to channel their thoughts, hopes, and aspirations into illustrations or drawings.",
      icon: faDiceTwo
    },
    {
      title: "Share the Dreams on X:",
      description: "If possible, post these artworks between the 1th of June on your (institution's) Twitter channels using the hashtag #UnwrapYourDream. This showcases your students' visions and contributes to a global tapestry of dreams.",
      icon: faDiceThree
    },
    {
      title: "Privacy Matters:",
      description: "When sharing artworks on platforms like Twitter, include only the artwork, first names,age and country. If there's parental permission, you can have kids in the photos holding their art work. Otherwise, share only the artwork itself with a short description, age, country, and use the hashtag #UnwrapYourDream.",
      icon: faStar
    }
  ]
  

  return (
    <div className="relative bg-gradient-to-b from-[#ffe494] to-[#ffd24a] py-9">
      <div className="mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, i) => (
              <div key={i} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 min-h-[260px]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl p-3 shadow-lg bg-gradient-to-b from-[#7048d4] to-[#48259fff]">
                        <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-[24px] tracking-wide font-bold leading-8 text-gray-900 text-left">
                      {feature.title}
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
