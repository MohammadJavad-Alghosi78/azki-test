// components
import { PersonDetails } from "../../molecules";
import { Layout } from "../../organisms";
import { BuyInsurance } from "../../templates";
import { useNavigate } from "react-router-dom";
// HOCs
import { CallToPriceProvider } from "../../../HOCs";
// translations
import { persianWords } from "../../../translation";
import { useEffect, useState } from "react";

const BuyInsurancePage = () => {
  const navigate = useNavigate();
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("azki-fake-register")) {
      const { firstName, lastName } = JSON.parse(
        localStorage.getItem("azki-fake-register") ?? ""
      );
      setFirsName(firstName);
      setLastName(lastName);
    } else {
      navigate("/");
    }
  }, [navigate]);

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
