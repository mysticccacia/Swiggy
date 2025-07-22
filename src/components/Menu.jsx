import React , {useRef} from "react";
import ImageGrids from "../Utils/ImageGrids";
import ItemCard from "../Assets/ItemCard";
import ScrollButtons from "../Assets/ScrollButtons";

const Menu = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-full relative px-[10%] py-10 flex flex-col justify-center h-screen max-h-screen">
      <div className="flex items-center justify-end"><ScrollButtons scrollRef={scrollRef} /></div>
      <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
        <div
          className="grid grid-rows-2 auto-cols-max gap-4 min-w-fit"
          style={{ gridAutoFlow: "column", height: "460px" }} // adjust height as needed
        >
          {ImageGrids.map((item) => (
            <ItemCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

