
function KindergartenPromptComponent() {

  const prompts = [
    {
      text: `"Imagine you've woken up with a superpower! What would it be? How would you use this power to do wonderful things in the world?"`,
    },
    {
      text: `"Pretend you are an inventor and you can create something amazing that the world has never seen. What would your invention do to make everyone's life better?"`,

    },
    {
      text: `"Think about a day where we all lend a helping hand to each other. What help could you give to make someone's day brighter?"`,

    },
    {
      text: `"If you could grow a magical tree that does something special for humans, what would that special thing be? How would people feel after using your magical tree?"`,

    },
    
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
            <p className="text-[18px] font-medium text-gray-50">{prompt.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KindergartenPromptComponent;