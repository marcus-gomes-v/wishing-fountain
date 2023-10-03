import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();
  
    return (
        <div className="relative">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src="/images/photos/top-image-home.png"
                    alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pelorous-600 to-indigo-300 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                        {t('components.hero.title')}
                    </span>
                    <span className="block text-pelorous-200">{t('components.hero.slogan')}</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero;