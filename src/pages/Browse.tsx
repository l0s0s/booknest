import books from '../data/top_books/top_books.json';
import Grid from '../components/Grid';

const Browse = () => {
    return (
        <div className='browse'>
            <h3 className="text-center">Top 100 books of all time: </h3>
                {Grid(books)}
            <h3 className="text-center">{"More books should be later:)"}</h3>
        </div>
    );
};

export default Browse;