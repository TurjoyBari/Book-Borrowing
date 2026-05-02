import BookCard from "@/component/BookCard";

const AllBooksPages = async () => {


    const res = await fetch('https://book-borrowing.vercel.app/data.json')
    const books = await res.json()
    return (
        <div className="max-w-7xl mx-auto mt-5">
            <div className="grid items-center justify-center md:grid-cols-4 gap-6">
                {books.map(book => <BookCard key={book.id} book={book} />
            )}
            </div>
            
        </div>
    );
};

export default AllBooksPages;