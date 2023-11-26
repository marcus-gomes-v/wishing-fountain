import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Swal from 'sweetalert2';
import router from 'next/router';
import firebase from 'firebase';
import { SchoolTypes, ShowMenus, ShowMenusSelected, participant } from '../../../typings';
import { Switch } from '@headlessui/react'
import KindergartenComponentDetail from '../../../components/authenticated/KindergartenComponentDetail';
import PrimarySchoolComponentDetail from '../../../components/authenticated/PrimarySchoolComponentDetail';
import SecondarySchoolComponentDetail from '../../../components/authenticated/SecondarySchoolComponentDetail';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const CreateParticipant = () => {
    const { authUser, loading, signOut } = useAuth();

    const [show, setShow] = useState(false)

    const [imgUrl, setImgUrl] = useState('');

    const [selectedSkills, setSelectedSkills] = useState([])

    const setImageFromChild = (imgString: string) => {
        setImgUrl(imgString)
    }

    const [schoolTypes, setSchoolTypes] = useState<SchoolTypes>({
        kindergarten: false,
        primarySchool: false,
        secondarySchool: false
    });

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

    const onChange = (e: any) => {
        const { value, name } = e.target;
        console.log(name, value); // Add this line to debug
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
            numberParticipatingChild,
            myEventWillTakePlaceOn
        } = content as any;

        if (
            organizerName &&
            plannedEvent &&
            country &&
            state &&
            city &&
            numberParticipatingChild && 
            myEventWillTakePlaceOn
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
                myEventWillTakePlaceOn,
                createdAt: new Date(),
                schoolTypes,
            };
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
                            'Thank you for being a dream champion!<br /><br />Connect with us and fellow dreamers on our social media. <br /><br /> ' +
                            `
                            <span class="isolate inline-flex rounded-md shadow-sm">
                                <a
                                    href="https://www.facebook.com/UnwrapYourDream"
                                    target="_blank"
                                    type="button"
                                    class="font-secundary relative -ml-px inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 hover:bg-blue-500 focus:z-10"
                                >
                                    Facebook
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

    const [showMenu, setShowMenu] = useState<ShowMenus>({
        dashboard: true,
        kindergarten: false,
        primarySchool: false,
        secondarySchool: false
    });

    type MenuKeys = keyof typeof showMenu;

    const updateShowMenu = (schoolTypes: SchoolTypes) => {
        const newShowMenu = { ...showMenu };

        Object.keys(schoolTypes).forEach((type) => {
            // Set showMenu based on the current state of each schoolType
            newShowMenu[type as keyof ShowMenus] = schoolTypes[type as keyof SchoolTypes];
        });

        setShowMenu(newShowMenu);
    };

    const orderedSchoolTypes = ["kindergarten", "primarySchool", "secondarySchool"];
   
    const [selectedMenu, setSelectedMenu] = useState<ShowMenusSelected>({
        dashboard: true,
        kindergarten: false,
        primarySchool: false,
        secondarySchool: false
    });

    const handleMenuSelection = (selectedKey: keyof ShowMenusSelected) => {
        const newSelectedMenu = Object.fromEntries(
            Object.keys(selectedMenu).map(key => [key, false])
        ) as ShowMenusSelected;
        newSelectedMenu[selectedKey] = true;

        setSelectedMenu(newSelectedMenu);
        console.log(newSelectedMenu)
    };

     const handleToggleChange = (name: string, value: boolean) => {
        console.log(name, value)
        setSchoolTypes(prev => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        updateShowMenu(schoolTypes);
    }, [schoolTypes]);

    useEffect(() => {
        if (authUser) {
            const unsubscribe = firebase.firestore().collection('participants').doc(authUser.uid)
                .onSnapshot((doc) => {
                    const participantData: participant = doc.data() as participant;
                    if (participantData) {
                        setContent(participantData);
                        if (participantData.schoolTypes) {
                            setSchoolTypes(participantData.schoolTypes);
                        }
                    }
                });

            return () => unsubscribe();
        }
    }, [authUser, loading]);


    return (
        <form method="POST" onSubmit={onSubmit}>
        
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-gray-900 text-[34px] font-bold pb-6">
                            { content ?  'You will host #UnwrapYourDream Event between' : 'Register to host your #UnwrapYourDream Event between' } 
                            <br /> <span className='
                                underline
                                decoration-wavy
                                decoration-[#ffd24a]
                                underline-offset-8
                                decoration-[4px]
                                mb-3
                            '>December 4th - 22nd, 2023</span>
                        </h3>
                        <div className="menu grid rounded-md overflow-hidden divide-gray-300 divide-y-[1px] ring-1 ring-gray-300">
                            {Object.keys(showMenu).map((k: string) => 
                                showMenu[k as keyof ShowMenus] ? (
                                    <button
                                        type="button"
                                        className={`
                                            items-center
                                            px-3
                                            py-2
                                            font-secundary
                                            capitalize
                                            focus:z-10
                                            ${selectedMenu[k as keyof ShowMenusSelected] ? 'bg-gray-50' : 'bg-white'}    
                                        `}
                                        onClick={() => handleMenuSelection(k as keyof ShowMenusSelected)}
                                    >
                                        {k}
                                    </button>
                                ) : null
                            )}
                        </div>
                    </div>
                    <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                       
                       { selectedMenu.dashboard ? 
                            <div className="content-dashboard">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 lg:col-span-6">
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
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-6 lg:col-span-2">
                                        <label htmlFor="Organization" className="block text-sm font-medium text-gray-700">
                                            Organization (if applicable)
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
                                                placeholder="Your Country"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-4 lg:col-span-1">
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
                                                placeholder="Your State"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-4 lg:col-span-1">
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
                                                placeholder="Your City"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3">
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

                                    <div className="col-span-6 lg:col-span-3">
                                        <label htmlFor="myEventWillTakePlaceOn" className="block text-sm font-medium text-gray-700">
                                            The event will take place on December:
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <select
                                                id="myEventWillTakePlaceOn"
                                                name="myEventWillTakePlaceOn"
                                                className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                defaultValue=""
                                                value={content.myEventWillTakePlaceOn}
                                                onChange={onChange}
                                            >
                                                <option>Select...</option>
                                                <option value="04-12-23">04</option>
                                                <option value="05-12-23">05</option>
                                                <option value="06-12-23">06</option>
                                                <option value="07-12-23">07</option>
                                                <option value="08-12-23">08</option>
                                                <option value="09-12-23">09</option>
                                                <option value="10-12-23">10</option>
                                                <option value="11-12-23">11</option>
                                                <option value="12-12-23">12</option>
                                                <option value="13-12-23">13</option>
                                                <option value="14-12-23">14</option>
                                                <option value="16-12-23">16</option>
                                                <option value="16-12-23">16</option>
                                                <option value="16-12-23">16</option>
                                                <option value="16-12-23">16</option>
                                                <option value="16-12-23">16</option>
                                                <option value="17-12-23">17</option>
                                                <option value="18-12-23">18</option>
                                                <option value="19-12-23">19</option>
                                                <option value="20-12-23">20</option>
                                                <option value="21-12-23">21</option>
                                                <option value="22-12-23">22</option>
                                            </select>
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
                                                placeholder="Your Twitter"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-6 lg:col-span-2">
                                        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                                            LinkedIn
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="linkedin"
                                                id="linkedin"
                                                value={content.linkedin}
                                                onChange={onChange}
                                                className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Your Linkedin"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-6 sm:col-span-2">
                                        <label className="block text-md font-medium text-gray-700">
                                            School Type
                                        </label>
                                        <div className="mt-1 flex flex-col space-y-2">
                                            {orderedSchoolTypes.map(type => (
                                                <Switch.Group as="div" className="flex items-center" key={type}>
                                                    <Switch
                                                        checked={schoolTypes[type]}
                                                        onChange={(value: any) => handleToggleChange(type, value)}
                                                        className={classNames(
                                                            schoolTypes[type] ? 'bg-indigo-600' : 'bg-gray-200',
                                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                                        )}
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                schoolTypes[type] ? 'translate-x-5' : 'translate-x-0',
                                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                            )}
                                                        />
                                                    </Switch>
                                                    <Switch.Label as="span" className="ml-3 text-sm">
                                                        <span className="font-medium text-gray-900"> {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                                                    </Switch.Label>
                                                </Switch.Group>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="plannedEvent" className="block text-sm font-medium text-gray-700">
                                        Describe your planned #UnwrapYourDream event:
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="plannedEvent"
                                            name="plannedEvent"
                                            rows={3}
                                            value={content.plannedEvent}
                                            onChange={onChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Tell us more about how you envision your event, we will try amplify it on our social media..."
                                            required
                                        />
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
                            </div>
                            : ''
                        }

                       
                        { selectedMenu.kindergarten ?
                            <div className="content-kindergarten">
                                <KindergartenComponentDetail></KindergartenComponentDetail>    
                            </div> : ''
                        }
                       
                        { selectedMenu.primarySchool ?
                            <div className="content-primary-school">
                                <PrimarySchoolComponentDetail></PrimarySchoolComponentDetail>
                            </div> : ''
                        }
                       
                        { selectedMenu.secondarySchool ?
                            <div className="content-secondary-school">
                                <SecondarySchoolComponentDetail></SecondarySchoolComponentDetail>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>   

            
        </form>
    );
};

export default CreateParticipant;