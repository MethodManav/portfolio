import { PosterCard } from "./poster";

export const ContentBox = () => {
  return (
    <main className="flex flex-col md:flex-row px-5 md:px-10 items-center justify-center w-full">
      <div className="px-5 md:px-10 flex flex-col md:flex-row">
        <PosterCard />
      </div>
    </main>
  );
};
