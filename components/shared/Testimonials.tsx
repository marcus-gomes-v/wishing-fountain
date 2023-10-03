import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-6xl sm:mt-16 mb-9">
        <div className="relative text-gray-500">
          <figure>
            <blockquote className=" text-xl font-semibold t">
              <p className='text-center'>
                {t('components.testimonials.text')}
              </p>
            </blockquote>
          <figcaption className="mt-6 text-base flex justify-end text-gray-400">
                <div>
                  <div className="font-semibold italic"> {t('components.testimonials.quote')}</div>
                  <div className="mt-1 flex justify-end items-end"> {t('components.testimonials.author')}</div>
                </div>
            </figcaption>
          </figure>
        </div>
    </div>
  )
}