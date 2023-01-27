import {Link} from 'react-router-dom';
import {useState} from 'react';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/author'}>Add an Author</Link>
            <p>We have quotes by:</p>
            <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;