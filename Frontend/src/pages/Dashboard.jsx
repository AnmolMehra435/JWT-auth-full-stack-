import { useState, useEffect } from 'react'
import axios from 'axios';

function Dashboard(){

    const [validate, setValidate] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const verifyUser = async () => {
            const token = localStorage.getItem('token');

            try{
                const response = await axios.get(
                    'http://localhost:5000/protected',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                if(response.data.verified){
                    setValidate(true);
                }
            }catch(err){
                console.log(err.response.data)
            }finally{
                setLoading(false);
            }
        }
        
        verifyUser();
    }, []);

    
    if(loading){
        return(
            <h1>Loading....</h1>
        )
    }

    if(validate){
        return(
            <h1>Welcome to dashboard</h1>
        )
    }

    return(
        <h1>Forbidden 403</h1>
    )
}

export default Dashboard