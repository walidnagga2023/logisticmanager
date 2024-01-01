import Link from "next/link"
import { ToastContainer } from 'react-toastify'
import { MdFavorite } from 'react-icons/md'
export default function Page(){
    return (
        <div className='w-full bg-gray-50 h-screen px-3 py-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <MdFavorite className="w-4 h-4 mr-2 stroke-current" />
                        Favourite Products
                    </li>
                </ul>
            </div>
            <ToastContainer />
        </div>
    )
}