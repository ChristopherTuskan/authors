import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const {authors, setAuthors, removeFromDom} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data);
            res.data.sort((a, b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            setAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='col-3 mx-auto'>
            <table className='table table-bordered'>
                <thead>
                    <tr className='m-3'>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={author._id}>
                                    <th>{author.name}</th>
                                    <th>
                                        <Link className='m-3' to={`/author/${author._id}`}>Edit</Link>
                                        <button className='bg-danger' onClick={() => {deleteAuthor(author._id)}}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;