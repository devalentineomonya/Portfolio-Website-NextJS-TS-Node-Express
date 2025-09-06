import PageHeader from "@/components/shared/page-header";
import { Book } from "@/types/books";
import { client } from "@/sanity/lib/client";
import BooksClient from "@/screens/books/books-client";

const BOOKS_QUERY = `
*[
  _type == "book"
]{
  _id,
  title,
  author,
  image,
  level,
  purchaseLink,
  onlineReadLink,

}
`;
export default async function Component() {
  const books = await client.fetch<Book[]>(BOOKS_QUERY);
  console.log("books", books)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">

      <PageHeader
        title="Books"
        description="These are the books I recommend for those who wish to study and deepen their knowledge in programming. Exploring the fundamentals and nuances of programming languages is essential for developing a solid foundation."
      />
      <BooksClient books={books} />
    </div>
  );
}
