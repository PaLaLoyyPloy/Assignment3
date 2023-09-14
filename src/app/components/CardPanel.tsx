"use client";
import { useReducer } from "react";
import { VaccineCard } from "./VaccineCard";
export function CardPanel() {

  const scoreReducer = (
    hospitalMap: Map<string, number>,
    action: { type: string; hospital: string; score: number }
  ) => {
    switch (action.type) {
      case "rating": {
        hospitalMap.set(action.hospital, action.score);
        return new Map(hospitalMap);
      }
      case "remove": {
        hospitalMap.delete(action.hospital);
        return new Map(hospitalMap);
      }
      default:
        return hospitalMap;
    }
  };

  const [hospitalMap, dispatchScoreHospital] = useReducer(
    scoreReducer,
    new Map()
  );

 
  return (
    <div>
      <div className="flex justify-around m-[20px]">
        <VaccineCard
          hospitalName="Chulalongkorn Hospital"
          imageUrl="/img/chula.jpg"
       
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
        <VaccineCard
          hospitalName="Rajavithi Hospital"
          imageUrl="/img/rajavithi.jpg"
        
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
        <VaccineCard
          hospitalName="Thammasat University Hospital"
          imageUrl="/img/thammasat.jpg"
          
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
      </div>
   
      {Array.from(hospitalMap.keys()).map((hospital) => (
        <div
          key={hospital}
          onClick={() =>
            dispatchScoreHospital({
              type: "remove",
              hospital,
              score: 0,
            })
          }
        >
          {hospital} {hospitalMap.get(hospital)}
        </div>
      ))}
    </div>
  );
}