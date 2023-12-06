import React, { useState, useEffect, useRef } from 'react';
import NavLink from './NavLink';
import Accordion from './Accordion';
import { useRouter } from 'next/router';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { useSelectedPage } from '@/contexts/SelectedPageContext';
import {
    HomeIcon,
    InformationCircleIcon,
    ListBulletIcon,
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
    Bars3Icon,
    XMarkIcon,
    WrenchScrewdriverIcon,
    MapPinIcon,
    IdentificationIcon,
    UserGroupIcon,
    DocumentTextIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';
import { SiGithub } from 'react-icons/si';

export default function Navbar() {

    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [translations, setTranslations] = useState({});
    const { setSelectedPage, setSelectedSection } = useSelectedPage();
    const router = useRouter();
    const currentLocale = router.locale;
    const { locale } = router;
    const dropdownRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openDropdownIndex !== null && dropdownRefs.current[openDropdownIndex] && !dropdownRefs.current[openDropdownIndex].contains(event.target)) {
                setOpenDropdownIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdownIndex]);

    const toggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translationModule = await import(`../../locales/${locale}/translation.json`);
                setTranslations(translationModule.default);
            } catch (error) {
                console.error('Could not load translations:', error);
            }
        };

        loadTranslations();
    }, [locale]);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const handleLanguageDropdownToggle = () => {
        setIsLanguageDropdownOpen((prevOpen) => !prevOpen);
    };

    const handleLanguageChange = (lang) => {
        console.log("Switching language to: " + lang);
        setIsLanguageDropdownOpen(false);
        router.push(router.asPath, undefined, { locale: lang });
    };

    const handleHamburgerClick = () => {
        setIsHamburgerMenuOpen((prevState) => !prevState);
    };

    const closeHamburgerMenu = () => {
        setIsHamburgerMenuOpen(false); // for passing to Mobile Menu children Accordions and NavLinks, so that they can close the entire menu
    };

    const getCurrentFlag = () => {
        switch (currentLocale) {
            case 'en':
                return '/flags/gb.svg';
            case 'de':
                return '/flags/de.svg';
            case 'hr':
                return '/flags/hr.svg';
            default:
                return '🌐';
        }
    };

    const languages = [
        { code: 'en', flag: '/flags/gb.svg', alt: 'English flag' },
        { code: 'de', flag: '/flags/de.svg', alt: 'German flag' },
        { code: 'hr', flag: '/flags/hr.svg', alt: 'Croatian flag' }
    ];

    const otherLanguages = languages.filter(lang => lang.code !== currentLocale);

    const menuSections = [
        {
            name: 'house',
            path: '/house',
            icon: <HomeIcon className="h-6 w-6 mr-2" />,
            items: [
                { name: 'villa', section: 'villa', icon: <HomeIcon className="h-5 w-5 mr-1" /> },
                { name: 'area', section: 'area', icon: <MapPinIcon className="h-5 w-5 mr-1" /> },
                { name: 'about', section: 'about', icon: <IdentificationIcon className="h-5 w-5 mr-1" /> },
                { name: 'info', section: 'info', icon: <InformationCircleIcon className="h-5 w-5 mr-1" /> },
                { name: 'photos', section: 'photos', icon: <PhotoIcon className="h-5 w-5 mr-1" /> },
            ],
        },
        {
            name: 'services',
            path: '/services',
            icon: <WrenchScrewdriverIcon className="h-6 w-6 mr-2" />,
            items: [
                { name: 'offer', section: 'offer', icon: <ListBulletIcon className="h-5 w-5 mr-1" /> },
                { name: 'vita', section: 'vita', icon: <IdentificationIcon className="h-5 w-5 mr-1" /> },
                { name: 'building', section: 'building', icon: <WrenchScrewdriverIcon className="h-5 w-5 mr-1" /> },
                { name: 'team', section: 'team', icon: <UserGroupIcon className="h-5 w-5 mr-1" /> },
                { name: 'contract', section: 'contract', icon: <DocumentTextIcon className="h-5 w-5 mr-1" /> },
            ],
        }
    ];

    const handleNavigation = (page, section = '') => {
        setOpenDropdownIndex(null);
        const pathname = `/${page}`;
        const query = section ? { section } : {};
        router.push({ pathname, query }, undefined, { locale: currentLocale });
        setSelectedPage(page);
        setSelectedSection(section);
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getMenuItemName = (itemName) => {
        return translations[itemName];
    };

    return (
        <header className='sticky top-0 w-full shadow-md shadow-red-700 dark:shadow-sky-700 bg-sky-100 text-gray-700 dark:bg-gray-900 dark:text-white z-50'>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-start justify-around">
                        <div className="-mr-2 flex md:hidden">
                            {/* Hamburger menu button */}
                            <button
                                onClick={handleHamburgerClick}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white dark:hover:text-sky-200 hover:bg-sky-200 dark:hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isHamburgerMenuOpen ? 'true' : 'false'}
                                aria-label="Open Hambuger Menu"
                            >
                                {isHamburgerMenuOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
                            </button>
                        </div>
                        {/* Desktop Menu */}
                        <nav className="hidden md:block">
                            <div className="hidden md:flex md:ml-12 md:pr-4 md:space-x-20">
                                {menuSections.map((section, index) => (
                                    <div key={index} className="relative" ref={el => dropdownRefs.current[index] = el}>
                                        {/* Section name and icon */}
                                        <button
                                            type="button"
                                            className="group flex items-center text-base font-bold text-red-700 hover:text-sky-500 dark:text-sky-200 dark:hover:text-sky-700"
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            <span className="flex items-center">
                                                {section.icon && <span className="mr-0">{section.icon}</span>}
                                                {getMenuItemName(section.name)}
                                                {openDropdownIndex === index ? <ChevronDoubleUpIcon className="ml-1 h-5 w-5" /> : <ChevronDoubleDownIcon className="ml-1 h-5 w-5" />}
                                            </span>
                                        </button>
                                        {/* Dropdown Items */}
                                        <div
                                            className={`${openDropdownIndex === index ? 'block' : 'hidden'}
                                            absolute z-10 transform px-2 py-2 w-screen max-w-max sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
                                        >
                                            <div className="rounded-lg shadow-md shadow-black dark:shadow-gray-500 ring-1 ring-red-700 dark:ring-sky-700 overflow-hidden">
                                                <div className="relative bg-sky-100 dark:bg-sky-950 px-3 py-4 flex flex-col align-middle w-full">
                                                    <NavLink
                                                        page={section.path.replace(/^\//, '')}
                                                        onClick={() => {
                                                            handleNavigation(section.path.replace(/^\//, ''));
                                                            toggleDropdown(index);
                                                        }}
                                                    >
                                                        <span className="float-left text-red-700 dark:text-sky-200 border-b border-gray-300 dark:border-gray-700 mb-2 px-3 py-1">
                                                            {translations[section.path.replace(/^\//, '')] || capitalizeFirstLetter(section.path.replace(/^\//, ''))} &rarr;
                                                        </span>
                                                    </NavLink>
                                                    {section.items.map((item, itemIndex) => (
                                                        <NavLink
                                                            key={itemIndex}
                                                            page={section.path.replace(/^\//, '')}
                                                            section={item.section}
                                                            onClick={() => {
                                                                handleNavigation(section.path.replace(/^\//, ''), item.section);
                                                                toggleDropdown(index);
                                                            }}
                                                        >
                                                            <span className="flex items-center px-3 my-0">
                                                                {item.icon && <span className="mr-3">{item.icon}</span>}
                                                                {translations[item.name]}
                                                            </span>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </nav>
                    </div>
                    {/* Right section */}
                    <div className="flex items-center justify-end space-x-4"> {/* This container will align items to the right */}
                        <a
                            href="https://github.com/Lykoskia/next-pages-volker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1 text-xl rounded flex-grow ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-sky-100 text-gray-900'}`} // flex-grow will allow the item to grow
                        >
                            <SiGithub />
                        </a>
                      
                        <div className="relative inline-block text-left flex-grow"> {/* flex-grow will allow the item to grow */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 text-sm font-medium bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-gray-900 dark:text-sky-300 dark:hover:bg-sky-950"
                                id="options-menu"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={handleLanguageDropdownToggle}
                            >
                                <img src={getCurrentFlag()} width="24px" alt="Current Language" />
                            </button>
                            {/* Dropdown panel */}
                            <section
                                className={`${isLanguageDropdownOpen ? 'block' : 'hidden'
                                    } origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-sky-100 ring-1 ring-black ring-opacity-5 dark:bg-sky-950`}
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {/* Language picker */}
                                    {otherLanguages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className='block w-full text-left px-4 py-2 text-sm text-sky-700 hover:bg-sky-300 dark:bg-sky-950 dark:text-sky-300 dark:hover:bg-sky-900'
                                            role="menuitem"
                                            onClick={() => handleLanguageChange(lang.code)}
                                        >
                                            <img src={lang.flag} alt={lang.alt} width="24px" className="inline mr-3" />
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <button
                            className='m-5 text-sky-300 dark:text-sky-700'
                            type="button"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <nav className={`md:hidden ${isHamburgerMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 py-2">
                    {menuSections.map((section, index) => (
                        <Accordion
                            key={index}
                            isOpen={openAccordion === index}
                            onClick={() => handleAccordionClick(index)}
                            closeMenu={closeHamburgerMenu}
                            title={
                                <span className='flex items-center'>
                                    {section.icon}
                                    {translations[section.name] || capitalizeFirstLetter(section.name)}
                                </span>
                            }
                            translations={translations}
                        >
                            {/* Dropdown items for mobile view */}
                            <div className="pt-1 pb-1 flex flex-col">
                                <NavLink
                                    page={section.path.replace(/^\//, '')}
                                    onClick={() => {
                                        handleNavigation(section.path.replace(/^\//, ''));
                                        closeHamburgerMenu();
                                    }}
                                >
                                    <span className="float-left text-red-700 dark:text-sky-200 border-b border-gray-300 dark:border-gray-700 mb-2 px-3 py-1">
                                        {translations[section.path.replace(/^\//, '')] || capitalizeFirstLetter(section.path.replace(/^\//, ''))} &rarr;
                                    </span>
                                </NavLink>
                                {section.items.map((item, itemIndex) => (
                                    <NavLink
                                        key={itemIndex}
                                        page={section.path.replace(/^\//, '')}
                                        section={item.section}
                                        onClick={() => {
                                            handleNavigation(section.path.replace(/^\//, ''), item.section);
                                            closeHamburgerMenu();
                                        }}
                                        className='rounded-md text-base font-bold'
                                    >
                                        <span className="flex items-center px-2 w-full">
                                            {item.icon && <span className="mr-1">{item.icon}</span>}
                                            {translations[item.name] || item.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </Accordion>
                    ))}
                </div>
            </nav>
        </header>
    );
};
