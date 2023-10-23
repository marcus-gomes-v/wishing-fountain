
import { useTranslation } from 'react-i18next'
import ExplainImproved from "./ExplainImproved";

function OurEventComponent() {
    const { t } = useTranslation();


  return (
    <>
      <div className="px-3 md:px-0">
        <div className="mx-auto max-w-4xl lg:max-w-7xl pt-10">
          <h2 className="
          text-[48px]
          md:text-[69px]
          font-bold
          tracking-wide
          text-gray-600
          text-center
          underline
          decoration-wavy
          decoration-[#ffd24a]
          underline-offset-8
          decoration-[4px]
          md:decoration-[8px]">
            A Global Invitation to Visualize the Future
          </h2>
          <div className="py-6">
            <p className="mt-4 text-[24px] text-gray-600">
              The core of our campaign is simple: inspiring children to draw their dreams for the future. But making it global requires everyone — teachers, parents, corporates, and you.
            </p>
          </div>
          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px]">
            <strong>How do I get involved?</strong>
          </h2>
        </div>
      </div>
      <ExplainImproved></ExplainImproved>
    </>
  )
}

export default OurEventComponent;