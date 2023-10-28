// node_modules
import { FC, useContext, useState } from "react";
// components
import BuyInsurance from ".";
import { Modal } from "../../atoms";
import { ResultModal } from "../../molecules";
// context
import { CallToPriceContext } from "../../../context";
// translations
import { persianWords } from "../../../translation";

const BuyInsuranceContainer: FC = () => {
  const data = useContext(CallToPriceContext);

  const finalData = Object.entries(data).filter(
    (item) => !(item[1] instanceof Function)
  );
  const [isShowModal, setIsShowModal] = useState(false);

  const handleSubmit = () => {
    setIsShowModal(true);
  };
  return (
    <>
      <Modal
        show={isShowModal}
        onCloseButtonClick={() => setIsShowModal(false)}
        closeButtonText={persianWords.shared.close}
        body={<ResultModal data={finalData} />}
      />
      <BuyInsurance onSubmit={handleSubmit} />
    </>
  );
};

export default BuyInsuranceContainer;
