/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { iUser } from '../../typings';

function LogginButtonText() {
    const { t } = useTranslation();
    const { loginWithGoogle, signOut, authUser, loading } = useAuth();
    const [error, setError] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const googleLogin = (event: any) => {
        setError(null)
        loginWithGoogle()
            .then((authUser: any) => {
                router.push('/user');
            })
            .catch((error: any) => {
                setError(error.message)
            });
        event.preventDefault();
    };

    useEffect(() => {
        if (!loading && !authUser){
            setIsLogged(false)
        }

        if(authUser){
            setIsLogged(true)
        }
    }, [authUser, loading, router])
    
    return (
        <button onClick={!loading && isLogged ? signOut : googleLogin}  className='font-secundary underline'>
            click here
        </button>
    )
}

export default LogginButtonText;