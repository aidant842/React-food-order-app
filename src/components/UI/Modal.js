import { createPortal } from "react-dom";
//Styles
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            {createPortal(
                <Backdrop onClick={props.onClose} />,
                document.getElementById("overlays")
            )}
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById("overlays")
            )}
        </>
    );
};

export default Modal;
