import { Calendar, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function Featured() {
    return (
        <article className="bg-white shadow-sm relative h-170">
            <div className="relative w-full h-87.5 md:h-90.5">
                <Image
                    src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?w=1200&h=600&fit=crop"
                    alt="Police in riot gear"
                    className=" object-cover"
                    fill
                />
            </div>
            <div className='bg-white'>
                <div className="absolute left-4 right-4 md:left-6 md:right-6 bottom-3 bg-white z-10 p-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        POLITICS
                    </span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
                        &apos;Election was rigged&apos; says opposition, police confirm three dead
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs">by</span>
                            <span className="font-semibold text-gray-900">JOHN DOE</span>
                            <span className="text-xs">and 1 others</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>February 17, 2020</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>0</span>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        When we get out of the glass bottle of our ego and when we escape like the squirrels in the...
                    </p>
                    <button className="shadow text-xs text-gray-900 hover:bg-black hover:text-white uppercase tracking-wider transition-colors border border-gray-200 px-6 py-2">
                        READ MORE
                    </button>
                </div>
            </div>
        </article>
    )
}
