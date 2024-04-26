import Book from '../model/Book';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

const addBook = async (book: Book): Promise<void> => {
    try {
        await addDoc(collection(db, "books"), book);
    } catch (e) {
        console.error("Error adding document: ", e);
    } 
}

const getBooks = async (): Promise<Book[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "books"));
        let books: Book[] = [];
        querySnapshot.forEach((doc) => {
            books.push(doc.data() as Book);
        });
        return books;
    } catch (e) {
        console.error("Error getting documents: ", e);
        return [];
    }
}

export default addBook;