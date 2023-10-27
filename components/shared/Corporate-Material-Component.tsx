import { faClapperboard, faNoteSticky, faPaperPlane, faPenPaintbrush, faRectangleVertical } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkIcon } from '@heroicons/react/solid'

function CorporateMaterialComponent() {

  const projects = [
    { title: 'Dream Visualization Workshops:', description: "Host sessions where children are encouraged to imagine and articulate their dreams, turning them into visual stories or projects.", initials: faRectangleVertical, href: '#', members: 16, bgColor: 'bg-pink-600' },
    { title: 'Amplify Young Trailblazers:', description: "Share stories of young achievers in your sector who followed their dreams, to inspire and show children what's possible.", initials: faPenPaintbrush, href: '#', members: 12, bgColor: 'bg-purple-600' },
    { title: 'Employee Involvement:', description: "Empower your team to contribute by mentoring these young dreamers or sharing their own tales of perseverance and ambition.", initials: faNoteSticky, href: '#', members: 16, bgColor: 'bg-[#FFD24A]' },
    { title: 'Co-Branding Initiatives:', description: "Co-create content, campaigns, or events that spotlight your commitment to nurturing the next generation of dreamers.", initials: faClapperboard, href: '#', members: 8, bgColor: 'bg-green-500' },
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

export default CorporateMaterialComponent;