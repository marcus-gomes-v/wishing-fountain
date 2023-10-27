import CorporateValuesComponent from "./Comporate-Values-Component";
import CorporateMaterialComponent from "./Corporate-Material-Component";
import IndividualMaterialComponent from "./Individual-Material-Component";
import IndividualValuesComponent from "./Individual-Values-Component";
import KindergartenMaterialComponent from "./Kindergarten-Material-Component";
import KindergartenPromptComponent from "./Kindergarten-Prompt-Component";
import LogginButtonTextTwo from "./LoginButtonTextTwo";

function IndividualComponent() {

  return (
    <>
      <div className="px-3 md:px-0">
        <div className="mx-auto max-w-4xl lg:max-w-7xl py-10 pb-20">
          <h1 className="
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
            Become a Dream Ambassador: Channel the Power of Dreams
          </h1>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10 pb-6">
            <strong>Why Join as a Dream Ambassador?:</strong>
          </h2>

          <p className="mt-4 text-[24px] text-gray-600">
            The <strong>#UnwrapYourDream</strong> initiative aims to unlock the boundless potential of children globally. As a Dream Ambassador, your passion and reach can be the key to ensuring thousands of children dare to dream bigger. Each one of us had someone who believed in us at a pivotal moment in our lives. As a Dream Ambassador, this is your chance to pass on that torch of belief. Stand as a beacon for young minds, ensuring they feel heard, seen, and empowered. By using your influence, network, and voice, you can pave a path for countless children to chase their dreams.
          </p>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10 pb-6">
            <strong>Your Role as a Dream Ambassador:</strong>
          </h2>

          <IndividualMaterialComponent></IndividualMaterialComponent>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10 pb-6">
            <strong>The Rewards of Being a Dream Ambassador:</strong>
          </h2>

          <IndividualValuesComponent></IndividualValuesComponent>

          <p className="mt-4 text-[24px] text-gray-600">
            Interested to Join us as a Dream Ambassador? Connect with us on LinkedIn.  
          </p>
        </div>
      </div>
    </>
  )
}

export default IndividualComponent;