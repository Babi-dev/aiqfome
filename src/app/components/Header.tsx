import Image from "next/image";

const Header = ({ visibilitySearch = false }: { visibilitySearch?: boolean }) => {
  return (
    <header className="flex flex-col bg-custom-purple p-4">
      <div className="flex items-center justify-between w-full">
        <Image 
          className="mr-2" 
          src="/images/logo.png" 
          alt="Logo" 
          width={32} 
          height={32} 
        />
        <div className="flex items-center">
          <Image 
            className="mr-2"
            src="/icons/location.svg" 
            alt="Location" 
            width={24} 
            height={24} 
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm text-purple-200">
              entregando em
            </span>

            <div className="flex items-center">
              <span className="font-bold text-base text-white">
                Rua Mandaguari, 198
              </span>
              <Image 
                className="ml-2"
                src="/icons/arrow_left.svg" 
                alt="Arrow" 
                width={16} 
                height={16} 
              />
            </div>
          </div>
        </div>
        <Image 
          className="mr-2"
          src="/icons/profile.svg" 
          alt="Profile" 
          width={24} 
          height={24} 
        />
      </div>
      {visibilitySearch && (
        <div className="relative w-full mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image
              className="w-5 h-5"
              src="/icons/search.svg"
              alt="Search"
              width={32}
              height={32}
            />
          </span>
          <input
            type="search"
            placeholder="busque pela loja ou culinária"
            className="w-full h-12 pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>
      )}
    </header>
  );
}

export { Header };
