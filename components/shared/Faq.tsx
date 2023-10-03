import { faPlus, faMinus } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import { Disclosure } from '@headlessui/react'

function FaqComponent() {
    const { t } = useTranslation();

    const goals = [
      {
        name: t('components.goals.items.one.name'),
        description: t('components.goals.items.one.description'),
      },
      {
        name: t('components.goals.items.two.name'),
        description: t('components.goals.items.two.description'),
      },
      {
        name: t('components.goals.items.three.name'),
        description: t('components.goals.items.three.description'),
      },
      {
        name: t('components.goals.items.four.name'),
        description: t('components.goals.items.four.description'),
      }
    ]

  const faqs = [
    {
      question: t('components.faq.0.question'),
      answer: t('components.faq.0.answer'),
    },
    {
      question: t('components.faq.1.question'),
      answer: t('components.faq.1.answer'),
    },
    {
      question: t('components.faq.2.question'),
      answer: t('components.faq.2.answer'),
    },
    {
      question: t('components.faq.3.question'),
      answer: t('components.faq.3.answer'),
    },
    {
      question: t('components.faq.4.question'),
      answer: t('components.faq.4.answer'),
    },
    {
      question: t('components.faq.5.question'),
      answer: t('components.faq.5.answer'),
    },
    {
      question: t('components.faq.6.question'),
      answer: t('components.faq.6.answer'),
    },
    {
      question: t('components.faq.7.question'),
      answer: t('components.faq.7.answer'),
    },
    {
      question: t('components.faq.8.question'),
      answer: t('components.faq.8.answer'),
    },
    {
      question: t('components.faq.9.question'),
      answer: t('components.faq.9.answer'),
    },
    {
      question: t('components.faq.10.question'),
      answer: t('components.faq.10.answer'),
    },
    {
      question: t('components.faq.11.question'),
      answer: t('components.faq.11.answer'),
    },
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FontAwesomeIcon icon={faMinus} className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <FontAwesomeIcon icon={faPlus} className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FaqComponent;