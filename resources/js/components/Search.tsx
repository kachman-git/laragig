const Search = () => {
    return (
        <div className="relative m-4 rounded-lg border-2 border-gray-100">
            <div className="absolute top-4 left-3">
                <i className="fa fa-search z-20 text-gray-400 hover:text-gray-500"></i>
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
    );
};

export default Search;
