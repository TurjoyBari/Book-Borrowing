import BookCard from "./BookCard";


const TopGenerations = async () => {
    const res = await fetch('https://book-borrowing.vercel.app/data.json')
    const books = await res.json()
    const topBooks = books.slice(0, 6)




    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {topBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default TopGenerations;