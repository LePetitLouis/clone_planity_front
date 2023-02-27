import Dashboard from "../../components/dashboard/Dashboard";
import ListOpeningHoursForm from "../../components/ui/list/openingHours/openingHoursForm/ListOpeningHoursForm";

const HomeDash = () => {

    const openingHours = [
        {
            "day": 1,
            "opening": "09:00",
            "closing": "18:00"
        },
        {
            "day": 2,
            "opening": "09:00",
            "closing": "18:00"
        },
        {
            "day": 3,
            "opening": "09:00",
            "closing": "18:00"
        },
        {
            "day": 4,
            "opening": "09:00",
            "closing": "18:00"
        },
        {
            "day": 5,
            "opening": "09:00",
            "closing": "18:00"
        },
        { 
            "day": 6,
            "opening": "",
            "closing": ""
        },
        {
            "day": 0,
            "opening": "",
            "closing": ""
        }
    ]

    return (
        <>
            <Dashboard openingHours={openingHours}></Dashboard>
        </>
    );
};

export default HomeDash;