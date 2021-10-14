import React from 'react';
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled
} from './UserInformation.style';

interface UserInformationProps {
    avatar: string;
    username: string;
    rating: number;
    description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({avatar, username, rating, description}) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={avatar} />
            <UserName>{username}</UserName>
            <RatingStyled readOnly value={rating} />
            <UserDescription>{description}</UserDescription>
        </UserInformationContainer>
    );
}

export default UserInformation;