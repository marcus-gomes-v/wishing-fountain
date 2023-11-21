import { faChildReaching, faCompass, faStar } from "@fortawesome/pro-solid-svg-icons";
import { useTranslation } from 'react-i18next'

function HistoryAmbassadors() {
  const { t } = useTranslation();

   

  return (
    <div >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          md:decoration-[8px]">Laura's Dream
          </h2>
          <p className="mt-4 text-[24px] text-gray-600">
            Meet Laura Dekker, an extraordinary young sailor and one of our #UnwrapYourDream ambassadors. Laura's incredible journey serves as an inspiration to dreamers of all ages. Born during her parents' seven-year voyage in Whangārei, New Zealand, Laura's connection to the sea was established from the very beginning. <strong>At the age of 14, she dared to dream big and embarked on an audacious journey: to circumnavigate the globe solo, ultimately achieving a world record in the process.</strong><br /><br />
            However, her dream was met with numerous challenges, including eight grueling court cases that tested her determination. Despite facing adversity, Laura remained unwavering in her pursuit. In July 2010, a Dutch family court granted her the autonomy she needed to embark on her epic journey.<br /><br />
            What sets Laura's journey apart is her fierce independence. She chose to undertake this monumental task without sponsors, wanting to ensure that no one would dictate the course of her voyage. Her boat, "Guppy," was stripped down to basics, devoid of luxuries, showers, or fridges. It was just her, basic navigation skills, and the vast open sea.<br /><br />
            Laura once said, "If you have a dream, believe in yourself, and prepare yourself to follow it, almost anything is possible." In a world often clouded by negativity, Laura emerged as a beacon of hope, proving that with determination and unwavering belief, even the loftiest dreams can be achieved.<br /><br />
            After 518 days at sea, Laura Dekker accomplished the impossible, completing her solo circumnavigation at the tender age of 16. Her return to the Netherlands was a triumphant moment, showcasing that dreams, regardless of their audacity, can conquer adversity.<br /><br />
            Today, Laura continues to inspire youth to dream big and embrace the extraordinary as our #UnwrapYourDream ambassador. She shares her love for sailing and the adventures life has to offer. Her journey serves as a reminder that dreams, even in the face of the most daunting obstacles, can be transformed into reality.
          </p>
      </div>
    </div>
  )
}

export default HistoryAmbassadors;