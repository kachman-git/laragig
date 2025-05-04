import { type BreadcrumbItem, type NavItem, SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    // const getInitials = useInitials();
    return (
        <nav className="mb-4 flex items-center justify-between">
            <Link prefetch href="/">
                <img className="w-24" src={'images/logo.png'} alt="logo" />
            </Link>
            <ul className="mr-6 flex space-x-6 text-lg">
                {auth.user ? (
                    <>
                        <li>
                            <span className="font-bold uppercase">Welcome {auth.user.name}</span>
                        </li>
                        <li>
                            <a href="/listings/manage" className="hover:text-laravel">
                                <i className="fa-solid fa-gear"></i> Manage Listings
                            </a>
                        </li>
                        <li>
                            <Link className="inline" method="post" href={route('logout')}>
                                <button type="submit">
                                    <i className="fa-solid fa-door-closed"></i> Logout
                                </button>
                            </Link>
                        </li>
                    </>
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
