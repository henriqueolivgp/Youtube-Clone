import Image from "next/image";

export const Notifications = () => {
  return (
    <>
      <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-neutral-800 hover:border-neutral-600">
        <Image
          src="/Icons/notifications.svg"
          width={24}
          height={24}
          alt="notifications"
        />
      </button>
    </>
  );
};
