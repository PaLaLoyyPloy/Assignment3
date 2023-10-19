import HospitalCatalog from "@/app/components/hospitalCatalog";
import getHospitals from "@/app/lib/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Hospital() {
  const hospital = getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select your hospital</h1>
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog hosJson={hospital}/>
      </Suspense>
    </main>
  );
}