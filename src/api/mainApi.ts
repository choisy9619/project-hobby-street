import axios from 'axios';

interface addMemberProps {
    email: string;
    name: string;
}

const addMember = async ({ email, name }: addMemberProps) => {
    const apiUrl = `${process.env.REACT_APP_STIBEE_URL}`;

    return await axios.post(
        apiUrl,
        {
            eventOccuredBy: 'SUBSCRIBER',
            subscribers: [{ email, name }],
        },
        {
            headers: {
                AccessToken:
                    '31aefa3bce9d6da9dd1a7906976d359179d146e068508134c9f0ca386edc2047af48c11eb22fe0fe7366a2a66655517ce6119b93c99a4b4cc7d6717a0b23633a',
                'Content-Type': 'application/json',
            },
        }
    );
};

export default addMember;
