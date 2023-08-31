import Image from 'next/image'
import styles from './page.module.css'
import Banner from './components/Banner'
import VaccineCard from './components/VaccineCard'

export default function Home() {
  return (
    <main >
      <Banner/>
      <div style={{margin:"20px", display:"flex",flexDirection:"row",
      flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
        <VaccineCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <VaccineCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <VaccineCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}