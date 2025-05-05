import Layout from '@/layouts/app-layout';
import { Listings } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function ShowListing({ listing }: { listing: Listings }) {
    console.log(listing);
    return (
        <Layout>
            <Head title="ShowListing" />
            <Link prefetch href="/" className="mb-4 ml-4 flex items-center gap-4">
                <ArrowLeft /> Back
            </Link>
            <div className="mx-auto max-w-lg rounded border border-gray-600 p-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <img className="mr-6 hidden w-48 md:block" src={listing.logo ? `/${listing.logo}` : '/images/no-image.png'} alt="logo" />

                    <h3 className="mb-2 text-2xl">{listing.title}</h3>
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

                    <div className="my-4 flex items-center gap-3 text-lg">
                        <MapPin /> {listing.location}
                    </div>
                    <div className="mb-6 w-full border border-gray-200"></div>
                    <div>
                        <h3 className="mb-4 text-3xl font-bold">Job Description</h3>
                        <div className="space-y-6 text-lg">
                            {listing.description}

                            <Link
                                prefetch
                                href={`mailto:${listing.email}`}
                                className="bg-laravel mt-6 block rounded-xl py-2 text-white hover:opacity-80"
                            >
                                <i className="fa-solid fa-envelope"></i>
                                Contact Employer
                            </Link>

                            <Link
                                prefetch
                                href={listing.website}
                                target="_blank"
                                className="block rounded-xl bg-black py-2 text-white hover:opacity-80"
                            >
                                <i className="fa-solid fa-globe"></i>
                                Visit Website
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
