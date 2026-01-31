// components/BestPicks.jsx
import Book1 from '../../assets/book1.png'
import Book2 from '../../assets/book2.png'
import Book3 from '../../assets/book3.png'
import Book4 from '../../assets/book4.png'
const books = [
    {
        title: 'Thunmanhandiya',
        author: 'Mahagama Sekara',
        image: Book1, 
    
    },
    {
        title: 'Gamperaliya',
        author: 'Martin Wickramasinghe',
        image: Book2, 
    },
    {
        title: 'Nectar in a Sieve',
        author: 'Kamala Markandaya',
        image: Book3, 
    },
    {
        title: 'Adaraneeya Victoria',
        author: 'Mohan Raj Madawala',
        image: Book4 
    },
];

export default function BestPicks() {
    return (
        <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-10">
            Our Best Picks
            </h2>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
                <div
                key={index}
                className="  rounded-xl overflow-hidden shadow-lg border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 group"
                >
        
                <div className="relative">
                    <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Special Offer Badge  */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-md">
                    SPECIAL OFFER
                    </div>
                </div>

                {/* التفاصيل */}
                <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                    {book.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                    {book.author}
                    </p>
                </div>
                </div>
            ))}
        </div>
    </div>
    </section>
  );
}