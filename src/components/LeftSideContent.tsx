import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

const latestArticles = [
    {
        id: 1,
        title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop'
    },
    {
        id: 2,
        title: 'Millions of Indigenous People May Lose Voting Rights: Alliance',
        image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=250&fit=crop'
    },
    {
        id: 3,
        title: 'Crismonita Dwi Putri, RI\'s Track Cycling Athlete for Asian Games',
        image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=250&fit=crop'
    },
    {
        id: 4,
        title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
        image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400&h=250&fit=crop'
    },
    {
        id: 5,
        title: 'Garuda operates larger planes for Jakarta-Palembang route',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop'
    }
];



const opinionArticles = [
    'Tour showcases shared art history of Indonesia and Singapore',
    'Finland Has An Education System The Other Country Should Learn From',
    'Women in Politics: Urgency of Quota System For Women In Regional Elections',
    'China\'s Peng banned and fined for Wimbledon corruption attempt',
    'Democratic Party politician calls Prabowo \'cardboard general\'',
    'Millions of Indigenous People May Lose Voting Rights: Alliance',
    'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
    'Garuda operates larger planes for Jakarta-Palembang route'
];


export default function LeftSideContent() {
    return (
        <div className="lg:col-span-3 space-y-6">
            {/* The Latest Section */}
            <div className="bg-white shadow-sm">
                <div className="p-6 pb-4">
                    <h2 className="text-xl font-bold text-gray-900">The Latest</h2>
                    <div className="relative mt-3 h-0.5 w-full bg-gray-200">
                        <div className="absolute left-0 top-0 h-0.5 w-10 bg-black" />
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    {latestArticles.map((article) => (
                        <article key={article.id} className="flex gap-4 group cursor-pointer">
                            <div className="relative w-28 h-20 shrink-0 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    fill
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-3">
                                    {article.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Opinion Section */}
            <div className="bg-white shadow-sm">
                <div className="p-6 pb-4">
                    <h2 className="text-xl font-bold text-gray-900">Opinion</h2>
                    <div className="relative mt-3 h-0.5 w-full bg-gray-200">
                        <div className="absolute left-0 top-0 h-0.5 w-10 bg-black" />
                    </div>
                </div>
                <div className="p-6">
                    <ul className="space-y-4">
                        {opinionArticles.map((article, index) => (
                            <li key={index} className="group cursor-pointer">
                                <a href="#" className="flex items-start gap-1 text-sm text-gray-900 hover:text-red-600 transition-colors">
                                    <IoMdArrowDropright className="w-5 h-5 mt-0.5 shrink-0" />
                                    <span className="leading-snug">{article}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
