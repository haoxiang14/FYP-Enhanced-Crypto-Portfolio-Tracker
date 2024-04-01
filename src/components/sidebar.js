import { PieChartIcon } from "lucide-react"
import { LineChartIcon } from "lucide-react"
import { PresentationIcon } from "lucide-react"
import { CompassIcon } from "lucide-react"
import Link from "next/link"


export default function Sidebar() {
    return (
        <div className="bg-gray-300 h-screen">
            <div className="p-4">
                <ul className="space-y-4">
                    <li className="border border-black flex items-center px-4 py-2">
                        <PresentationIcon className="h-6 w-6" />
                        <Link href="/dashboard" className="pl-4">Dashboard</Link>
                    </li>
                    <li className="border border-black flex items-center px-4 py-2"> 
                        <LineChartIcon className="h-6 w-6" />
                        <Link href="/analytics" className="pl-4"> Analytics </Link>
                    </li>
                    <li className="border border-black flex items-center px-4 py-2">
                        <PieChartIcon className="h-6 w-6" />
                        <Link href="/portfolio" className="pl-4"> Portfolio </Link>
                    </li>
                    <li className="border border-black flex items-center px-4 py-2">
                        <CompassIcon className="h-6 w-6" />
                        <Link href="/explore" className="pl-4"> Explore </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}