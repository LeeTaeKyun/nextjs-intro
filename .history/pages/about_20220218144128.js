import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <div className="bg-primary-darken text-bold text-white inline-flex items-center p-4 rounded shadow-md">Not Pretty Code 😵</div>
      <button className="btn btn-green mr-4">Button</button>
      <p className="text-xl md:text-2xl text-gray-500"> Welcome to my Blog </p>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <Image
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                        width={50}
                        height={50}
                      />

                      <p className="text-gray-600 text-xs md:text-sm">
                        1 MIN READ
                      </p>
                    </div>
                  </div>
    </div>
  );
}