import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner (){
    return(
        <div className={styles.banner}>
            <Image src={'/img/Vaccines.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>ประชาสัมพันธ์การให้บริการฉีดวัคซีน </h1>
                <h1 className='text-4xl font-medium'>Covid-19</h1>
                <h3 className='text-xl font-serif'>ในวันที่ 24-26 สิงหาคม 2566 เวลา 09.00 น. - 16.00 น.</h3>
                <h3 className='text-xl font-serif'>ณ อาคาร A รพ.จุฬาลงกรณ์</h3>
            </div>
        </div>
    );
}