import { MdShowChart } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="border-t-[1px] py-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">

                    {/* First Column: Logo */}
                    <div className="flex flex-col items-start col-span-2 sm:col-span-3 md:col-span-2">
                        <div className="text-2xl font-semibold flex items-center">
                       
                            <MdShowChart className='text-3xl text-blue-500' />
                            <a href="/" className=''> EXPLODING TOPICS </a>
                       
                        </div>
                    </div>

                    {/* Second Column: Explore Links */}
                    <div className="flex flex-col">

                        <h3 className="text-xl font-semibold mb-4"> Explore </h3>
                        <ul className="space-y-2">
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Add a Topic   </a> </li>
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Newsletter    </a> </li>
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Blog          </a> </li>
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Methadology   </a> </li>
                        </ul>

                    </div>

                    {/* Third Column: Quick Links */}
                    <div className="flex flex-col ">

                        <h3 className="text-xl font-semibold mb-4"> Company </h3>
                        <ul className="space-y-2">
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Home     </a> </li>
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> About    </a> </li>
                            <li> <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300"> Contact  </a> </li>
                        </ul>

                    </div>

                    {/* Fourth Column: About or Paragraph */}
                    <div className="flex flex-col">

                        <h3 className="text-xl font-semibold mb-4"> Connect </h3>
                        <p className="text-sm text-gray-600"> 548 Market St. Suite 95149 San Francisco, California </p>

                    </div>
                </div>





                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 mt-5">

                    <div className="flex flex-col items-start sm:col-span-3 md:col-span-2">
                    </div>

                    <div className="flex flex-col col-span-2">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300 mr-4">Privacy Policy</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-black hover:underline transition-all duration-300">Term & Service</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <a href="#" className="text-sm text-gray-600 mr-4 hover:text-black hover:underline transition-all duration-300"> © 2024  Exploding Topics</a>
                    </div>

                </div>


            </div>
        </footer>
    );
}
