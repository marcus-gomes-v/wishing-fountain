/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { faBlog, faCircle, faDashboard, faHeadSideHeart, faHouseLaptop, faInfo, faMap, faNotes, faPeople, faPerson, faPotFood, faQuestion, faSquareInfo, faUserAstronaut} from '@fortawesome/pro-solid-svg-icons';

import { faBook, faComment, faDog } from '@fortawesome/free-solid-svg-icons';
import LogginButton from './LoginButton';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'
import { useAuth } from '../../context/AuthContext'

function Navbar({page}: {page: string}) {
    const { authUser, loading, signOut } = useAuth();
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const backgroundColor = scrolled || page != 'home' ? "bg-[#48259fff]" : "bg-transparent";
    const stickyNavbarClass = scrolled ? "sticky top-0 py-1 bg-gradient-to-b from-[#48259fff] to-violet-700" : "relative";

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position to determine if the user has scrolled down
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        // Attach the event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    const navigation = [
        {
            title: t('navBar.pages.ourImpact'),
            href: '/our-impact',
            page: 'our-impact',
            icon: faMap,
        },
        {
            title: t('navBar.pages.ourEvent'),
            href: '/our-event',
            page: 'our-event',
            icon: faNotes,
        },
        {
            title: t('navBar.pages.ambassadors'),
            href: '/ambassadors',
            page: 'ambassadors',
            icon: faPerson,
        },
        {
            title: t('navBar.pages.about_us'),
            href: '/about-us',
            page: 'aboutUs',
            icon: faCircle,
        },
        {
            title: t('navBar.pages.faq'),
            href: '/faq',
            page: 'faq',
            icon: faQuestion,
        },
        {
            title: t('navBar.pages.blog'),
            href: 'https://kstawinska.medium.com/dreams-amid-darkness-uniting-to-ignite-the-future-ecfb2db84630',
            page: 'blog',
            icon: faBlog,
        }
    ]

    const [ isLogged, setIsLogged ] = useState(false)

    useEffect(() => {
        if (!loading && !authUser) {
            setIsLogged(false)
        }

        if (authUser) {
            setIsLogged(true)
        }
    }, [authUser, loading])
    
    return (
        <header className={` ${stickyNavbarClass} ${backgroundColor}`}>
            <Popover className="relative">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
                <div className={`relative z-20 `}>
                    <div className={`max-w-full mx-auto flex justify-between items-center px-3 sm:px-12 py-2 `}>
                        <Link href={'/'}>
                            <a className="flex font-bold text-[#FFD24A] ">
                                <img src='/logo/logomark.svg' className='w-[300px]'/>
                            </a>
                        </Link>
                        <div className="-mr-2 -my-2 md:hidden flex">
                            <LanguageSwitcher />
                            <Popover.Button className="bg-white ml-3 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pelorous-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between pt-2">
                            <Popover.Group as="nav" className="flex space-x-2 align-middle items-center text-[24px] ml-6">
                                {!loading && isLogged ?
                                    <Link href={'/user'}>
                                        <a className={`px-3 font-bold tracking-wide hover:tracking-wider
                                            ${page == 'dashboard' ? "text-[#ffd24a] hover:text-[#ffd24a]" : "text-white hover:text-[#ffd24a"}`}>
                                            {t('navBar.dashboard')}
                                        </a>
                                    </Link> : <></>
                                } 
                                {navigation.map( (nav, i) => {
                                    return (
                                        <Link key={i} href={nav.href}>
                                            <a className={` px-3 font-bold tracking-wide hover:tracking-wider
                                                ${page == nav.page ? "text-[#ffd24a] hover:text-[#ffd24a]" : "text-white hover:text-[#ffd24a"}`}>
                                                {nav.title}
                                            </a>
                                        </Link>
                                    )
                                })}
                            </Popover.Group>
                            
                            <div className="flex items-center md:ml-12">
                                <LanguageSwitcher />
                                <LogginButton user={authUser} handleLogged={setIsLogged} ></LogginButton>
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
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#FFD24A] text-white sm:h-12 sm:w-12">
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
                                    <LogginButton user={authUser} handleLogged={setIsLogged} ></LogginButton>
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