    import Link from 'next/link'
import React from 'react'

    export default function Header() {
    return (
        <div className='pt-[66px] sm:mr-[69px] mr-[20px]'>
            <ul className='flex justify-end gap-9 md:gap-10 lg:gap-11 xl:gap-[52px] font-medium text-xl'>
                <li ><Link href="#">Works</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>

        
        </div>
    )
    }
