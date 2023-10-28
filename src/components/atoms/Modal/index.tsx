// node_modules
import { FC } from "react";
import { createPortal } from "react-dom";
// components
import Button from "../Button";
// types
import { IModal } from "./types";
// styles
import {
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledModalWrapper,
} from "./styled";

const Modal: FC<IModal> = (props) => {
  const { show, onCloseButtonClick, body, closeButtonText } = props;

  if (!show) {
    return null;
  }

  return createPortal(
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
