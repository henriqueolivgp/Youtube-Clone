import Image from "next/image";

export const MenuButton = () => {
  return (
    <>
      <button className="w-10 h-10 flex justify-center items-center hover:bg-neutral-800 rounded-full">
        {/* <Menu size={22} color="white" /> */}
        <Image src='/Icons/menu.svg' width={24} height={24} alt="Menu" />
      </button>
    </>
  );
};
