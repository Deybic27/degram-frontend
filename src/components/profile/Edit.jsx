import "./scss/edit.scss"
import { useForm } from "react-hook-form"
import { getUserInfo } from "./js/profile-info";
import { createContext, useState } from "react";
import StatusMessage from "../utils/StatusMessage";

const EditContext = createContext();

function Edit() {
    const [lengthDescription, setLengthDescription] = useState(0)
    const [sendLoading, setSendLoading] = useState("Enviar")
    const [showStatusMessage, setShowStatusMessage] = useState("")
    
    const countLengthDescription = (e) => {
        setLengthDescription(e.target.value.length)
    }

    const PATTERNS = {
        phone: /^\d{10,11}$/,
        email: /^\w+@\w+\.[a-z]{2,}$/,
        fullname: /^([a-zA-Z]+\s?){1,6}$/,
        username: /^(\w){3,15}$/,
        password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040-\/.])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
        link: /^http(s?):\/{2}/,
        link_text: /^[\w\s]{3,50}$/,
        description: /[\w\s]/
    }
    const MESSAGES = {
        phone: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos."
        },
        email: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos."
        },
        fullname: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos."
        },
        username: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos: debe tener entre 3 y 15 dígitos alfanuméricos."

        },
        description: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos: solo dígitos alfanuméricos.",
            minLength: "Debe tener mínimo 3 dígitos",
            maxLength: "Debe tener máximo 90 dígitos",
        },
        link: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos: url inválida. (http:// o https://)"

        },
        link_text: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos: debe tener entre 3 y 15 dígitos alfanuméricos."

        },
        password: {
            req: "El campo es requerido.",
            invalid: "Debe tener entre 8 y 16 dígitos, y Como mínimo un número, una letra mínuscula, una letra mayúscula y un caracter especial."
        }
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: async () => getUserInfo()
    });
    
    const onSubmit = async (data) => {
        setSendLoading("Enviando...")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("fullname", data.fullname);
        urlencoded.append("link", data.link);
        urlencoded.append("link_text", data.link_text);
        urlencoded.append("description", data.description);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            credentials: 'include'
        };

        fetch("http://127.0.0.1:8000/api/v1/users/profile/info", requestOptions)
        .then(response => response)
        .then(result => {
            if (result.status == 401) {
                location.href = "/login"
            }
            setSendLoading("Enviado")
            setShowStatusMessage("show")
            setTimeout(() => {
                setSendLoading("Enviar")
                setShowStatusMessage("")
            }, 3000);
        })
        .catch(error => console.log('error', error));
    };

    return (
        <main className="edit-content">
            <h1>
                Editar perfil
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form__group">
                    <label className="form__group-label" htmlFor="phone">Número de celular</label>
                    <input
                        {...register("phone", {
                            required: {
                                value: true,
                                message: MESSAGES.phone.req
                            },
                            pattern: {
                                value: PATTERNS.phone,
                                message: MESSAGES.phone.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        name="phone"
                        readOnly
                        id="phone" />
                        {errors.phone && <span className="error-text">{errors.phone.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="email">Correo electrónico</label>
                    <input
                        {...register("email", {
                            // required: {
                            //     value: true,
                            //     message: MESSAGES.email.req
                            // },
                            pattern: {
                                value: PATTERNS.email,
                                message: MESSAGES.email.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        name="email"
                        readOnly
                        id="email" />
                        {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="username">Nombre de usuario</label>
                    <input
                        {...register("username", {
                            required: {
                                value: true,
                                message: MESSAGES.username.req
                            },
                            pattern: {
                                value: PATTERNS.username,
                                message: MESSAGES.username.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        readOnly
                        name="username"
                        id="username" />
                        {errors.username && <span className="error-text">{errors.username.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="fullname">Nombre completo</label>
                    <input
                        {...register("fullname", {
                            required: {
                                value: true,
                                message: MESSAGES.fullname.req
                            },
                            pattern: {
                                value: PATTERNS.fullname,
                                message: MESSAGES.fullname.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        name="fullname"
                        id="fullname" />
                        {errors.fullname && <span className="error-text">{errors.fullname.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="link">Link</label>
                    <input
                        {...register("link", {
                            // required: {
                            //     value: true,
                            //     message: MESSAGES.link.req
                            // },
                            pattern: {
                                value: PATTERNS.link,
                                message: MESSAGES.link.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        name="link"
                        id="link" />
                        {errors.link && <span className="error-text">{errors.link.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="link_text">Título del link</label>
                    <input
                        {...register("link_text", {
                            // required: {
                            //     value: true,
                            //     message: MESSAGES.link_text.req
                            // },
                            pattern: {
                                value: PATTERNS.link_text,
                                message: MESSAGES.link_text.invalid
                            }
                        })}
                        className="form__group-input"
                        type="text"
                        name="link_text"
                        id="link_text" />
                        {errors.link_text && <span className="error-text">{errors.link_text.message}</span>}
                </div>
                <div className="form__group">
                    <label className="form__group-label" htmlFor="description">Descripción</label>
                    <textarea
                        onKeyUp={countLengthDescription}
                        cols="10"
                        rows="10"
                        {...register("description", {
                            // required: {
                            //     value: true,
                            //     message: MESSAGES.description.req
                            // },
                            minLength: {
                                value: 3,
                                message: MESSAGES.description.minLength
                            },
                            maxLength: {
                                value: 90,
                                message: MESSAGES.description.maxLength
                            },
                            pattern: {
                                value: PATTERNS.description,
                                message: MESSAGES.description.invalid
                            }
                        })}
                        className="form__group-textarea"
                        name="description"
                        id="description" />
                    <p>{lengthDescription}/90</p>
                    {errors.description && <span className="error-text">{errors.description.message}</span>}
                </div>
                <div className="form__group">
                    <button className="form__group-btn btn-default" type="submit">{sendLoading}</button>
                </div>
            </form>
            <EditContext.Provider value={{showStatusMessage, setShowStatusMessage}} >
                <StatusMessage context={EditContext} text="Perfil guardado" />
            </EditContext.Provider>
        </main>
    )
}

export default Edit