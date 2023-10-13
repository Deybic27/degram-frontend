import { useState } from "react"

import "./scss/modal.scss"

export function Modal({children}) {
    [window.openModal, window.setOpenModal] = useState(false);
    let activeClass = ""
    if (openModal) {
        activeClass = "show"
    }

    return (
        <div className={`modal-container ${activeClass}`}>
            <div className="modal">
                <div className="modal-header">
                    <span>Foto de perfil</span>
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
export const handleCloseModal = () => setOpenModal(false)
export const handleOpenModal = () => setOpenModal(true)