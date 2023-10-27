import { faClapperboard, faGlobe, faMarker, faNoteSticky, faPaperPlane, faPenPaintbrush, faPeopleGroup, faRectangleVertical, faSquareHeart } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkIcon } from '@heroicons/react/solid'

function IndividualMaterialComponent() {

  const projects = [
    { title: 'Champion the Cause:', description: "Advocate for our mission passionately, both offline and on digital platforms.", initials: faSquareHeart, href: '#', members: 16, bgColor: 'bg-pink-600' },
    { title: 'Forge Connections:', description: "Be the bridge between us and potential allies, including partners, educational institutions, and visionary individuals.", initials: faGlobe, href: '#', members: 12, bgColor: 'bg-purple-600' },
    { title: 'Inspire Through Content:', description: "Craft and share compelling stories, updates, and visuals that resonate with the spirit of the campaign.", initials: faMarker, href: '#', members: 16, bgColor: 'bg-[#FFD24A]' },
    { title: 'Mobilize Local Communities:', description: "Host or coordinate events and activities that resonate with our objectives, getting local communities involved.", initials: faPeopleGroup, href: '#', members: 8, bgColor: 'bg-green-500' },
  ]

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.title} className="col-span-1 flex flex-col shadow-sm border border-gray-200 rounded-lg overflow-hidden">
            <div
              className={classNames(
                project.bgColor,
                'flex w-full py-2 flex-shrink-0 items-center justify-around  text-md font-medium text-white'
              )}
            >
              <FontAwesomeIcon icon={project.initials} className='h-6 ' /> {project.title}
            </div>
            <div className="">
              <div className="flex-1 px-4 py-2 text-[18px]">
                <p className="text-gray-500 "> {project.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndividualMaterialComponent;