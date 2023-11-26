import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next'
import Offer from "../../pages/user/participant/create";
import firebase from 'firebase';
import { SchoolTypes, participant } from "../../typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faInfo } from "@fortawesome/pro-solid-svg-icons";


function Participants() {
    const { t } = useTranslation();

    const { authUser, loading, signOut } = useAuth();

    const [content, setContent] = useState<participant>({
        organizerName: "",
        organization: "",
        plannedEvent: "",
        twitter: "",
        linkedin: "",
        country: "",
        state: "",
        city: "",
        myEventWillTakePlaceOn: "",
        numberParticipatingChild: 0,
        createdAt: undefined,
        uid: undefined
    });

    const [schoolTypes, setSchoolTypes] = useState<SchoolTypes>({
        kindergarten: false,
        primarySchool: false,
        secondarySchool: false
    });

    const [registeredSchoolTypes, setRegisteredSchoolTypes] = useState(''); 

    useEffect(() => {
        if (authUser) {
            const unsubscribe = firebase
                .firestore()
                .collection('participants')
                .doc(authUser.uid)
                .onSnapshot((doc) => {
                    const participantData: participant = doc.data() as participant;
                    if (participantData) {
                        setContent(participantData);
                        if (participantData.schoolTypes) {
                            setSchoolTypes(participantData.schoolTypes);
                            const registeredSchool = Object.keys(schoolTypes)
                            .filter(key => schoolTypes[key])  // Filter out the keys with true values
                            .join(', '); 
                            setRegisteredSchoolTypes(registeredSchool)
                        }
                    }
                });

            return () => unsubscribe();
        }
    }, [authUser, loading]);

    return (
        <div>
            <div className="sm:flex sm:items-center px-2 py-3">
                <img src='/logo/icon.svg' className='w-[60px] mr-2' />
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">{t('components.participants.title')}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {t('components.participants.subtitle')}
                    </p>
                </div>
                <div>
                    { content ? 
                        <div className="rounded-md bg-green-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-400" aria-hidden="true"  />
                                </div>
                                <div className="ml-3 flex-1 md:flex md:justify-between">
                                    <p className="text-sm text-green-700">
                                        You have registered your event for {registeredSchoolTypes}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    : ''}
                </div>
            </div>
            <Offer></Offer>
        </div>
    )
}

export default Participants;