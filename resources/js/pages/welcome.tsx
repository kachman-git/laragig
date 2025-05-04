import Hero from '@/components/Hero';
import Listing from '@/components/Listing';
import Search from '@/components/Search';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Hero />
            <Search />
            <Listing />
        </AppLayout>
    );
}
