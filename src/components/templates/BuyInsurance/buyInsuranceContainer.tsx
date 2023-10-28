import { FC, useContext, useState } from "react";
import BuyInsurance from ".";
import { Modal } from "../../atoms";
import { persianWords } from "../../../translation";
import { CallToPriceContext } from "../../../context";
import { ResultModal } from "../../molecules";

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
