import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IShop } from "../index.d";
import { API } from "../services";

import Details from "../components/details/Details";

import { useAppDispatch } from "../store/hook";
import { setShop } from "../store/slice/bookingSlice";

const DetailsShop = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();
    const [shop, setCurrentShop] = useState<IShop | null>(null);

    useEffect(() => {
        console.log("shop id ", id);

        const fetchShop = async () => {
            const shop = await API.shop.getDetailsShop(Number(id));
            if (shop) {
                setCurrentShop(shop);
                dispatch(setShop(shop));
            }
            else alert("Erreur lors de la récupération des informations du magasin");
        };

        fetchShop();
    }, [id, dispatch]);

    return (
        <>
            {shop && <Details shop={shop} />}
        </>
    );
};

export default DetailsShop;