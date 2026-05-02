import BookDetails from "@/component/BookDetails";


const Page = async ({ params }) => {
    const {id} = await params;
  const res = await fetch("https://book-borrowing.vercel.app/data.json");
  const books = await res.json();

  const book = books.find(e => e.id == id);

  return <BookDetails book={book} />;
};

export default Page;