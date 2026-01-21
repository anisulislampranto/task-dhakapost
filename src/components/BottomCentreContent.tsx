import { Calendar } from "lucide-react";
import Image from "next/image";

const bottomArticles = [
    {
        id: 1,
        category: 'BUSINESS',
        title: 'Grab tackles Jakarta\'s odd-even license plate policy with special algorithm',
        date: 'February 17, 2020',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
        bgColor: 'bg-blue-600'
    },
    {
        id: 2,
        category: 'POLITICS',
        title: 'Jokowi supporters try to prevent anti-Jokowi activist from entering Batam',
        date: 'August 10, 2018',
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop',
        bgColor: 'bg-red-600'
    }
];


export default function BottomCentreContent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {bottomArticles.map((article) => (
                <article key={article.id} className="bg-white shadow-sm overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden w-full h-56">
                        <Image
                            src={article.image}
                            alt={article.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            fill
                        />
                        <span className={`absolute bottom-0 left-28 right-32 ${article.bgColor} text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider`}>
                            {article.category}
                        </span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                            {article.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Calendar className="w-3 h-3" />
                            <span>{article.date}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}
