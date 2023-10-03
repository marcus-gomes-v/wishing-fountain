import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gray-100">
      <div className="mx-auto max-w-6xl py-6">
        <div className="relative text-gray-500">
          <figure>
            <blockquote className=" text-xl font-semibold t">
              <p className='text-center'>
                {t('components.testimonials.text')}<br />
                <span className='font-light'>{t('components.testimonials.author')}</span>
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
    
  )
}