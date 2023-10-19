import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuITem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Link from 'next/link'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)
    return(
        <div className={styles.menucontainer}>
            {
                session ? 
                  <Link className="flex items-center absolute left-0 h-full 
                  px-2 text-cyan-600 text-sm" href='/api/auth/signout'>
                    Sign-Out of {session.user?.name}
                  </Link>
                  : <Link className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm"
                      href='/api/auth/signin'>
                    Sign-In
                    </Link>
            }
            <TopMenuITem title='Booking' pageRef='/booking'/>
            <Link href='/'>
                <Image 
                    src={'/img/logo.jpg'}
                    className={styles.logoimg}
                    alt='logo'
                    width={0}
                    height={0}
                    sizes="100vh"
                />
            </Link>           
        </div>
    )
}