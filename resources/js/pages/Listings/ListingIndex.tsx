import ListingItems from '@/components/ListingItems';
import Pagination from '@/components/paginate';
import { Listings, PaginatedResponse } from '@/types';

export default function ListingIndex({ listings }: { listings: PaginatedResponse<Listings> }) {
    if (listings.data.length === 0) {
        return <h2 className={'text-center text-2xl'}>No Listing Found</h2>;
    }

    return (
        <div className="mx-4 gap-4 space-y-4 md:space-y-0 lg:grid lg:grid-cols-2">
            {listings.data.map((listing) => (
                <ListingItems listing={listing} key={listing.id} />
            ))}

            <Pagination links={listings.links} />
        </div>
    );
}
