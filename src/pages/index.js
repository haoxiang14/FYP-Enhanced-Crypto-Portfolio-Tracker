import Link from "next/link";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen mx-4 my-4 px-4 py-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl"> BlockFolio </h1>
        <Button className="rounded-2xl px-8"> 
            <Link href="/dashboard">
                Enter the App 
            </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 h-96 my-16">
        <div className="col-span-1 flex justify-center items-center">
          <Player className="w-[400px] h-[400px] pb-8" autoplay loop src="https://lottie.host/d0a08e1b-59b6-4d19-954f-8eacf4216b4d/E2dJL6rhwi.json">
            
          </Player>
        </div>
        <div className="col-span-1 bg-white rounded-xl px-8 py-8">
          <h1 className="text-4xl pb-16"> Tracking Your Crypto Portfolio Makes Easy </h1>
          <p className="pb-32"> Track your portfolio in real-time and get the latest price of your assets </p>
          <div>
            <Button className="rounded-2xl px-8"> 
                <Link href="/dashboard">
                  Enter the App 
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}