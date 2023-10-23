
function SecondaryPromptComponent() {

  const prompts = [
    {
      text: `'Future Vision': "If any resource or support were within your reach, what venture or project would you initiate to make a difference?"`,
    },
    {
      text: `'Instant Pro': "Imagine being able to master any skill or knowledge instantly. Which one would it be, and how would you employ it for betterment?"`,

    },
    {
      text: `'Global Voices': "If you could address the globe for 5 minutes, what issue would you prioritize?"`,

    },
    {
      text: `'Inspiration Sparks': "Recount an incident from your life that could inspire a book, movie, or song. How could that narrative instigate change?"`,

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

export default SecondaryPromptComponent;