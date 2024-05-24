import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={dialog}  >
            <div className="modal-backdrop bg-light">
                {children}
            </div>
        </dialog>,
        document.getElementById("modal-root")
    )
})

export default Modal;