import Hero from '@/components/Hero';
import Search from '@/components/Search';
import AppLayout from '@/layouts/app-layout';
import ListingIndex from '@/pages/Listings/ListingIndex';
import { Listings, PaginatedResponse } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({ listings }: { listings: PaginatedResponse<Listings> }) {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <Hero />
            <Search />
            <ListingIndex listings={listings} />
        </AppLayout>
    );
}
