import RandomTarotCards from "../RandomTarotCards";

export default function Tarot() {
  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-accent text-center md:text-left mb-4">
        Welcome to your Daily draw
      </h1>
      <div className="md:flex md:justify-center">
        <RandomTarotCards />
      </div>
    </div>
  );
}
