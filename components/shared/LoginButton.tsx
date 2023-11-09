/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { iUser } from '../../typings';

function LogginButton({ handleLogged, user }: { handleLogged: any, user: iUser }) {
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
        <button
            onClick={!loading && isLogged ? signOut : googleLogin}
            className={` group
                w-full py-3
                lg:ml-8 lg:px-4 lg:py-0
                border border-transparent lg:rounded-full 
                shadow-sm 
                font-bold
                tracking-wide
                hover:tracking-wider
                text-[24px]
                ${!loading && isLogged ? "bg-[#FF1D79] hover:bg-[#ff1d77db] text-white group-hover:text-gray-200" : "bg-[#FFD24A] hover:bg-yellow-200 text-gray-600 group-hover:text-yellow-700"} `}>

            <span className={`inline-flex items-center justify-center  group-hover:animate-pulse  `} >
                <FontAwesomeIcon icon={!loading && isLogged ? faClose : faGoogle} className="w-4 h-4 mr-2 hidden" />
                {!loading && isLogged ? t('login.logout') : t('login.google')}
            </span>
        </button>
    )
}

export default LogginButton;