import { CallToPriceProvider } from "../../../HOCs";
import { persianWords } from "../../../translation";
import { PersonDetails } from "../../molecules";
import { Layout } from "../../organisms";
import { BuyInsurance } from "../../templates";
import { http } from "../../../config";
import { InsuranceTypesServices } from "../../../services";
import { useEffect } from "react";

const BuyInsurancePage = () => {
  const { firstName, lastName } = JSON.parse(
    localStorage.getItem("azki-fake-register") as string
  );

  return (
    <Layout
      pageTitle={persianWords.pageTitles.insuranceComparisonAndPurchaseSystem}
      details={<PersonDetails firstName={firstName} lastName={lastName} />}
    >
      <CallToPriceProvider>
        <BuyInsurance />
      </CallToPriceProvider>
    </Layout>
  );
};

export default BuyInsurancePage;
