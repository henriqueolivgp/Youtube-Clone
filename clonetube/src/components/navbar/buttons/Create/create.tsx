import Image from "next/image";

export const Create = () => {
  return (
    <>
      <button className="w-[86px] h-9 flex justify-center items-center gap-1 bg-neutral-800 rounded-full">
        <Image src="/Icons/add.svg" width={26} height={26} alt="Plus" />
        <span className="text-md text-neutral-300">Criar</span>
      </button>
      {/* <section>

      </section> */}
    </>
  );
};
