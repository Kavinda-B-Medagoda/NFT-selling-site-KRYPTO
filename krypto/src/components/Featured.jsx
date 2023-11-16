import img1 from "../assets/image 5.png";
import img2 from "../assets/image 6.png";
import img3 from "../assets/image 7.png";
import img4 from "../assets/image 8.png";

const stats = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

export default function Featured() {
  return (
    <div className="py-1 sm:py-10 lg:py-20 max-w-[1440px] mx-auto">
      <h2 className=" text-[#88D0D1]  font-semibold text-xl text-center my-10">
        FEATURED ON
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:bg-[#312C5A] rounded-lg lg:bg-opacity-50">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 lg:flex lg:items-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <img
                className=" hover:scale-125 duration-300"
                src={stat.img}
                alt=""
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
