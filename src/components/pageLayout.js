import Navbar from './navbar'
import Sidebar from './sidebar'

export default function pageLayout ({children}) {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-5">
                <div className="col-span-1 min-h-screen bg-gray-300">
                    <Sidebar />
                </div>
                <div className="col-span-4">
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
          </div>
    )
}