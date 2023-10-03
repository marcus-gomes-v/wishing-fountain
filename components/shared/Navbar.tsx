/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {  faDashboard, faHeadSideHeart, faHouseLaptop, faInfo, faPeople, faPotFood, faSquareInfo} from '@fortawesome/pro-solid-svg-icons';
import { faBook, faComment, faDog } from '@fortawesome/free-solid-svg-icons';
import LogginButton from './LoginButton';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'

function Navbar({page}: {page: string}) {
    const { t } = useTranslation();
    
    const navigation = [
        {
            title: t('navBar.pages.ambassadors'),
            href: '/ambassadors',
            page: 'ambassadors',
            icon: faComment,
        },
        {
            title: t('navBar.pages.about_us'),
            href: '/about-us',
            page: 'aboutUs',
            icon: faComment,
        },
        {
            title: t('navBar.pages.faq'),
            href: '/faq',
            page: 'faq',
            icon: faComment,
        }
    ]


    const [loading, setLoading] = useState(false);

    const [ isLogged, setIsLogged ] = useState(false)

   
    
    return (
        <header>
            <Popover className="relative bg-white">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
                <div className="relative z-20">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-7 md:justify-start md:space-x-10">
                        <Link href={'/'}>
                            <a className="flex font-bold text-pelorous-600 text-lg group">
                                <span className="sr-only">{t('common.logo_name')}</span>
                                <img src='/icons/29.png' className='mr-2'/>
                                {t('common.logo_name')}
                            </a>
                        </Link>
                        <div className="-mr-2 -my-2 md:hidden flex">
                            <LanguageSwitcher />
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pelorous-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                            <Popover.Group as="nav" className="flex space-x-10 align-middle items-center">
                                
                                {!loading && isLogged ?
                                    <Link href={'/user'}>
                                        <a className={`px-3 text-base font-medium
                                            ${page == 'user' ? "text-pelorous-500 hover:text-pelorous-900" : "text-gray-500 hover:text-gray-900"}`}>
                                            {t('navBar.dashboard')}
                                        </a>
                                    </Link> : <></>
                                } 
                                {navigation.map( (nav, i) => {
                                    return (
                                        <Link key={i} href={nav.href}>
                                            <a className={` px-3 text-base font-medium
                                                ${page == nav.page ? "text-pelorous-500 hover:text-pelorous-900" : "text-gray-500 hover:text-gray-900"}`}>
                                                {nav.title}
                                            </a>
                                        </Link>
                                    )
                                })}
                            </Popover.Group>
                            
                            <div className="flex items-center md:ml-12">
                                <LanguageSwitcher />
                                <LogginButton handleLoading={setLoading} handleLogged={setIsLogged}></LogginButton>
                            </div>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                            <div className="pt-5 pb-6 px-5 sm:pb-8">
                                <div className="flex items-center justify-between">
                                    <div className="-mr-2">
                                        
                                        
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pelorous-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8">
                                    <nav>
                                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                            {navigation.map((nav, i) => {
                                                return (
                                                    <Link key={i} href={nav.href}>
                                                        <a className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pelorous-500 text-white sm:h-12 sm:w-12">
                                                                <FontAwesomeIcon icon={nav.icon} className="h-6 w-6" aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-gray-900">{nav.title}</div>
                                                        </a>
                                                    </Link>
                                                )
                                            })}
                                            {!loading && isLogged ?
                                                <Link href={'/user'}>
                                                    <a className='flex'>
                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pelorous-500 text-white sm:h-12 sm:w-12">
                                                            <FontAwesomeIcon icon={faDashboard} className="h-6 w-6" aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4 text-base font-medium text-gray-900">{t('navBar.dashboard')}</div>
                                                    </a>
                                                </Link>
                                                : ''
                                            } 
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div>
                                <div className="mt-6">
                                    <LogginButton handleLoading={setLoading} handleLogged={setIsLogged}></LogginButton>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Navbar;