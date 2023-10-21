import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

import { ArrowsExpandIcon, CloudUploadIcon, LockClosedIcon } from '@heroicons/react/solid'

const features = [
  {
    name: "Nurture Aspirations",
    description:
      "Every child has a unique gift. By revealing and celebrating these, we foster confidence and brilliance.",
    href: "#",
    icon: CloudUploadIcon,
  },
  {
    name: "Empower Voices",
    description:
      "When children visualize their dreams, they find a voice. By giving the space to share, we amplify their hopes and desires, ensuring they're not just seen, but also heard.",
    href: "#",
    icon: ArrowsExpandIcon,
  },
  {
    name: "Build Resilience",
    description:
      "Recognizing dreams instills purpose. Children who know their dreams navigate life's challenges, building thriving futures.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Inspire Action",
    description:
      "Dreams are the seeds of action. When we motivate children to dream bigger and bolder, we're setting the stage for them to take the steps necessary to turn those dreams into realities, enriching their lives and the world around them.",
    href: "#",
    icon: ArrowsExpandIcon,
  },
  {
    name: "Cultivate Leaders",
    description:
      "Today's dreamers are tomorrow's innovators. By guiding them towards their dreams, we're nurturing a generation of thinkers and visionaries.",
    href: "#",
    icon: ArrowsExpandIcon,
  },
  {
    name: "Strengthen Communities",
    description:
      "Championing our children's dreams, especially the most vulnerable, is an investment in tighter- knit communities.It's a promise of a space where everyone feels seen, valued, and empowered.",
    href: "#",
    icon: ArrowsExpandIcon,
  }
]

export default function OurImpactComponent() {
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px] pb-[20px]">The power of dreams can:</h2>
        <dl className="grid grid-cols-1 gap-x-2 gap-y-2 lg:max-w-none lg:grid-cols-3 py-6">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col bg-gradient-to-br from-[#ffde79] to-[#ffd24a] px-6 py-6 rounded-lg">
              <dt className="flex items-center gap-x-3 font-primary tracking-widest text-black text-[34px] font-bold underline decoration-wavy decoration-[#ffffff] underline-offset-8 decoration-[3px]">
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col font-secondary text-gray-700 text-[20px]">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
    </div>
  )
}
