import { faArrowUp, faBackpack, faBook, faBullhorn, faChild, faCog, faDiceFour, faDiceOne, faDiceThree, faDiceTwo, faEye, faGraduationCap, faHandHoldingHeart, faInfo, faLock, faMap, faPortalEnter, faServer, faShield, faStar } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';



export default function ExplainImproved() {
  const { t } = useTranslation();

  const features = [
    {
      title: "Organize",
      description: "Organize a workshop in your community, school, or organization. ",
      icon: faBook,
      buttons: [
        {
          text: "Kindergarten",
          href: "/our-event/kindergarten",
          icon: faChild
        },
        {
          text: "Primary School",
          href: "/our-event/primary-school",
          icon: faBackpack
        },
        {
          text: "Secondary school",
          href: "#",
          icon: faGraduationCap
        },
      ]
    },
    {
      title: "Partner",
      description: "Corporate: Align your CSR goals with our mission.<br /><br />Individual: Become an ambassador or volunteer.",
      icon: faBullhorn,
      buttons: [
        {
          text: "Learn more",
          href: "#",
          icon: faInfo,
        }
      ]
    },
    {
      title: "Support",
      description: "Share our mission, events, and success stories through your social networks.",
      icon: faHandHoldingHeart,
      buttons: [
        {
          text: "Learn more",
          href: "#",
          icon: faInfo
        }
      ]
    }
  ]

  /*
     <div className="flex flex-col items-start  gap-y-3 py-9 pl-9 ">
        <button onClick={() => setPage("educator")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
          <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
          Educators
        </button>
        <button onClick={() => setPage("startup")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
          <FontAwesomeIcon icon={faRocket} className="h-6 w-6" />
          Startups
        </button>
        <button onClick={() => setPage("corporate")} className="uppercase flex items-center bg-[#ffd24a] text-black ml-0 px-6 py-3 rounded-full font-light text-[24px] gap-2 font-secundary shadow-md">
          <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" />
          Corporates
        </button>
      </div>

  */
  

  return (
    <div className="relative ">
      <div className="mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl lg:px-8 mb-20">
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="pt-6">
                <div className="flow-root rounded-lg bg-gradient-to-b from-[#ffe494] to-[#ffd24a] px-6 pb-8 min-h-[360px]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl p-3 shadow-lg bg-gradient-to-b from-[#7048d4] to-[#48259fff]">
                        <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="flex items-center gap-x-3 font-primary tracking-widest text-black text-[34px] font-bold underline decoration-wavy decoration-[#ffffff] underline-offset-8 decoration-[3px]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-[18px] font-sans tracking-wider leading-7 text-gray-600 text-left" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
                    <div className="flex flex-col gap-y-3 py-3">
                      {feature.buttons.map((link, i) =>
                        <a
                          key={i}
                          href={link.href}
                          type="button"
                          className="
                            font-secundary
                            rounded-full
                            bg-indigo-600
                            px-3.5
                            py-2
                            font-semibold
                            text-white
                            shadow-sm
                            hover:bg-indigo-500
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-indigo-600
                            flex
                            items-center
                            justify-between
                          "
                        >
                          {link.text}
                          <FontAwesomeIcon icon={link.icon} className='w-4 h-4' />
                        </a>
                      )}
                    </div>
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
