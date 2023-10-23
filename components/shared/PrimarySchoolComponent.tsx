import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import ExplainImproved from "./ExplainImproved";

function PrimarySchoolComponent() {
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
            Imaginative Dreamers – The Dream Big Creativity Workshop for Primary School Students
          </h2>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
            <strong>Workshop Overview</strong>
          </h2>

          <p className="mt-4 text-[24px] text-gray-600">
            <strong>Duration:</strong> Approximately 2 hours
            <br /><br />
            <strong>Objective:</strong> This workshop is designed to inspire children to explore their individual talents—be it artistic, academic, athletic, entrepreneurial, or otherwise—and encourage them to envision how they can leverage these talents to positively impact the world. Providing a safe space for all ideas, the intention is to encourage children that all dreams, no matter how diverse, hold the potential for greatness.
            <br /><br />
            <strong>Materials Needed:</strong>
          </p>
          <ul className="list-disc pl-6 text-[24px]">
            <li>A4 sketch pads</li>
            <li>Colored markers/pencils</li>
            <li>Mixed arts & crafts supplies</li>
            <li>Inspirational and upbeat music playlist</li>
          </ul>

          <p className="mt-4 text-[24px] text-gray-600">
            <strong>Workshop Steps:</strong>
          </p>

          <ul className="list-decimal pl-6">
            <li>
              <p className="mt-4 text-[24px] text-gray-600">
                <strong>Setting the Stage (10 minutes):</strong> Begin with a compelling story about an individual who changed the world through their unique talent, such as Steve Jobs, or Malala Yousafzai or modern-day innovators. For further inspiration check out the stories on our Facebook Page. Guide the discussion with: "Imagine your unique talent as a magic tool. How would you use it to create a positive change in the world?"
              </p>
            </li>
            <li>
              <p className="mt-4 text-[24px] text-gray-600">
                <strong>All-encompassing Dream Prompts (15 minutes):</strong> Guide the children with diverse and inclusive prompts that cater to a range of talents:
              </p>
              <ul className="list-disc pl-12 text-[24px]">
                <li className="py-2">"Imagine your talent is a magical paintbrush. Whatever you paint becomes reality. What would you paint to make the world a better place?"</li>
                <li className="py-2">"If your talent could create a new toy or game that helps people or teaches something special, what would it be?"</li>
                <li className="py-2">"Suppose your talent was a song that had the power to change people's feelings or behaviors. What would your song do?"</li>
                <li className="py-2">"If you could create a shop that sells unique items crafted from your talent that makes the world happier or safer, what items would you sell?"</li>
                <li className="py-2">"Visualize a day when you used your special talent and it resulted in something extraordinary. What happened that day?"</li>
              </ul>
            </li>
            <li>
              <p className="mt-4 text-[24px] text-gray-600">
                <strong>Dream Visualization Activity (20 minutes):</strong> Distribute art supplies to allow children the freedom to illustrate their dreams and ideas. Background music can add an inspiring touch to the creative process.
              </p>
            </li>
            <li>
              <p className="mt-4 text-[24px] text-gray-600">
                <strong>Dream Sharing & Encouragement (10 minutes):</strong> Provide an encouraging platform for children to present their dreams. Applaud unique ideas, foster mutual appreciation, and encourage discussion.
              </p>
            </li>
          </ul>

          <h2 className="text-[48px] font-bold text-gray-600 underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[4px] pt-10">
            <strong>CONCLUSION</strong>
          </h2>

          <p className="mt-4 text-[24px] text-gray-600">
            Express gratitude for their brave participation and creation, reminding them that their dreams have transformative powers. Encourage them to trust their talents, dreams, and their imaginative ideas.
            <br /><br />
            <strong>Additional Recommendations:</strong>
          </p>

          <ul className="list-disc pl-6 text-[24px]">
            <li>Help create an atmosphere of acceptance, emphasizing that all dreams, irrespective of their nature, hold the potential for greatness.</li>
            <li>Some teachers and support staff should also share their dreams, exemplifying the significance of dreaming at all ages.</li>
            <li>Maintain the focus on the process of dreaming, emphasizing that dreaming and planning are significant steps towards actualizing their dreams.</li>
          </ul>

          <p className="mt-4 text-[24px] text-gray-600">
            This workshop turns every talent into a medium for dreaming big. It aims to empower every child, regardless of their preferred avenue of expression, to believe in the enormous potential of their unique talents, creativity, and dreams.
          </p>

        </div>
      </div>
    </>
  )
}

export default PrimarySchoolComponent;