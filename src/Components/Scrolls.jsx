import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "./Image";

function Scroll() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    let fac = new FastAverageColor();
    let images = document.querySelectorAll("img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            console.log((await fac.getColorAsync(entry.target)).hex);
            setColor((await fac.getColorAsync(entry.target)).hex);
          }
        });
      },
      { threshold: 1 }
    );
    images.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-screen  h-screen flex justify-center items-center "
      style={{ backgroundColor: color, transition: "500ms" }}
    >
      <ScrollContainer horizontal={true} hideScrollbars={false} className="  overflow-x-scroll flex gap-7">
        <Image imageUrl="/pxfuel (5).jpg" />
        <Image imageUrl="/pxfuel (6).jpg" />
        <Image imageUrl="/pxfuel (7).jpg" />
        <Image imageUrl="/pxfuel (2).jpg" />
        <Image imageUrl="/pxfuel (10).jpg" />
        <Image imageUrl="/pxfuel (3).jpg" />
        <Image imageUrl="/pxfuel (4).jpg" />
        <Image imageUrl="/pxfuel (8).jpg" />
        <Image imageUrl="/pxfuel (9).jpg" />
        <Image imageUrl="/pxfuel (11).jpg" />
        <Image imageUrl="/1699818051484.jpeg" />
        <Image imageUrl="/1699818090795.jpeg" />
        <Image imageUrl="/1699818113813.jpeg" />
        <Image imageUrl="/1699818051484.jpeg" />
        <Image imageUrl="/1699818149173.jpeg" />
        <Image imageUrl="/igor-omilaev-M7iMdnG4R_g-unsplash.jpg" />
      </ScrollContainer>
    </div>
  );
}

export default Scroll;
