import { useTranslation } from 'react-i18next'
import SecondaryMaterialComponent from "./Secondary-Material-Component";
import SecondaryPromptComponent from "./Secondary-Prompt-Component";
import LogginButtonTextTwo from './LoginButtonTextTwo';
import LogginButtonTextThree from './LoginButtonTextThree';

function SecondarySchoolComponent() {
    const { t } = useTranslation();


  return (
    <>
      <div className="px-3 md:px-0">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-10 pb-20">
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
            #UnwrapYourDream Workshop
          </h2>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
            <strong>Workshop Overview</strong>
          </h2>

          <p className="mt-4 text-[24px] text-gray-600">
            <strong>Audience:</strong> Age 12-18
            <br /><br />
            <strong>Duration:</strong> Approximately 3 hours
            <br /><br />
            <strong>Objective:</strong> This workshop is an engaged, interactive platform that aims to inspire and provoke teenagers to deeply explore their personal passions and potential. It's all about encouraging them to envision a future filled with innovation, meaningful change, and impact.
            <br /><LogginButtonTextThree></LogginButtonTextThree>
          </p>

          <div className="hidden">
            <p className="mt-4 text-[24px] text-gray-600">
              <br /><br />
              <strong>Materials Needed:</strong>
            </p>

            <SecondaryMaterialComponent></SecondaryMaterialComponent>
            <p className="mt-4 text-[24px] text-gray-600">
              <strong>Workshop Steps:</strong>
            </p>

            <ul className="list-decimal pl-6">
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Meet & Greet Ice-breaker (15 minutes):</strong> Begin with a group activity where everyone shares one unique fact about themselves and a global challenge they're concerned about or wish to solve.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Lived Narratives (30 minutes): </strong> Present multimodal stories of aspiring young innovators, activists, or changemakers from diverse backgrounds and fields. Discuss their motivations, struggles, ane the talents or passions they harnessed on their journey. For inspiration, check our <a href="https://www.facebook.com/UnwrapYourDream" target="_blank" className='font-secundary'>Facebook Community</a> Community Group.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Intensive Dream Dig (30 minutes):</strong>
                </p>
                <SecondaryPromptComponent></SecondaryPromptComponent>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Dream Visualization Masterclass (45 minutes):</strong> Distribute diverse art materials and encourage participants to illustrate, write, or craft to express their dreams and ideas. Play immersive background music to stimulate creativity.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Collab Dream Lab (30 minutes):</strong> Form dynamic teams and have them share and interlink their dreams, envisioning how they could collectively transform their visions into a joint project or initiative. They could give each other advice on how to take the first step towards acting on that dream.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Dream Showcase & Constructive Critique (30 minutes):</strong> Create a space for teams or individuals to present their dreams. Foster an atmosphere of constructive feedback and respectful sharing of perspectives.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Pledge & Promise (15 minutes):</strong> Inspire participants to pledge a small, tangible step towards realizing their dream. This could be something as simple as conducting research, arranging a meeting, starting a blog, or another small but significant step.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Capture their dreams:</strong> Use this opportunity to take pictures of their dreams and describe them, to post on X on the 1th of June. Take a look at our <a href="/faq" className="font-secundary underline">FAQ</a> for post guidelines and privacy rules.
                </p>
              </li>
              
            </ul>

            <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
              <strong>Additional Recommendations</strong>
            </h2>

            <p className="mt-4 text-[24px] text-gray-600">
              Invite a guest speaker or mentor who has realized their dream or is on their journey. Let them share their experiences and challenges.
            </p>

            <p className="mt-4 text-[24px] text-gray-600">
              This workshop is about harnessing the transitional energy of this age group, where they straddle the line between childhood creativity and adult responsibility. The goal is to empower them to believe they can be the change-makers of tomorrow.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default SecondarySchoolComponent;