type BookMetadata = {
  ID: string;
};

type Book = {
  Title: string;
  AuthorID: string;
  Genres: string[];
  Rating: number;
  Description: string;
  CoverURL: string;
  Metadata?: BookMetadata;
};

export default Book;
