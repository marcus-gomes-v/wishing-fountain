type authContextType = {
    useSession: object
    user: boolean | null
    login: () => void
    logout: () => void
}

type participant = {
    organizerName: string | undefined
    organization: string | undefined
    plannedEvent: string | undefined
    twitter: string | undefined
    linkedin: string | undefined
    country: string | undefined
    state: string | undefined
    city: string | undefined
    numberParticipatingChild: number
    createdAt: Date | undefined
    uid: string | undefined
    schoolTypes?: {
        kindergarten: boolean;
        primarySchool: boolean;
        secondarySchool: boolean;
    }
}

type SchoolTypes = {
    kindergarten: boolean;
    primarySchool: boolean;
    secondarySchool: boolean;
    [key: string]: boolean;
};

export interface iUser {
    uid: string;
    email: string;
    name: string;
    imageUrl: string;
    code: string;
    type: string;
    teams: [];
    invited: boolean;
    fullname?: string;
    invitationCodes?: [];
    phone_numbers?: [
        string
    ]
    documents?: [
        {
            "object": string;
            "id": string;
            "type": string;
            "number": string;
        }
    ]
    address?: {
        object: string;
        street: string;
        complementary: string;
        street_number: string;
        neighborhood: string;
        city: string;
        state: string;
        zipcode: string;
        country: string;
        id: number;
    }
    transactions?: [iUserTransaction]
}