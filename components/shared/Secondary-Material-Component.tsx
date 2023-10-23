import { faPenPaintbrush, faRectangleVertical, faRulerTriangle, faWaveform } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondaryMaterialComponent() {

  const projects = [
    { name: 'A4 sketch pads, visual diaries or journals.', initials: faRectangleVertical, href: '#', members: 16, bgColor: 'bg-pink-600' },
    { name: 'Varied range of colored markers/pencils.', initials: faPenPaintbrush, href: '#', members: 12, bgColor: 'bg-purple-600' },
    { name: 'Mixed arts & crafts supplies.', initials: faRulerTriangle, href: '#', members: 16, bgColor: 'bg-[#FFD24A]' },
    { name: 'An immersive & motivational music playlist.', initials: faWaveform, href: '#', members: 8, bgColor: 'bg-green-500' },
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

export default SecondaryMaterialComponent;