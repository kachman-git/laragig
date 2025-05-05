import { Links } from '@/types';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }: { links: Links[] }) {
    function getClassName(active: boolean) {
        if (active) {
            return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-laravel focus:border-primary focus:text-primary bg-laravel text-white';
        } else {
            return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-laravel focus:border-primary focus:text-primary';
        }
    }

    return (
        links.length > 3 && (
            <div className="mx-auto mb-4">
                <div className="mt-8 flex flex-wrap">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <div key={key} className="mr-1 mb-1 rounded border px-4 py-3 text-sm leading-4 text-gray-400">
                                {link.label}
                            </div>
                        ) : (
                            <Link key={key} className={getClassName(link.active)} href={link.url}>
                                {link.label}
                            </Link>
                        ),
                    )}
                </div>
            </div>
        )
    );
}
