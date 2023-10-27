
function IndividualValuesComponent() {

  const prompts = [
    {
      text: `<strong>Create Lasting Change:</strong><span class='font-light'> Play an integral role in shaping the dreams and futures of countless young hearts.</span>`,
    },
    {
      text: `<strong>Share in a Legacy of Hope:</strong> <span class='font-light'> This journey is your opportunity to pass on the trust and belief someone once showed you. Become a part of a story that echoes hope and inspiration across the world.</span>`,
    },
    {
      text: `<strong>Expand Your Circle:</strong> <span class='font-light'> Connect and collaborate with a diverse community of passionate changemakers, innovators, and dreamers.</span>`,
    },
    {
      text: `<strong>Earn Recognition:</strong> <span class='font-light'> Your relentless efforts and contributions won't go unnoticed. As we grow and touch lives, we'll ensure your dedication is celebrated and honored.</span>`,
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

export default IndividualValuesComponent;