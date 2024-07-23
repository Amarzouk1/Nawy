"use client";
import Hero from "@/components/hero";
import Apartments from "@/components/apartments";
import { images } from "@/data/home";
import { useEffect, useState } from "react";
import { apartment, apartmentsReq } from "@/types";
import { apartmentsDummy } from "@/data/apartments";

export default function Home() {
  const [apartments, setApartments] = useState<apartment[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/apartments")
      .then((res) => res.json())
      .then((res) => { setApartments(res.data); console.log(res); })
      .catch((err) => setApartments(apartmentsDummy));
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero images={images} />
      <Apartments apartments={apartments} />
    </main>
  );
}
