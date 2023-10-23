
function PrimaryPromptComponent() {

  const prompts = [
    {
      text: `"Imagine your talent is a magical paintbrush. Whatever you paint becomes reality. What would you paint to make the world a better place?"`,
    },
    {
      text: `"If your talent could create a new toy or game that helps people or teaches something special, what would it be?"`,

    },
    {
      text: `"Suppose your talent was a song that had the power to change people's feelings or behaviors. What would your song do?"`,

    },
    {
      text: `"If you could create a shop that sells unique items crafted from your talent that makes the world happier or safer, what items would you sell?"`,

    },
    {
      text: `"Visualize a day when you used your special talent and it resulted in something extraordinary. What happened that day?"`
    },
    {
      text: `"Imagine you wake up with a superhero power related to something you're good at. How would you use it to help others?"`
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
            <p className="text-[18px] font-medium text-gray-50">{prompt.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrimaryPromptComponent;