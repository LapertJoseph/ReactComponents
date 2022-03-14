import axios from "axios";
import { useRef, useState } from "react";

const Form = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {};
        const inputs = formRef.current.querySelectorAll('input');
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        try {
            await axios.post('http://localhost:8000/api/users/', form)
            setMessage('Inscription effectuée !')
            setTimeout(()=> {
                setMessage('')
            }, 2000)
        } catch (error) {
            console.log(error.message);
        }
    }

    const formRef = useRef();

    return (
        <div>
            <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                <label>Nom : </label>
                <input type="text" name="nom"></input> <br />
                <label>Prénom :</label>
                <input type="text" name="prenom"></input> <br />
                <label>date de naissance :</label>
                <input type="date" name="ddn"></input> <br />
                <label>Sexe : </label>
                <input type="text" name="sexe"></input> <br />
                <label>Adresse :</label>
                <input type="text" name="adresse"></input> <br />
                <label>Code postal :</label>
                <input type="text" name="cp"></input> <br />
                <label>Ville : </label>
                <input type="text" name="ville"></input> <br />
                <label>Pays :</label>
                <input type="text" name="pays"></input> <br />
                <label>Mobile :</label>
                <input type="text" name="mobile"></input> <br />
                <label>Email : </label>
                <input type="text" name="email"></input> <br />
                <label>Password :</label>
                <input type="password" name="psswd"></input> <br />

                <input type="submit" value="Submit"></input>
            </form>
            {message && <p>{message}</p>}
        </div>
      );
}
 
export default Form;