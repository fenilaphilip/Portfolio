import { useRef, forwardRef, useImperativeHandle } from "react"
const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    });
    return (
        <dialog ref={dialog} >
            {children}
        </dialog>
    )
})

export default Modal;