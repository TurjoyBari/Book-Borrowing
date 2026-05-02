import BookCard from "./BookCard";
import NewArrivals from "./NewArrivals";


const TopGenerations = async () => {
    const res = await fetch('https://book-borrowing.vercel.app/data.json')
    const books = await res.json()
    const topBooks = books.slice(0, 4)




    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold my-5">Featured Books</h1>

            <NewArrivals books={books} />

            <div className="grid grid-cols-4 gap-5">
                {topBooks.map(book => <BookCard key={book.id} book={book} />
            )}
            </div>
        </div>
    );
};

export default TopGenerations;