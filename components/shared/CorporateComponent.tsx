import CorporateValuesComponent from "./Comporate-Values-Component";
import CorporateMaterialComponent from "./Corporate-Material-Component";
import KindergartenMaterialComponent from "./Kindergarten-Material-Component";
import KindergartenPromptComponent from "./Kindergarten-Prompt-Component";
import LogginButtonTextTwo from "./LoginButtonTextTwo";

function CorporateComponent() {

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
            Unlock Your Impact: Corporate Social Responsibility (CSR) Partner
          </h1>
          
          <p className="mt-4 text-[24px] text-gray-600">
            Join <strong>#UnwrapYourDream</strong>, is more than just a campaign; it’s a global mission dedicated to amplifying the dreams of children everywhere. By allying with us as a Corporate Social Responsibility (CSR) partner, your organization has the unique opportunity to spotlight the incredible stories of young trailblazers, while also inspiring countless children to visualize and chase their own aspirations.
          </p>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10 pb-6">
            <strong>How Your Organization Can Engage:</strong>
          </h2>
          
          <CorporateMaterialComponent></CorporateMaterialComponent>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10 pb-6">
            <strong>Value-Adds of Being a CSR Partner:</strong>
          </h2>

          <CorporateValuesComponent></CorporateValuesComponent>

          <p className="mt-4 text-[24px] text-gray-600">
            Interested to Join us as a Corporate Partner? Connect with us on LinkedIn. 
          </p>
        </div>
      </div>
    </>
  )
}

export default CorporateComponent;