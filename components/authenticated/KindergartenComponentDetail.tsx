import KindergartenMaterialComponent from "../shared/Kindergarten-Material-Component";
import KindergartenPromptComponent from "../shared/Kindergarten-Prompt-Component";
import LogginButtonTextThree from "../shared/LoginButtonTextThree";

function KindergartenComponentDetail() {

  return (
    <>
      <div className="px-3 md:px-0">
        <div className="mx-auto pb-20">
          <h2 className="
          text-[48px]
          md:text-[50px]
          font-bold
          tracking-wide
          text-gray-600
          text-center
          underline
          decoration-wavy
          decoration-[#ffd24a]
          underline-offset-8
          decoration-[2px]
          md:decoration-[4px]">
            Organize a “Dream Big” Workshop for Kindergarten
          </h2>
          
          <h2 className="text-[36px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
            <strong>Workshop Overview</strong>
          </h2>

          <p className="mt-4 text-[24px] text-gray-600">
            <strong>Duration:</strong> 1 hour
            <br /><br />
            <strong>Audience:</strong> Ages 4-6
            <br /><br />
            With their limitless imagination and pure innocence, it's an exceptional trait for children at this young age to dream without boundaries. Our workshop is an opportunity to resonate with this fertile imagination, empower our little dreamers and give them encouragement to express and bring their dreams to life.
          </p>
          
          <div>
            <p className="mt-4 text-[24px] text-gray-600">
              <strong>Objective:</strong> This workshop is designed to invite children to recognize, articulate, and pictorially represent their dreams in a fun, engaging, and encouraging environment.
              <br /><br />
              <strong>Materials Needed:</strong>
            </p>
          
          
            <KindergartenMaterialComponent></KindergartenMaterialComponent>

            <p className="mt-4 text-[24px] text-gray-600">
              <strong>Workshop Steps:</strong>
            </p>

            <ul className="list-decimal pl-6">
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Setting the Stage (5 minutes):</strong> Begin with an inspiring real-life story of a person who realized their childhood dream, like an astronaut who dreamt of space, or an artist inspired by nature. Pose the question, "What do you think a dream is?"
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Dream-Inspiring Prompts (10 minutes):</strong> Distribute the prompted printouts among the children and inspire their curiosity. Here are some prompts you can use:
                </p>
                <KindergartenPromptComponent></KindergartenPromptComponent>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Dream Visualization Activity (20 minutes):</strong> Distribute art supplies and encourage children to bring their dreams to life on paper. This could be responses to prompts or any fantastical idea they have. Play calming instrumental tunes in the background to create a serene ambiance.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Show & Share (15 minutes):</strong> Offer the children an opportunity to present their artwork to their peers, if they're comfortable doing so. Create an atmosphere of encouragement filled with enthusiastic comments and admiration.
                </p>
              </li>
              <li>
                <p className="mt-4 text-[24px] text-gray-600">
                  <strong>Capture their dreams:</strong> Use this opportunity to take pictures of their dreams and describe them, to post on X between the 1th of June. Take a look at our <a href="/faq" className="font-secundary underline">FAQ</a> for post guidelines and privacy rules.
                </p>
              </li>
            </ul>

            <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
              <strong>CONCLUSION</strong>
            </h2>

            <p className="mt-4 text-[24px] text-gray-600">
              Express your gratitude to each child for their participation and assure them of the power and significance of their dreams. Reiterate that all dreams are valid, unique, and just as extraordinary as the children themselves.
              <br /><br />
              <strong>Additional Recommendations:</strong>
            </p>

            <ul className="list-disc pl-6 text-[24px] text-gray-600">
              <li>Tranquil background music playlist (optional).</li>
              <li>Nurture a welcoming environment, emphasizing that there are no wrong dreams.</li>
              <li>Encourage leaders and volunteers to also partake, demonstrating that dreaming is ageless and universal.</li>
              <li>Refrain from focusing on the finished product; instead, underscore the importance of the creative process. The goal is to embolden children to imagine, ponder, and articulate.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default KindergartenComponentDetail;