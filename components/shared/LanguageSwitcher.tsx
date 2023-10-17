import React from "react";
import { useTranslation } from "react-i18next";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    // Define an array of languages
    const languages = [
        { code: "en", name: "EN" },
        // Add other language options as needed
    ];

    // Define the currently selected language code and a function to update it
    const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

    // Define a function to change the language
    const changeLanguage = (code: any) => {
        setSelectedLanguage(code);
        i18n.changeLanguage(code);
    };

    return (
        <Listbox
            as="div"
            className="w-20 m:w-32 relative text-[24px]"
            value={selectedLanguage}
            onChange={(code: any) => changeLanguage(code)}
        >
            {({ open }) => (
                <>
                    <Listbox.Button
                        as="button"
                        className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <span className="block truncate font-bold text-[24px]">
                            {languages.find((lang) => lang.code === selectedLanguage)?.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon className="h-5 w-5 text-gray-50" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={React.Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm font-bold">
                            {languages.map((language) => (
                                <Listbox.Option
                                    key={language.code}
                                    value={language.code}
                                >
                                    {({ selected, active }) => (
                                        <button
                                            className={`${active ? "bg-indigo-600 text-white" : "text-gray-900"
                                                } relative cursor-default select-none py-2 pl-3 pr-9 w-full text-left font-bold text-[24px]`}
                                            onClick={() => changeLanguage(language.code)}
                                        >
                                            <span
                                                className={`${selected ? "font-bold" : "font-bold"
                                                    } block truncate`}
                                            >
                                                {language.name}
                                            </span>
                                            {selected && (
                                                <span
                                                    className={`${active ? "text-white" : "text-indigo-600"
                                                        } absolute inset-y-0 right-0 flex items-center pr-4 text-[24px]`}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </button>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </>
            )}
        </Listbox>
    );
}

export default LanguageSwitcher;
