import Link from 'next/link';

export default function NavLink({ page, section, children, onClick }) {

    const fullPage = {
        pathname: '/[page]',
        query: { page: page }
    }

    const singleSection = {
        pathname: '/[page]',
        query: { page: page, section: section }
    }

    const hrefValue = section ? singleSection : fullPage;

    return (
        <Link href={hrefValue} passHref>
            <button 
                onClick={onClick} 
                className='w-full rounded-md px-3 text-base font-bold text-sky-700 hover:text-sky-100 hover:bg-sky-300 dark:hover:bg-sky-900'
            >
                {children}
            </button>
        </Link>
    );
};
