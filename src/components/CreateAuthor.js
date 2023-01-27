import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import {useState} from 'react';

const CreateAuthor = () => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const authorCreate = authorParam => {
        axios.post('http://localhost:8000/api/author', authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
                navigate("/author");
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp={authorCreate} initialName="" errors={errors}/>
        </div>
    )

}

export default CreateAuthor;