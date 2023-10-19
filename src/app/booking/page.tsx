"use client";
import { useEffect, useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSession } from "next-auth/react";
import getUserProfile from "../lib/getUserProfile";

export default function Booking() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {
    if (session) {
      getUserProfile(session?.user.token).then((profile) => setProfile(profile.data));
    }
  }, [])
  return (
    <main className="w-[100%] flex flex-col items-center space-y-10 ">
      <div className="text-xl font-medium mt-10">
        แบบฟอร์มลงทะเบียนการจองวัคซีน
      </div>
      <div className="text-md text-left text-gray-600">
      <div>Name: {profile?.name}</div>
        <div>Email: {profile?.email}</div>
        <div>Tel: {profile?.tel}</div>
        <div>Member Since: {profile?.createdAt ? new Date(profile?.createdAt).toString() : null}</div>
        
        <div className="mt-4">ชื่อ</div>
        <TextField id="first-name" label="" variant="outlined" fullWidth />
        <div className="mt-4">นามสกุล</div>
        <TextField id="last-name" label="" variant="outlined" fullWidth />
        <div className="mt-4">รหัสประจำตัวประชาชน</div>
        <TextField id="national-id" label="" variant="outlined" fullWidth />
        <div className="mt-4">สถานที่รับวัคซีน</div>
        <Select
          fullWidth
          name="location"
          id="location"
          className="h-[3.5em] w-[400px]"
        >
          <MenuItem value="BKK">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="CNX">Rajavithi Hospital</MenuItem>
          <MenuItem value="HKT">Thammasat University Hospital</MenuItem>
        </Select>
        <div className="mt-6">วันที่ต้องการรับวัคซีน</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white w-[400px]" />
        </LocalizationProvider>
      </div>
      <button className="block rounded-md bg-sky-400 hover:bg-sky-600 px-3 py-2 text-white shadow-sm w-[400px]">
        ลงทะเบียน
      </button>
    </main>
  );
}