import { MenuButton } from "./buttons/menu/menu";
import { Logo } from "./logo/logo";
import { Search } from "./search/search";
import { Mic } from "./buttons/mic/mic";
import { Create } from "./buttons/Create/create";
import { Notifications } from "./buttons/notifications/notifications";
import { UserMenu } from "./buttons/user/user";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b flex justify-center items-center h-14 bg-white dark:bg-neutral-900">
        <section className="flex gap-6 ml-2">
          <MenuButton />
          <Logo />
        </section>
        <section className=" flex justify-center items-center gap-4 w-full">
          <Search />
          <Mic />
        </section>
        <section className="flex justify-center items-center gap-4 mr-4">
          <Create />
          <Notifications />
          <UserMenu />
        </section>
      </nav>
    </>
  );
};
