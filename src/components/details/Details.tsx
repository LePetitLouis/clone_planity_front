import { DetailsContainer, DetailsHeader, DetailsHeaderContent, DetailsHeaderTitle, DetailsHeaderAddress, DetailsTitle, DetailsSubtitle, DetailsContent, DetailsContentTitle, DetailsContentMain, DetailsContentAside } from "./DetailsStyles";
import Button from "../ui/button/Button";
import ListBenefit from "../ui/list/benefit/ListBenefit";
import ListOpeningHours from "../ui/list/openingHours/ListOpeningHours";
import ListCollaborator from "../ui/list/collaborator/ListCollaborator";
import AboutCard from "../ui/card/about/AboutCard";

import { CiLocationOn } from "react-icons/ci";

import { IShop } from "../../index.d";

interface DetailsProps {
    shop: IShop;
}

const Details = ({ shop }: DetailsProps) => {
    return (
        <DetailsContainer>
            <DetailsHeader>
                <DetailsHeaderContent>
                    <div>
                        <DetailsHeaderTitle>{shop.name}</DetailsHeaderTitle>
                        <div style={{ 'display': 'flex', 'gap': '5px', 'alignItems': 'center' }}>
                            <CiLocationOn size={15} />
                            <DetailsHeaderAddress>{shop.address}, {shop.postalCode} {shop.city}</DetailsHeaderAddress>
                        </div>
                    </div>
                    <Button onClick={() => console.log('Prendre RDV')} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Prendre RDV</Button>
                </DetailsHeaderContent>
            </DetailsHeader>
            <DetailsTitle>Réserver en ligne pour un RDV chez {shop.name}</DetailsTitle>
            <DetailsSubtitle>24h24 - Confirmation immédiate</DetailsSubtitle>
            <DetailsContent>
                <DetailsContentMain>
                    <DetailsContentTitle>Choix de la prestation</DetailsContentTitle>
                    {shop.benefits && shop.benefits.map((benefit, index) => (
                        <ListBenefit key={index} title={benefit.title} description={benefit.description} benefits={benefit.benefits} />
                    ))}

                    {shop.collaborators && <ListCollaborator collaborators={shop.collaborators} />}
                    {shop.description && <AboutCard about={shop.description} />}
                </DetailsContentMain>

                <DetailsContentAside>
                    {shop.openingHours && <ListOpeningHours openingHours={shop.openingHours} />}
                </DetailsContentAside>
            </DetailsContent>
        </DetailsContainer>
    );
};

export default Details;