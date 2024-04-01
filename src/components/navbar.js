import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { CornerDownLeft } from "lucide-react"
import CustomButton from "./customButton"

export default function Navbar() {
    return (
        <div className="flex py-4 px-4 bg-gray-300 border border-black items-center justify-between">
            <div className="flex items-center">
                <h1 className="font-bold text-2xl"> BlockFolio </h1>
                <div className="relative ml-44">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input className="pl-10 w-[500px] rounded-xl" placeholder="Search by Address" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <CornerDownLeft className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>
            <CustomButton/>
            {/* <ConnectButton/> */}
        </div>
    )
}