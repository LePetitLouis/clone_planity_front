import { ListCollaboratorHeader, ListCollaboratorContainer } from "./ListCollaboratorStyles";
import CollaboratorCard from "../../card/collaborator/CollaboratorCard";

import { ICollaborator } from "../../../../index.d";

interface ListCollaboratorProps {
    collaborators: ICollaborator[]
}

export const ListCollaborator = ({ collaborators }: ListCollaboratorProps) => {
    return (
        <>
            <ListCollaboratorHeader>Collaborateurs</ListCollaboratorHeader>
            <ListCollaboratorContainer>
                {collaborators.map((collaborator, index) => (
                    <CollaboratorCard
                        key={index}
                        name={collaborator.name}
                    />
                ))}
            </ListCollaboratorContainer>
        </>
    );
};

export default ListCollaborator;