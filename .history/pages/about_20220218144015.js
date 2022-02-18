import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <div className="bg-primary-darken text-bold text-white inline-flex items-center p-4 rounded shadow-md">Not Pretty Code 😵</div>
      <button className="btn btn-green mr-4">Button</button>
      <p className="text-xl md:text-2xl text-gray-500"> Welcome to my Blog </p>
    </div>
  );
}