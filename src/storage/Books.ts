import Book from "../model/Book";
import {
  collection,
  addDoc,
  query,
  getDoc,
  doc,
  orderBy,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

const collectionName = "books";

export const addBook = async (book: Book): Promise<void> => {
  try {
    await addDoc(collection(db, collectionName), book);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getBook = async (id: string): Promise<Book | null> => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    let b = docSnap.data() as Book;
    b.Metadata = { ID: docSnap.id };

    return b;
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

export const getBooks = async (): Promise<Book[]> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, collectionName), orderBy("Rating", "desc")),
    );
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      Metadata: { ID: doc.id }
    }) as Book);
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

export const updateBook = async (book: Book): Promise<void> => {
  console.log(book);
  const docRef = doc(db, collectionName, book.Metadata?.ID ?? "");

  await updateDoc(docRef, book);
};
