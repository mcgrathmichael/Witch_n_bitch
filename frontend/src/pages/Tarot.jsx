import RandomTarotCards from "../RandomTarotCards";
import Navbar from "../navbar";

export default function Tarot() {
  return (
    <div className="flex flex-col min-h-screen md:flex-none ">
      <div className="z-20 sm:hidden">
        <Navbar />
      </div>
      <div className="flex flex-col  md:justify-center flex-grow pt-12 md:pb-2 p-5 pb-[4.5rem] mx-auto text-bold text-primary">
        <h1 className="card-title"> Welcome to your Daily draw</h1>
        <div className="flex-row md:flex">
          <div className="flex-grow mt-5 overflow-y-auto h-4/5 md:overscroll-y-none">
            <RandomTarotCards />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
