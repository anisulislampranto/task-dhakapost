'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

type ArticleType = {
    id: number;
    title: string;
    image: string;
}

type TopCarouselProps = {
    articles: ArticleType[];
};

const TopCarousel = ({ articles }: TopCarouselProps) => {
    const visibleCount = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % articles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [articles.length]);

    return (
        <div className="bg-white shadow-sm p-1">
            <div className="relative overflow-hidden">
                <div
                    ref={slideRef}
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
                        width: `${(100 / visibleCount) * articles.length}%`
                    }}
                >
                    {articles.map((article: ArticleType) => (
                        <div
                            key={article.id}
                            className="shrink-0 p-2"
                            style={{ width: `${100 / articles.length}%` }}
                        >
                            <div className="flex gap-3 group cursor-pointer p-2 rounded">
                                <div className="relative w-16 h-12 shrink-0 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        fill
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xs text-gray-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-3">
                                        {article.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() =>
                        setCurrentIndex(prev => (prev === 0 ? articles.length - 1 : prev - 1))
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 border"
                >
                    <ChevronRight className="w-5 h-5 rotate-180 text-gray-300" />
                </button>
                <button
                    onClick={() => setCurrentIndex(prev => (prev + 1) % articles.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 border"
                >
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                </button>
            </div>
        </div>
    );
};

export default function Carousel() {
    const topCarouselArticles = [
        { id: 1, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem! 1', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=250&fit=crop' },
        { id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem! 2', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop' },
        { id: 3, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem! 3', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop' },
        { id: 4, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem! 4', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop' },
        { id: 5, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem! 5', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=250&fit=crop' }
    ];

    return (
        <TopCarousel articles={topCarouselArticles} />
    );
}
