import { VideoFilters } from "@/components/filters/filters";

export default function Home() {
  return (
    <>
      <VideoFilters />
      <section className="p-4 sm:ml-64 text-white">
        <section className="p-4 border-2 text-white border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          Hello Container
        </section>
      </section>
    </>
  );
}
