import { Calendar } from "lucide-react";
import Image from "next/image";

const rightSidebarArticles = [
    {
        id: 1,
        category: 'OPINION',
        title: 'Democratic Party politician calls Prabowo \'cardboard general\'',
        author: 'JOHN DOE',
        date: 'August 10, 2018',
        excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
        bgColor: 'bg-yellow-500'
    },
    {
        id: 2,
        category: 'LIFESTYLE',
        title: 'Google tracks location data even when users turn service off',
        author: 'JOHN DOE',
        date: 'August 14, 2018',
        excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop',
        bgColor: 'bg-pink-500'
    },
    {
        id: 3,
        category: 'LIFESTYLE',
        title: 'Woman relaxing in outdoor cafe',
        author: 'JOHN DOE',
        date: 'August 12, 2018',
        excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
        image: 'https://images.unsplash.com/photo-1445384763658-0400939829cd?w=800&h=400&fit=crop',
        bgColor: 'bg-pink-500'
    }
];


export default function RightSideContent() {
    return (
        <div className="lg:col-span-3 space-y-6">
            {rightSidebarArticles.map((article) => (
                <article key={article.id} className="bg-white shadow-sm overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden w-full h-44">
                        <Image
                            src={article.image}
                            alt={article.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            fill
                        />
                        <span className={`absolute top-4 left-4 ${article.bgColor} text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider`}>
                            {article.category}
                        </span>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                            {article.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                            <span className="text-xs">by</span>
                            <span className="font-semibold text-gray-900">{article.author}</span>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{article.date}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {article.excerpt}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}
