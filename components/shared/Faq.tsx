import { faPlus, faMinus } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

function FaqComponent() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqs = [
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.0.question'),
      answer: t('components.faq.0.answer'),
    },
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.1.question'),
      answer: t('components.faq.1.answer'),
    },
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.2.question'),
      answer: t('components.faq.2.answer'),
    },
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.3.question'),
      answer: t('components.faq.3.answer'),
    },
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.4.question'),
      answer: t('components.faq.4.answer'),
    },
    {
      category: "About #UnwrapYourDream",
      question: t('components.faq.5.question'),
      answer: t('components.faq.5.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.6.question'),
      answer: t('components.faq.6.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.7.question'),
      answer: t('components.faq.7.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.8.question'),
      answer: t('components.faq.8.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.9.question'),
      answer: t('components.faq.9.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.10.question'),
      answer: t('components.faq.10.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.11.question'),
      answer: t('components.faq.11.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.12.question'),
      answer: t('components.faq.12.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.13.question'),
      answer: t('components.faq.13.answer'),
    },
    {
      category: "Registration",
      question: t('components.faq.14.question'),
      answer: t('components.faq.14.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.15.question'),
      answer: t('components.faq.15.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.16.question'),
      answer: t('components.faq.16.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.17.question'),
      answer: t('components.faq.17.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.18.question'),
      answer: t('components.faq.18.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.19.question'),
      answer: t('components.faq.19.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.20.question'),
      answer: t('components.faq.20.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.21.question'),
      answer: t('components.faq.21.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.22.question'),
      answer: t('components.faq.22.answer'),
    },
    {
      category: "Organizaing The Event",
      question: t('components.faq.23.question'),
      answer: t('components.faq.23.answer'),
    },
    {
      category: "Share on X",
      question: t('components.faq.24.question'),
      answer: t('components.faq.24.answer'),
    },
    {
      category: "Share on X",
      question: t('components.faq.25.question'),
      answer: t('components.faq.25.answer'),
    },
    {
      category: "Share on X",
      question: t('components.faq.26.question'),
      answer: t('components.faq.26.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.27.question'),
      answer: t('components.faq.27.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.28.question'),
      answer: t('components.faq.28.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.29.question'),
      answer: t('components.faq.29.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.30.question'),
      answer: t('components.faq.30.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.31.question'),
      answer: t('components.faq.31.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.32.question'),
      answer: t('components.faq.32.answer'),
    },
    {
      category: "Photos",
      question: t('components.faq.33.question'),
      answer: t('components.faq.33.answer'),
    },
    {
      category: "Privacy",
      question: t('components.faq.34.question'),
      answer: t('components.faq.34.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.35.question'),
      answer: t('components.faq.35.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.36.question'),
      answer: t('components.faq.36.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.37.question'),
      answer: t('components.faq.37.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.38.question'),
      answer: t('components.faq.38.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.39.question'),
      answer: t('components.faq.39.answer'),
    },
    {
      category: "Support",
      question: t('components.faq.40.question'),
      answer: t('components.faq.40.answer'),
    },
  ]

  const faqCategory = [
    {
      title: "About #UnwrapYourDream"
    },
    {
      title: "Registration"
    },
    {
      title: "Organizaing The Event"
    },
    {
      title: "Share on X"
    },
    {
      title: "Photos"
    },
    {
      title: "Privacy"
    },
    {
      title: "Support"
    },
  ]

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className=" 
          text-[38px]
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
          md:decoration-[8px]">Frequently asked questions</h2>
          
        </div>
        <div className="hidden md:flex flex-row gap-3 py-10">
          <div className="w-1/4">
            <ul
              role="list"
              className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
              {faqCategory.map((category,i) => (
                <li
                  key={i}
                  className={`relative flex gap-x-6 px-4 py-5 ${selectedCategory === category.title ? 'bg-gray-50' : ''}`}
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <div className="flex items-center justify-evenly w-full">
                    <div className="min-w-0 w-52">
                      <p className="text-[16px] font-bold leading-6 text-gray-900">
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {category.title}
                      </p>
                    </div>
                    <div className="w-5">
                      <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 px-9">
            <dl className=" divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl px-6">
              {faqs.filter(faq => !selectedCategory || faq.category === selectedCategory).map((faq) => (
                <Disclosure as="div" key={faq.question} >
                  {({ open }) => (
                    <>
                      <dt className="py-3">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="font-secundary font-medium text-[16px]">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <FontAwesomeIcon icon={faMinus} className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <FontAwesomeIcon icon={faPlus} className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="-pt-3">
                        <p className="text-base text-[16px] text-gray-600 py-6">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>

        {/* For Mobile Screens */}
        <div className="py-10 md:hidden rounded-md">
          {faqCategory.map((category, i) => (
            <Disclosure as="div" key={i} className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 p-3 ">
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between text-left text-gray-900 ${selectedCategory === category.title ? 'bg-gray-50' : ''}`}>
                    <span className="font-secundary font-semibold text-[18px]">{category.title}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      ) : (
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel as="div" className="mt-3">
                    {faqs.filter(faq => faq.category === category.title).map((faq) => (
                      <Disclosure as="div" key={faq.question} >
                        {({ open }) => (
                          <>
                            <dt className="py-3">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                                <span className="font-secundary font-semibold text-[14px]">{faq.question}</span>
                                <span className="ml-6 flex h-7 items-center">
                                  {open ? (
                                    <FontAwesomeIcon icon={faMinus} className="h-4 w-4" aria-hidden="true" />
                                  ) : (
                                    <FontAwesomeIcon icon={faPlus} className="h-4 w-4" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <p className="text-base text-[14px] text-gray-600">{faq.answer}</p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqComponent;