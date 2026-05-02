import BookCard from "@/component/BookCard";

const AllBooksPages = async () => {


    const res = await fetch('https://book-borrowing.vercel.app/data.json')
    const books = await res.json()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book} />
            )}
            </div>
            
        </div>
    );
};

export default AllBooksPages;