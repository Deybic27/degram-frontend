import { useContext, useState } from "react"

import "./scss/modal.scss"

export function Modal({children, context, open, title}) {
    const { setModal } = useContext(context);
    if(typeof open === "undefined") open = false;
    [window.openModal, window.setOpenModal] = useState(open);
    let activeClass = ""
    if (openModal) {
        activeClass = "show"
    }

    const handleCloseModal = () => {
        setModal(<></>)
    }

    return (
        <div className={`modal-container ${activeClass}`}>
            <div className="modal">
                <div className="modal-header">
                    <span>{title}</span>
                    <a onClick={handleCloseModal}>X</a>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <p>Estos es el footer</p>
                </div>
            </div>
        </div>
    )
}