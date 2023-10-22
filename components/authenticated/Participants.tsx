import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next'
import Offer from "../../pages/user/participant/create";



function Participants() {
    const { t } = useTranslation();

    const { useSession } = useAuth() as { useSession: any };

    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (useSession){
            const axiosRequest = async () => {
                const res = await axios.get(`/api/offer/list`);
                const data = res.data?.offersData;
                setPeople(data)
            };
            axiosRequest();
        }
    }, [useSession])

    useEffect(() => {
        console.log(useSession)
    }, [useSession]);

    return (
        <div>
            <div className="sm:flex sm:items-center px-2 py-3">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">{t('components.participants.title')}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {t('components.participants.subtitle')}
                    </p>
                </div>
            </div>
            <Offer></Offer>
        </div>
    )
}

export default Participants;