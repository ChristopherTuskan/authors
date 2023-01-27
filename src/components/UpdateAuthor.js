import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import {useEffect, useState} from 'react';

const UpdateAuthor = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const [notFoundError, setNotFoundError] =useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => {
                console.log(res.data.name);
                setName(res.data.name);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setNotFoundError("Author ID is not found")
            })
    }, [id])

    const authorUpdate = authorParam => {
        console.log(authorParam);
        axios.put('http://localhost:8000/api/author/' + id, authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=> {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
                navigate("/author/" + id)
            })
    }

    return (
        <div>
            
            {notFoundError ? (
                <div>
                    <h2>{notFoundError}</h2>
                    <h3><Link to="/author">Click Here to add Author</Link></h3>
                </div>
                
            ): 
            <div>
                <h1>Favorite Authors</h1>
                <Link to={"/"}>Home</Link>
                <p>Update an author:</p>
                {loaded && (
                    <>
                        <AuthorForm onSubmitProp={authorUpdate} initialName={name} errors={errors}/>
                    </>
                )}
            </div>
            }
        </div>
    )

}

export default UpdateAuthor;