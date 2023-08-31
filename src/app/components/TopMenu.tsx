import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuITem from './TopMenuItem'

export default function TopMenu(){
    return(
        
        <div className={styles.menucontainer}>
            <TopMenuITem title='Booking' pageRef='/booking'/>
            <Image src={'/img/logo.jpg'} className={styles.logoimg}
            alt='logo' width={0} height={0} sizes='100vh'/>
            
        </div>
    )
}