import Image from "next/image";

export const PosterCard = () => {
  return (
    <div className="bg-white w-[90%] md:w-[344px] h-auto md:h-[640px] rounded-2xl py-6 px-4 md:py-8 md:px-5 flex flex-col gap-3">
      <div className="w-full md:w-[304px] h-auto md:h-[580px] flex flex-col items-center gap-4">
        <Image
          className="rounded-2xl"
          src={"/Profile.jpeg"}
          alt="Profile Pic"
          width={240}
          height={284}
        />
        <div className="flex flex-col items-center gap-6 md:gap-20 text-center">
          <h1 className="font-sans text-2xl md:text-3xl font-black">
            Manav Behera
          </h1>
          <p className="text-[#696a6e] font-sans text-md md:text-lg">
            Software Engineer with a knack for developing innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
