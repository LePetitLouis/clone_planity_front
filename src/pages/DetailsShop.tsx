import { useParams } from "react-router-dom";

const DetailsShop = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>DetailsShop {id}</h1>
        </div>
    );
};

export default DetailsShop;