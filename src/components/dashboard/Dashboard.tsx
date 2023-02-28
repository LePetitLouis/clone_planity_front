import ListBenefitForm from "../ui/list/benefitForm/ListBenefitForm";
import ListOpeningHoursForm from "../ui/list/openingHours/openingHoursForm/ListOpeningHoursForm";
import { DashBoardContainer } from "./DashboardStyles";

interface DashBoardProps {
  openingHours: any;
}

const Dashboard = ({openingHours}: DashBoardProps) => {
  return (
    <DashBoardContainer>
      <ListBenefitForm title="Renseignez vos préstations" description="Homme"/>
      <ListOpeningHoursForm openingHours={openingHours}/>
    </DashBoardContainer>
  );
};

export default Dashboard;