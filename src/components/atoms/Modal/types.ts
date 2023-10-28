import { MouseEventHandler, ReactNode } from "react";

export interface IModal {
  show: boolean;
  onCloseButtonClick: MouseEventHandler<HTMLButtonElement>;
  closeButtonText: string;
  body: ReactNode;
}
