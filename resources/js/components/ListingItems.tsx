import { Listings } from '@/types';
import { Link } from '@inertiajs/react';
import { MapPin } from 'lucide-react';

const ListingItems = ({ listing }: { listing: Listings }) => {
    return (
        <div className="rounded border border-gray-200 p-6 dark:border-gray-800">
            <div className="flex">
                <img className="mr-6 hidden w-48 md:block" src={listing.logo ? `storage/${listing.logo}` : 'images/no-image.png'} alt="logo" />
                <div>
                    <h3 className="text-2xl">
                        <Link prefetch href={route('listings.show', [listing])}>
                            {listing.title}
                        </Link>
                    </h3>
                    <div className="mb-4 text-xl font-bold">{listing.company}</div>
                    <ul className="flex">
                        {listing.tags.split(',').map((tag) => (
                            <li
                                key={tag}
                                className="bg:black mr-2 flex items-center justify-center rounded-xl px-3 py-1 text-xs text-white dark:bg-white dark:text-black"
                            >
                                <Link href={`/?tag=${tag}`} name={tag} type={'submit'}>
                                    {tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-4 text-lg">
                        <MapPin /> {listing.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingItems;
