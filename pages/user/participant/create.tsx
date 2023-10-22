import { Fragment, useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Swal from 'sweetalert2';
import router from 'next/router';
import firebase from 'firebase';
import { participant } from '../../../typings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CreateParticipant = () => {
    const { authUser, loading, signOut } = useAuth();

    const [show, setShow] = useState(false)

    const [imgUrl, setImgUrl] = useState('');

    const [selectedSkills, setSelectedSkills] = useState([])

    const setImageFromChild = (imgString: string) => {
        setImgUrl(imgString)
    }

    const [content, setContent] = useState<participant>({
        organizerName: "",
        organization: "",
        plannedEvent: "",
        twitter: "",
        linkedin: "",
        country: "",
        state: "",
        city: "",
        numberParticipatingChild: 0,
        createdAt: undefined,
        uid: undefined
    });

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { 
            organizerName,
            organization,
            plannedEvent,
            twitter,
            linkedin,
            country,
            state,
            city,
            numberParticipatingChild
        } = content as any;

        if (
            organizerName &&
            plannedEvent &&
            twitter &&
            linkedin &&
            country &&
            state &&
            city &&
            numberParticipatingChild
        ){
            const payload = {
                organizerName,
                organization,
                plannedEvent,
                twitter,
                linkedin,
                country,
                state,
                city,
                numberParticipatingChild,
                createdAt: new Date(),
            };
            console.log('To register: ', payload)
            setShow(true)

            firebase
                .firestore()
                .collection('participants')
                .doc(authUser.uid)
                .set(
                    {
                        ...payload,
                        uid: authUser.uid
                    }
                )
                .then( e => 
                    Swal.fire({
                        html:
                            'You are register with success. <br /><br />Follow us <br /> ' +
                            `
                            <span class="isolate inline-flex rounded-md shadow-sm">
                                <a
                                    href="https://twitter.com/home"
                                    target="_blank"
                                    type="button"
                                    class="font-secundary relative inline-flex items-center rounded-l-md bg-blue-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-200 focus:z-10"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    type="button"
                                    class="font-secundary relative -ml-px inline-flex items-center rounded-r-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 hover:bg-blue-500 focus:z-10"
                                >
                                    Linkedin
                                </a>
                            </span>
                            ` ,
                        icon: 'success',
                    }).then(() => {
                        router.push('/user')
                    })
                )
                .catch(e => { 
                        console.log(e)
                        Swal.fire({
                            text: "We got an error, please try later",
                            icon: 'error',
                        })
                    }
                )


            
        }
    }

    useEffect(() => {
        if(authUser){
            const unsubscribe = firebase
                .firestore()
                .collection('participants')
                .doc(authUser.uid)
                .onSnapshot((doc) => {
                    const participantData: participant = doc.data() as participant;
                    if (participantData) setContent(participantData);
                });

                return () => unsubscribe();
        }
    }, [authUser, loading]);


    return (
        <form method="POST" onSubmit={onSubmit}>
        
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-[44px] pb-6">Profile</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="Organizer’s Name" className="block text-sm font-medium text-gray-700">
                                Organizer’s Name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="organizerName"
                                    id="organizerName"
                                    value={content.organizerName}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Lorena Krawczyk"
                                    required
                                />
                            </div>
                        </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="Organization" className="block text-sm font-medium text-gray-700">
                                    Organization
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="organization"
                                        id="organization"
                                        value={content.organization}
                                        onChange={onChange}
                                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="UnwrapYourDream"
                                        required
                                    />
                                </div>
                            </div>

                        <div className="col-span-4 lg:col-span-2">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={content.country}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Poland"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-4 lg:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={content.state}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Wielkopolski"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-4 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={content.city}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Poznan"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="numberParticipatingChild" className="block text-sm font-medium text-gray-700">
                                Number of children participating
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="number"
                                    min={0}
                                    name="numberParticipatingChild"
                                    id="numberParticipatingChild"
                                    value={content.numberParticipatingChild}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="20"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                                X ( Former Twitter )
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="twitter"
                                    id="twitter"
                                    value={content.twitter}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="lorena-krawczyk"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                                Linkedin
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="linkedin"
                                    id="linkedin"
                                    value={content.linkedin}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="kraw-lorena"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="plannedEvent" className="block text-sm font-medium text-gray-700">
                            Describe planned event
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="plannedEvent"
                                name="plannedEvent"
                                rows={3}
                                value={content.plannedEvent}
                                onChange={onChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Describe the kids dream, could be the dream for the future or just a dream to achieve someday in when growup, here the idea is to let the kid free to dream."
                                required
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Tell more about your planned event.</p>
                    </div>

                </div>
            </div>
        </div>   

        <div className="flex justify-end mt-3">
            <button
                type="reset"
                    className="font-secundary rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:none focus:ring-offset-0"
            >
                Cancel
            </button>
            <button
                type='submit'
                    className="font-secundary ml-3 inline-flex justify-center rounded-md border border-transparent bg-[#ffd24a] py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-[#e0c573] focus:outline-none focus:ring-2 focus:none focus:ring-offset-0"
            >
                Save
            </button>
        </div>
    </form>
    );
};

export default CreateParticipant;