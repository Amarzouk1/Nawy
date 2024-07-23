"use client";
import Hero from "@/components/apartmentHero";
import { apartmentsDummy } from "@/data/apartments";
import { images } from "@/data/home";
import { apartment } from "@/types";
import { useEffect, useState } from "react";


interface ApartmentsProps {
  params: {
    id: string;
  }
}

export default function ApartmentsPage({ params }: ApartmentsProps) {
  const [apartment, setApartment] = useState<apartment>();

  useEffect(() => {
    fetch(`http://localhost:3001/apartments/${params.id}`)
      .then((res) => res.json())
      .then((data) => { setApartment(data); console.log(data); })
      .catch(() => setApartment(apartmentsDummy[0]));
  }, [params.id]);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero images={apartment?.images ?? []} />
      <section>
        <h3 className="text-5xl font-extrabold  text-primary mb-4 pl-4">Details</h3>
        <p className="text-xl pl-4 text-primary">Location: {apartment?.location}</p>
        <p className="text-xl pl-4 text-primary">Size: {apartment?.size} m²</p>
        <p className="text-xl pl-4 text-primary">Number of Bathrooms: {apartment?.bathrooms}</p>
        <p className="text-xl pl-4 text-primary">Number of Bathrooms: {apartment?.bedrooms}</p>
      </section>
    </main>
  );
}