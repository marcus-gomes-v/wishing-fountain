import { useTranslation } from "react-i18next";

function HeroLaura() {
    const { t } = useTranslation();
  
    return (
        <div className="h-screen flex justify-start pt-[72px] md:pt-[250px]">
            <div className="absolute inset-0 -mb-[80px] -ml-[250px] sm:ml-0">
                <img
                    className="h-full w-full object-cover"
                    src="/images/photos/laura-dekker.jpg"
                    alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-white mix-blend-multiply" />
            </div>
            <div className="relative">
                <h1 className="text-left font-bold tracking-tight text-[63px] sm:text-[5vw] px-3 lg:px-12 leading-[70px] sm:leading-[110px]">
                    <span className="block text-[#ffffff] md:text-[#ffd24a] text-left md:text-center">
                        "If you have a dream, believe in it, 
                        <br />and prepare to follow it,
                        <br />almost anything <br className="md:hidden" />is possible."
                    </span>
                    <span className="block text-white text-right md:text-center  text-[42px] md:text-[81px]">
                      - Laura Dekker
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default HeroLaura;