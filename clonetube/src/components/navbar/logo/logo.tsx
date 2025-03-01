import Link from "next/link";
import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Link href="/" className="flex gap-0.5 items-center">
        <Image src="/youtube.png" width={28} height={500} alt="Youtube Logo" />
        <section>
          <span className="text-white font-semibold tracking-tighter text-xl relative">
            CloneTube
          </span>
          <span className="text-gray-400 text-[10px] absolute ml-0.5">PT</span>
        </section>
      </Link>
    </>
  );
};
