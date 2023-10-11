import { Fragment, useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Layout from '../../../components/layout';
import { useAuth } from '../../../context/AuthContext';
import UploadFile from '../../../components/storage/UploadFile';
import { Transition } from '@headlessui/react';
import { faCheckCircle, faXmark } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import router from 'next/router';

const Offer = () => {
    const { useSession } = useAuth() as { useSession: user };

    const [show, setShow] = useState(false)

    const [imgUrl, setImgUrl] = useState('');

    const [selectedSkills, setSelectedSkills] = useState([])

    const setImageFromChild = (imgString: string) => {
        setImgUrl(imgString)
    }

    const [content, setContent] = useState({
        about: undefined,
        type: undefined,
        location: undefined,
        country: undefined,
        state: undefined,
        city: undefined,
        numberParticipatingChild: undefined,
        department: undefined,
        fullName: undefined,
        closeDate: undefined,
        closeDateFull: undefined,
        professionalSkills: undefined,
        cellphone: undefined,
        phone: undefined,
        skills: undefined,
        openSkills: undefined,
    })

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async () => {
        const author = {
            name: useSession.displayName,
            email: useSession.email,
            uid: useSession.uid,
            imageUrl: useSession.photoURL
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'lerigo'
        }

        const { about, type, location, country, state, city, numberParticipatingChild, department, fullName, professionalSkills, cellphone, phone, skills, openSkills } = content as any;

        const parsedOpenSkills = [] as Array<string>
        if (openSkills && openSkills.indexOf(',') > -1)
            openSkills.split(',').map((c: string) => parsedOpenSkills.push(dashify(c)));

        const payload = {
            slug: `${dashify(fullName)}-${author.uid}`,
            about,
            imgUrl,
            type,
            location: dashify(location),
            country, state, city,
            numberParticipatingChild,
            department,
            fullName,
            professionalSkills,
            cellphone,
            phone,
            skills: [
                ...selectedSkills,
                ...parsedOpenSkills
            ],
            closeDate: new Date(),
            closeDateFull: new Date(),
            author,
        };
        await axios.post('/api/offer', 
         payload, {
            headers: headers
        });
        setShow(true)
        Swal.fire({
            text: "Kid's dream registered with success",
            icon: 'success',
        }).then(() => {
            router.push('/user')
        })
    }

    const skills = [
        {
            title: 'Lets talk',
            description: "You just want to get a friend to meet from time to time for a chat and a coffe? There are a lot of people that are willing to have a chat with you.",
        },
        {
            title: 'Lets eat together',
            description: 'If you don\'t like eating alone or you need help with preparing the food, please look at the people that can help you with that.',
        },
        {
            title: 'Help with studies and homework',
            description: "If your kids needs somebody to help them with the homework you can look for people that can help them with that",
        },
        {
            title: 'Kids care',
            description: 'Find people that can help you take care of your kids. ',
        },
    ]

    const [checkedState, setCheckedState] = useState(
        new Array(skills.length).fill(false)
    );

    const handleOnChange = (position: any) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const skillsSelected = [] as any

        checkedState.map((v, i) => { v ? skillsSelected.push(dashify(skills[i].title)):''})

        setSelectedSkills(skillsSelected)
    };

    return (
    <form action="javascript:void(0)" method="POST">

        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Fullname
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={content.fullName}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Lorena Krawczyk"
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
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="numberParticipatingChild" className="block text-sm font-medium text-gray-700">
                                Number of children participating
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="numberParticipatingChild"
                                    id="numberParticipatingChild"
                                    value={content.numberParticipatingChild}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="20"
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">
                                Cellphone
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="cellphone"
                                    id="cellphone"
                                    value={content.cellphone}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="+48 5248 654 254"
                                />
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={content.phone}
                                    onChange={onChange}
                                    className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="+48 948 654 254"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            About
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                value={content.about}
                                onChange={onChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Describe the kids dream, could be the dream for the future or just a dream to achieve someday in when growup, here the idea is to let the kid free to dream."
                                defaultValue={''}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Tell more about your dream.</p>
                    </div>

                    <div className='hidden'>
                        <label htmlFor="professionalSkills" className="block text-sm font-medium text-gray-700">
                            Professioal Skills
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="professionalSkills"
                                name="professionalSkills"
                                rows={3}
                                value={content.professionalSkills}
                                onChange={onChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="I'm experienced handcraft, able to create really good art, equipaments or fix your wardrobe, I can also teach your dog some good tricks..."
                                defaultValue={'undefinied'}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Tell more about your preferences and skills.</p>
                    </div>

                    {/* <UploadFile setImageCallback={setImageFromChild} /> */}
                </div>
            </div>
        </div>   
        
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6 hidden">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Generic Skills</h3>
                    <p className="mt-1 text-sm text-gray-500">Chose through the categories we already have built.</p>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                            <fieldset className="border-t border-b border-gray-200">
                                <div className="divide-y divide-gray-200">
                                    {skills.map(({ title, description }, index) => {
                                        return (
                                            <div className="relative flex items-start py-4" key={index}>
                                                <div className="min-w-0 flex-1 text-sm">
                                                    <label htmlFor={`custom-checkbox-${index}`} className="font-medium text-gray-700">
                                                        {title}
                                                        <p id={`custom-checkbox-${index}-description`} className="text-gray-500">
                                                            {description}
                                                        </p>
                                                    </label>

                                                </div>
                                                <div className="ml-3 flex h-5 items-center">
                                                    <input
                                                        id={`custom-checkbox-${index}`}
                                                        name={title}
                                                        value={title}
                                                        checked={true}
                                                        onChange={() => handleOnChange(index)}
                                                        aria-describedby="comments-description"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                    
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Open Skills</h3>
                    <p className="mt-1 text-sm text-gray-500">Use to best to describe the kid skills, separating then through commas.</p>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="openSkills" className="block text-sm font-medium text-gray-700">
                                Skills
                            </label>
                            <input
                                type="text"
                                name="openSkills"
                                id="openSkills"
                                value={content.openSkills}
                                onChange={onChange}
                                className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Love Animals, Like to Write, Love science..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-end mt-3">
            <button
                type="reset"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Cancel
            </button>
            <button
                onClick={onSubmit}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pelorous-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Save
            </button>
        </div>
    </form>
    );
};

export default Offer;