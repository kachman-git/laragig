import { SearchIcon } from 'lucide-react';

const Search = () => {
    return (
        <form action={'/'}>
            <div className="relative m-4 rounded-lg border-2 border-gray-100">
                <div className="absolute top-4 left-3">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    name="search"
                    className="z-0 h-14 w-full rounded-lg pr-20 pl-10 focus:shadow focus:outline-none"
                    placeholder="Search Laravel Gigs..."
                />
                <div className="absolute top-2 right-2">
                    <button type="submit" className="h-10 w-20 rounded-lg bg-red-500 text-white hover:bg-red-600">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Search;
