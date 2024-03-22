"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({ data }: {
    data: {
        image: string
    }[]
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef<HTMLDivElement>(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current
        if (elem) {
            let { width, height } = elem.getBoundingClientRect()
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    // Effect to handle automatic slide change
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImg(prev => (prev + 1) % data.length)
        }, 3000) // Change slide every 3 seconds

        return () => clearTimeout(timer)
    }, [currentImg])

    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Carousel container */}
            <div className='w-80 h-80 justify-center rounded-md overflow-hidden relative'>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full absolute flex transition-all duration-300'>
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none'
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || "https://random.imagecdn.app/500/500"}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className='flex justify-center mt-3'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default Carousel
