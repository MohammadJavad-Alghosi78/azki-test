import { FC } from "react";
import ReactDOM from "react-dom";
import { IModal } from "./types";
import {
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledModalWrapper,
} from "./styled";
import Button from "../Button";

const Modal: FC<IModal> = (props) => {
  const { show, onCloseButtonClick, body, closeButtonText } = props;
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalBody>{body}</StyledModalBody>
        <StyledModalFooter>
          <Button variant="outlined" onClick={onCloseButtonClick}>
            {closeButtonText}
          </Button>
        </StyledModalFooter>
      </StyledModal>
    </StyledModalWrapper>,
    document.body
  );
};

export default Modal;
