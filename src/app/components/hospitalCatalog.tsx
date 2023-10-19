'use client'
import Link from "next/link";

import { VaccineCard } from "./VaccineCard";

export default async function HospitalCatalog({ hosJson }: {hosJson: Object}) {
  const hospitalJsonReady = await hosJson
  return (
    <div style={{ margin: "20px", display: "flex",
        flexDirection: "row", alignContent: "space-around",
        justifyContent: "space-around", flexWrap: "wrap", "padding": "10px"}}>
          {
            hospitalJsonReady.data.map((hospitalItem: Object) => (
              <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                <VaccineCard hospitalName={hospitalItem.name} imageUrl={hospitalItem.picture} hospitalMap={undefined} onScoreChange={undefined}></VaccineCard>
              </Link>  
            ))
          }
        </div>
 
  )
}