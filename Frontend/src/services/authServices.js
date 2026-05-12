import axios from 'axios';

const handleRegister = async (email, pass) => {
    const user = {
        email: email,
        password: pass
    }

    try{
        const response = await axios.post(
            'http://localhost:5000/auth/register',
            user
        )

        console.log(response.data.email)
    }catch(err){
        console.log(err.response.data)
    }
}

const handleLogin = async (email, pass, navigate) => {

    const user = {
        email: email,
        password: pass
    }

    try{
        const reponse = await axios.post(
            'http://localhost:5000/auth/login',
            user
        )

        const token = reponse.data.token;

        if(token){
            localStorage.setItem('token', token);
            navigate('/dashboard')
        }
    }catch(err){
        console.log(err.response.data)
    }   
}

export { handleLogin, handleRegister }