
import styles from './Modal.module.css';
import {createPortal} from "react-dom";
import {Dispatch, Fragment, PropsWithChildren, ReactNode} from "react";

const Backdrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = (props: ModalProps) => {
    return <div className={styles.modal} onClick={props.hideCart} >
        <div>{props.children}</div>
    </div>
}
type ModalProps = {
    hideCart: Dispatch<any>,
    children: ReactNode
}
export const Modal = (props: ModalProps) => {
    const overlays = document.getElementById('overlays');
    return (
        <Fragment>
            {createPortal(<Backdrop/>, overlays!)}
            {createPortal(<ModalOverlay hideCart={props.hideCart}>{props.children}</ModalOverlay>, overlays!)}
        </Fragment>
    )
}