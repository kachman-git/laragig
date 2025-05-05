import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <footer className="bg-laravel fixed bottom-0 left-0 flex h-24 w-full items-center justify-start font-bold text-white opacity-90 md:justify-center">
            <p className="ml-2">Copyright &copy; 2022, All Rights reserved</p>

            <Link prefetch href={route('listings.create')} className="absolute top-1/3 right-10 bg-black px-5 py-2 text-white">
                Post Job
            </Link>
        </footer>
    );
};

export default Footer;
