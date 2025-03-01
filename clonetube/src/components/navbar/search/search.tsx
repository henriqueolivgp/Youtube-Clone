import Image from 'next/image'

export const Search = () => {
  return (
    <>
      <section className="relative flex r w-1/3">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full h-10 z-20 text-md font-medium text-gray-300 bg-neutral-900 border-1 border-r-0 border-neutral-500  rounded-l-full "
          placeholder="Pesquisa"
          required
        />
        <button
          type="submit"
          className="relative z-20 flex inset-y-0 right-0 p-2.5 w-16 h-10 text-sm font-medium justify-center items-center border-1 border-l-0 border-neutral-500 text-white bg-neutral-800  rounded-r-full"
        >
          {/* <Search size={20} /> */}
          <Image
            alt="Search"
            src="/Icons/search.svg"
            width={25}
            height={25}
            className="fill-white"
          />
          <span className="sr-only">Search</span>
        </button>
      </section>
    </>
  );
};
