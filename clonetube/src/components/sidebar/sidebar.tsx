"use client";
import {
  Home,
  HomeOutlined,
  SubscriptionsOutlined,
  Subscriptions,
  ChevronRight,
  RestoreOutlined,
  Restore,
  PlaylistPlayOutlined,
  PlaylistPlay,
  SmartDisplayOutlined,
  SmartDisplay,
  QueryBuilderOutlined,
  QueryBuilder,
  ThumbUpOutlined,
  ThumbUp,
} from "@mui/icons-material";
import { LiSideBar } from "./li-sidebar/li-sidebar";
import { useState } from "react";
import { Shorts, ShortsFilled } from "@/utils/yt-icons/shorts";
import { UlSideBar } from "./ul-sidebar/ul-sidebar";

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setSelectedItem(name);
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen text-white pt-20 transition-transform -translate-x-full sm:translate-x-0 dark:bg-neutral-900">
      <UlSideBar className="w-full p-2 top-1.5">
        {/* Home */}
        <LiSideBar
          to="/"
          isSelected={selectedItem === "Home"}
          onClick={() => handleSelect("Home")}
          Icon={selectedItem === "Home" ? Home : HomeOutlined}
          name="Home"
        />

        {/* Shorts */}
        <LiSideBar
          to="/shorts"
          isSelected={selectedItem === "Shorts"}
          onClick={() => handleSelect("Shorts")}
          Icon={selectedItem === "Shorts" ? ShortsFilled : Shorts}
          name="Shorts"
        />

        {/* Outro exemplo para mostrar que funciona */}
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "Subscriptions"}
          onClick={() => handleSelect("Subscriptions")}
          Icon={
            selectedItem === "Subscriptions"
              ? Subscriptions
              : SubscriptionsOutlined
          }
          name="Subscriptions"
        />
        <hr className="border-0.5 border-neutral-700" />
      </UlSideBar>
      <UlSideBar className="w-full p-2 pt-2">
        <LiSideBar
          classToLink="gap-1"
          classToName="text-md"
          to="/shorts"
          isSelected={selectedItem === "Eu"}
          onClick={() => handleSelect("Eu")}
          name="Eu"
          Icon2={selectedItem === "Eu" ? ChevronRight : ChevronRight}
        />
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "History"}
          onClick={() => handleSelect("History")}
          Icon={selectedItem === "History" ? Restore : RestoreOutlined}
          name="History"
        />
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "Playlists"}
          onClick={() => handleSelect("Playlists")}
          Icon={
            selectedItem === "Playlists" ? PlaylistPlay : PlaylistPlayOutlined
          }
          name="Playlists"
        />
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "Your videos"}
          onClick={() => handleSelect("Your videos")}
          Icon={
            selectedItem === "Your videos" ? SmartDisplay : SmartDisplayOutlined
          }
          name="Your videos"
        />
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "See Later"}
          onClick={() => handleSelect("See Later")}
          Icon={
            selectedItem === "See Later" ? QueryBuilder : QueryBuilderOutlined
          }
          name="See Later"
        />
        <LiSideBar
          to="/subscriptions"
          isSelected={selectedItem === "Videos you liked"}
          onClick={() => handleSelect("Videos you liked")}
          Icon={selectedItem === "Videos you liked" ? ThumbUp : ThumbUpOutlined}
          name="Videos you liked"
        />
        <hr className="border-0.5 border-neutral-700" />
      </UlSideBar>

      {/* Footer fixado ao fundo */}
      <section className="absolute flex items-center justify-center bottom-0 w-full p-2 text-left">
        <a className="text-xs">© 2025 Henrique Oliveira</a>
      </section>
    </aside>
  );
};
