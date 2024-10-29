import Navbar from './navbar';
import Footer from './footer';

export default function Page() {
    return (
        <main className="bg-gray-500 h-screen flex flex-col text-white">
            <Navbar />
            <div className="flex flex-col md:flex-row justify-around items-center flex-grow p-8">

                <div className="bg-black bg-opacity-30 shadow-lg rounded-lg p-6 m-4 w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, I'm</h1>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent bg-clip-text hover-delay">
                        Naveen
                    </h1>
                    <h1 className="text-2xl md:text-3xl font-bold">from Kerala, India</h1>
                </div>

                <div className="bg-black bg-opacity-30 shadow-lg rounded-lg p-6 m-4 w-full md:w-1/4 lg:w-1/4">
                    <img 
                        src="/images/Naveen.jpg"
                        alt="Naveen L S" 
                        className="w-full h-auto rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>

            </div>
            <Footer />
          </main>
    );
}
