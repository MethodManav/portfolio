import { ContentBox } from "./ui/content";
import { Navbar } from "./ui/navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <ContentBox />
    </div>
  );
}
