import { CollaboratorCardContainer, CollaboratorCardAvatar, CollaboratorCardAvatarLetter, CollaboratorCardName } from "./CollaboratorCardStyles";

interface CollaboratorCardProps {
    name: string
}

const CollaboratorCard = ({ name }: CollaboratorCardProps) => {
    return (
        <CollaboratorCardContainer>
            <CollaboratorCardAvatar>
                <CollaboratorCardAvatarLetter>{name.charAt(0)}</CollaboratorCardAvatarLetter>
            </CollaboratorCardAvatar>
            <CollaboratorCardName>{name}</CollaboratorCardName>
        </CollaboratorCardContainer>
    );
};

export default CollaboratorCard;