import styles from './vaccinecard.module.css'
import Image from 'next/image'
export default function Banner (){
    return(
        <div className={styles.card}>

            <div className={styles.cardText}>
                <h4>วัคซีน (Vaccine) </h4>
                <p style={{paddingLeft:20}}>คือสารชนิดหนึ่งที่ฉีดเข้าไป</p>
                ในร่างกาย เพื่อสร้างภูมิคุ้มกันโรคต่างๆ ส่วนใหญ่ทำมาจากเชื้อโรค แบ่งเป็น 2 ประเภท คือ
                <p>1. ทำจากเชื้อโรคที่ตายแล้ว</p>
                มีสารของเชื้อโรคมาฉีดเข้าตัวเรา
                <p>2. ทำจากเชื้อโรคที่อ่อนแอ</p>
                ทำให้มันสลบพิษจะได้ไม่รุนแรง
                <p style={{paddingLeft:20}}>เมื่อฉีดเข้าไปในร่างกายคนเรา </p>
                ร่างกายคนเราก็จะสร้างภูมิคุ้มกันของโรคนั้นๆ
            </div>
        </div>
    );
}