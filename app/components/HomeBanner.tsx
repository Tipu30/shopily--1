import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='relative bg-gradient-to-r from-amber-500 to-amber-700 mb-8'>

            <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly '>
                <div className='mb-8 md-mb-9 text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Winter Sale</h1>
                    <p className='text-lg md:text-xl text-white mb-2'>Enjoy discount on every items</p>
                    <p className='text-2xl md:text-5xl text-zinc-900 font-bold'>GET 35% OFF
                    </p>
                </div>
                <div className='w-1/3 relative aspect-video'>
                    <Image
                        src='/banner-image.png'
                        fill
                        alt='Banner Image'
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner