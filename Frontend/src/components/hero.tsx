import React from 'react'
import CustomCarousel from "@/components/carousel"

interface HeroProps {
    images: string[]
}

export default function Hero({images}: HeroProps) {
    return (
        <section className="w-full h-[75vh] flex">
            

            <CustomCarousel opts={{ loop: true, }} 
                autoplayOptions={{ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false}}
                className="h-full w-full m-auto"
                images={images}
            />

        </section>
    )
}