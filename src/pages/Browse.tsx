import Grid from '../components/Grid';
import { getBooks } from '../storage/Books';
import { useState, useEffect } from 'react';
import Book from '../model/Book';

const Browse = () => {
    const [books, setBook] = useState<Book[]>([]);
    
    useEffect(() => {
        getBooks().then((books) => {
            console.log(books);
            setBook(books);
        });
    }, []);

    return (
        <div className='browse'>
            {Grid(books)}
        </div>
    );
};

export default Browse;