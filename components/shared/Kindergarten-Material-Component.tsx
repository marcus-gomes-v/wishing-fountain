import { faClapperboard, faNoteSticky, faPaperPlane, faPenPaintbrush, faRectangleVertical } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkIcon } from '@heroicons/react/solid'

function KindergartenMaterialComponent() {

  const projects = [
    { name: 'Large drawing sheets (A3 size is preferable)', initials: faRectangleVertical, href: '#', members: 16, bgColor: 'bg-pink-600' },
    { name: 'Crayons, colored pencils, or watercolor paints', initials: faPenPaintbrush, href: '#', members: 12, bgColor: 'bg-purple-600' },
    { name: 'Stickers, stamps, and other craft materials', initials: faNoteSticky, href: '#', members: 16, bgColor: 'bg-yellow-500' },
    { name: 'Printouts of thought-provoking dream prompts you can use to guide the students', initials: faClapperboard, href: '#', members: 8, bgColor: 'bg-green-500' },
  ]

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex flex-col shadow-sm border border-gray-200 rounded-lg overflow-hidden">
            <div
              className={classNames(
                project.bgColor,
                'flex w-full h-9 flex-shrink-0 items-center justify-center  text-sm font-medium text-white'
              )}
            >
              <FontAwesomeIcon icon={project.initials} className='h-6 ' />
            </div>
            <div className="">
              <div className="flex-1 px-4 py-2 text-[18px]">
                <p className="text-gray-500 "> {project.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default KindergartenMaterialComponent;