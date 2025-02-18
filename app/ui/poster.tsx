import Image from "next/image";

export const PosterCard = () => {
  return (
    <div className="bg-white w-[344px] h-[640px] rounded-2xl py-8 px-5 flex flex-col gap-3">
      <div className="w-[304px] h-[580px] flex flex-col items-center gap-4">
        <Image
          className="rounded-2xl"
          src={"/Profile.jpeg"}
          alt="Profile Pic"
          width={240}
          height={284}
        />
        <div className="flex flex-col items-center gap-20 text-center ">
          <h1 className="font-sans text-3xl font-black">Manav Behera </h1>
          <p className="text-[#696a6e] font-sans text-lg">
            Software Engineer with a knack for developing innovative solutions.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
