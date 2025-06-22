import {
    ToastMessage__Toast,
    ToastMessage__CloseButton
} from './ToastMessage.styles.js'
import { useEffect, useState } from "react";

export default function ToastMessage({ message, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message, onClose]);

  const handleClose = () => {
    setShow(false);
    onClose?.();
  };

  return message ? (
    <ToastMessage__Toast show={show}>
      {message}
      <ToastMessage__CloseButton onClick={handleClose}>✖</ToastMessage__CloseButton>
    </ToastMessage__Toast>
  ) : null;
}