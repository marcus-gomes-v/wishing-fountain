
function CorporateValuesComponent() {

  const prompts = [
    {
      text: `<strong>Strengthened Brand Image:</strong><span class='font-light'> Cement your reputation as a company that not only champions dreams but actively fosters them.</span>`,
    },
    {
      text: `<strong>Elevated Employee Morale:</strong> <span class='font-light'>Engage employees in a deeply rewarding endeavor that celebrates innovation and aspiration.</span>`,
    },
    {
      text: `<strong>Widespread Impact:</strong> <span class='font-light'>Touch the lives of children globally, molding future leaders and thinkers.</span>`,
    },
    {
      text: `<strong>Broaden Your Network:</strong> <span class='font-light'>Collaborate with other trailblazing companies dedicated to inspiring the next generation.</span>`,
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-6">
      {prompts.map((prompt, i) => (
        <div
          key={i}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-[#6C28D8] px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="min-w-0 flex-1">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-[18px] f text-gray-50" dangerouslySetInnerHTML={{ __html: prompt.text }}></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CorporateValuesComponent;