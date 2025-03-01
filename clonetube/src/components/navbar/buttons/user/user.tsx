
import Image from "next/image";
export const UserMenu = () => {
  return (
    <>
      <button className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-500">
        <Image
          src="/default/default-avatar.jpg"
          width={32}
          height={32}
          className="object-cover rounded-full"
          alt="bg user image"
        />
      </button>
    </>
  );
};
