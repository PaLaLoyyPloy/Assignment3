'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

export default function Banner (){
    const covers = ['/img/Vaccines.jpg', '/img/Vaccines2.jpg','/img/Vaccines3.jpg','/img/Vaccines4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter();
    const {data:session} = useSession()
    console.log(session)
    return(
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>ประชาสัมพันธ์การให้บริการฉีดวัคซีน </h1>
                <h1 className='text-4xl font-medium'>Covid-19</h1>
                <h3 className='text-xl font-serif'>ในวันที่ 24-26 สิงหาคม 2566 เวลา 09.00 น. - 16.00 น.</h3>
                <h3 className='text-xl font-serif'>ณ อาคาร A รพ.จุฬาลงกรณ์</h3>
            </div>
            {
                session ? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-500 text-xl">
                Hello {session.user?.name} </div> : null
            }
            <button className="bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent"
            onClick={(e) => { e.stopPropagation(); router.push('/hospital')}}>
                Select Your Hospital
            </button>
        </div>
    );
}