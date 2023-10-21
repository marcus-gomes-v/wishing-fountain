import { useTranslation } from "react-i18next";

function HeroPaint() {
    const { t } = useTranslation();
  
    return (
        <div className="h-screen flex justify-start pt-[60px]">
            <div className="absolute inset-0 -mb-[80px]">
                <img
                    className="h-full w-full object-cover"
                    src="/images/photos/girl-paint.jpg"
                    alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-white mix-blend-multiply" />
            </div>
            <div className="relative">
                <h1 className="text-left font-bold tracking-tight text-[96px] sm:text-[7vw] px-24">
                    <span className="block text-white">
                        Unwrap Dreams on 
                        <br />December 22nd!
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default HeroPaint;