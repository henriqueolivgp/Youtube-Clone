"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export const VideoFilters = () => {
  const FiltersTitle = [
    "Todos",
    "Music",
    "Programacao de computadores",
    "Startup",
    "Podcasts",
    "Escrivaninhas",
    "Designs graficos",
    "Tripes",
    "Computadores de mesa",
    "Lista de reproducao",
    "Em direto",
    "Bricolage",
    "Desenhos",
    "Setups",
    "Coding",
    "Working",
    "Vistos",
    "Novidades para si",
  ];

  const scrollRef = useRef<HTMLDivElement>(null); // Referência para a div rolável

  const scrollAmount = 100; // Ajuste para a quantidade que a lista deve rolar

  // Set a state for the start of the list
  const [isAtStart, setIsAtStart] = useState(true);
  // Set a state for the end of the list
  const [isAtEnd, setIsAtEnd] = useState(false);

  /*This function checks the current scroll position of the div that contains the filter buttons.
  scrollRef.current: This refers to the div that we are scrolling.
  Destructuring:
  
      scrollLeft: The number of pixels the content has scrolled from the left.
      scrollWidth: The total width of the scrollable content.
      clientWidth: The visible width of the div (excluding the part that is scrolled).
  
  setIsAtStart(scrollLeft === 0);
  
      If scrollLeft is 0, it means we are at the beginning, so isAtStart is set to true.
  
  setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  
      If the visible width (clientWidth) + the amount scrolled (scrollLeft) reaches or exceeds the total scrollable width (scrollWidth), then we are at the end, so isAtEnd is set to true. */
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  /* useEffect is used to track the scroll position and update isAtStart and isAtEnd accordingly.
const scrollElement = scrollRef.current;

    Retrieves the div that contains the filter buttons.

if (!scrollElement) return;

    If scrollElement is null, we exit the function (prevents errors).

scrollElement.addEventListener("scroll", checkScrollPosition);

    Attaches an event listener that calls checkScrollPosition whenever the user scrolls the list.

checkScrollPosition();

    Calls the function immediately on first render to set the correct button visibility.

Cleanup function:

return () => scrollElement.removeEventListener("scroll", checkScrollPosition);

    Removes the event listener when the component unmounts to prevent memory leaks.
  */
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // Verifica posição inicial

    return () =>
      scrollElement.removeEventListener("scroll", checkScrollPosition);
  }, []);

  /* This function moves the list to the left when clicking the left arrow button.
scrollRef.current.scrollLeft -= scrollAmount;

    Decreases scrollLeft by scrollAmount (e.g., 200px), effectively moving the list left.

If we are already at the start, this function won't do anything. */
  const goLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

    /* This function moves the list to the right when clicking the right arrow button.
scrollRef.current.scrollLeft += scrollAmount;

    Increases scrollLeft by scrollAmount (e.g., 200px), effectively moving the list right.
*/
  const goRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative sm:ml-64 p-2 mt-14 w-[calc(100%-16rem)] flex items-center bg-neutral-900 text-white">
      {/* If doesn't in start of list button doesn't appears */}
      {!isAtStart && (
        <button
          className="absolute left-0 z-20 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center"
          onClick={goLeft}
        >
          <ChevronLeft />
        </button>
      )}

      {/* Filter Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto custom-scrollbar whitespace-nowrap space-x-3 scroll-smooth"
      >
        {FiltersTitle.map((tag) => (
          <button
            key={tag}
            className="p-2 bg-neutral-800 text-sm rounded-md hover:bg-neutral-700"
          >
            {tag}
          </button>
        ))}
      </div>

            {/* If doesn't in the end of list button doesn't appears */}
      {!isAtEnd && (
        <button
          className="absolute right-0 z-20 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center"
          onClick={goRight}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};
