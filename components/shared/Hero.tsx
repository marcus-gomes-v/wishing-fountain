import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();
  
    return (
        <div className="h-screen flex justify-end items-center">
            <div className="absolute inset-0 -mb-[80px]">
                <img
                    className="h-full w-full object-cover"
                    src="/images/photos/home.jpg"
                    alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-200 mix-blend-multiply" />
            </div>
            <div className="relative">
                <h1 className="text-left font-bold tracking-tight text-[96px] sm:text-[128px] px-6 sm:px-24">
                    <span className="block text-white">
                        {t('components.hero.title.0')}
                    </span>
                    <span className="block text-white sm:pl-6">
                        {t('components.hero.title.1')}
                    </span>
                    <span className="block text-white sm:pl-12">
                        {t('components.hero.title.2')}
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Hero;