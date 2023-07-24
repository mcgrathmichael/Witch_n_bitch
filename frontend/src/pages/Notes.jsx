import Navbar from "../navbar";
import NotesApp from "../NotesApp";

export default function Notespg() {
  return (
    <div className="flex flex-col min-h-screen md:min-full ">
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="flex flex-col  flex-grow p-4 md:pb-0  md:my-2 pb-[4.5rem] mx-auto md:container text-bold text-primary">
        <h1 className="flex title">We've had a lot on our mind lately..</h1>
        <div className="flex-grow overflow-y-auto md:flex md:justify-center md:overscroll-y-none ">
          <NotesApp />
        </div>
      </div>
    </div>
  );
}
