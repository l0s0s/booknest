import Book from '../model/Book';
import { collection, addDoc, query, getDoc, doc, orderBy, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

const collectionName = "books";

export const addBook = async (book: Book): Promise<void> => {
    try {
        await addDoc(collection(db, collectionName), book);
    } catch (e) {
        console.error("Error adding document: ", e);
    } 
}

export const getBook = async (id: string): Promise<Book | null> => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        return docSnap.exists() ? docSnap.data() as Book : null;
    } catch (e) {
        console.error("Error getting document:", e);
        return null;
    }
}

export const getBooks = async (): Promise<Book[]> => {
    try {
        const querySnapshot = await getDocs(query(collection(db, collectionName), orderBy("Rating", "desc")));
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
