import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Settings } from 'lucide-react';

export function AppHeader() {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    // const getInitials = useInitials();
    return (
        <nav className="mb-4 flex items-center justify-between">
            <Link prefetch href="/">
                <img className="w-24" src={'/images/logo.png'} alt="logo" />
            </Link>
            <ul className="mr-6 flex space-x-6 text-lg">
                {auth.user ? (
                    <div className={'flex items-center gap-4 pt-4'}>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <span className="hover:text-laravel cursor-pointer font-bold uppercase">Welcome {auth.user.name}</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <li>
                            <Link prefetch href={route('manage-listings')} className="hover:text-laravel flex items-center gap-2">
                                <Settings /> Manage Listings
                            </Link>
                        </li>
                    </div>
                ) : (
                    <>
                        <li>
                            <Link prefetch href={route('register')} className="hover:text-laravel">
                                <i className="fa-solid fa-user-plus"></i> Register
                            </Link>
                        </li>
                        <li>
                            <Link prefetch href={route('login')} className="hover:text-laravel">
                                <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
