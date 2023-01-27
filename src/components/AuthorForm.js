import {useState} from 'react';


const AuthorForm = (props) => {
    const {onSubmitProp, initialName, errors} = props;
    const [name, setName] = useState(initialName);
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                { errors.name ? 
                    <p className='text-danger'>{errors.name.message}</p>
                    : null
                }
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <input className='m-3' type="submit" value="Submit" />
        </form>
    )
}
export default AuthorForm;