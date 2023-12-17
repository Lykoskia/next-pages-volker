import React from 'react';
import Image from 'next/image';

export default function Card({ title, content, imageUrl, onClick }) {
    return (
        <div
            onClick={onClick} 
            className="max-w-[300px] w-full rounded shadow-lg bg-white hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl ring-1 mx-auto">
            <div className="relative w-full max-w-[300px] h-[400px] mx-auto p-2">
                <Image 
                    src={imageUrl} 
                    alt="Card Image" 
                    layout="responsive"
                    width={300}
                    height={400}
                    objectFit="contain"
                    className="rounded-t-lg"
                />
            </div>
            <div className="px-6 py-4">
                <div className="text-red-700 dark:text-sky-200 font-bold text-xl text-center mb-2">{title}</div>
                <p className="dark:text-sky-500 text-base">
                    {content}
                </p>
            </div>
        </div>
    );
};
