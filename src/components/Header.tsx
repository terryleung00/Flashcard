import { Outlet, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

	return (
        <>
            <nav className='flex justify-center bg-brown-700 p-4'>
                <a href='/' className={location.pathname=='/' ? 'mx-4 text-lg font-bold text-orange-500' : 'mx-4 text-lg font-bold text-gray-400'}>
                    Home
                </a>
                <a href='/flashcards' className={location.pathname.startsWith('/flashcards') ? 'mx-4 text-lg font-bold text-orange-500' : 'mx-4 text-lg font-bold text-gray-400'}>
                    My Flashcards
                </a>
            </nav>
            <Outlet />
        </>
	);
};

export default Header;
