import Grid from "../components/Grid";
import { getBooks } from "../storage/Books";
import { useState, useEffect } from "react";
import Book from "../model/Book";
import { useSearchParams } from "react-router-dom";

const Browse = () => {
  const [books, setBook] = useState<Book[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterData = (books: Book[], searchText: string) => {
    return books.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase()),
      );
    });
  };

  useEffect(() => {
    let isMounted = true;

    getBooks().then((books) => {
      if (!isMounted) {
        return;
      }

      const search = searchParams.get("search");

      if (search) {
        books = filterData(books, search);
      }

      setBook(books);

      return () => {
        isMounted = false;
      };
    });
  }, []);

  return <div className="browse">{Grid(books)}</div>;
};

export default Browse;
