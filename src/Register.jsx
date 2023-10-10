import "./scss/register.scss"
import { Link, redirect } from "react-router-dom"
import { useForm } from "react-hook-form"

const labelAnimation = (e) => {
    const inputValue = e.target.value;
    const label = e.target.parentNode.querySelector(".form__group-label")
    if (inputValue.length > 0) {
        label.classList.add("transform")
    } else {
        label.classList.remove("transform")
    }
}


function Register() {
    const PATTERNS = {
        emailOrPhone: /^\d{10,11}$|^\w+@\w+\.[a-z]{2,}$/,
        fullName: /^([a-zA-Z]+\s?){1,6}$/,
        userName: /^(\w){3,15}$/,
        password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040-\/.])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    }
    const MESSAGES = {
        emailOrPhone: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos."
        },
        fullName: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos."
        },
        userName: {
            req: "El campo es requerido.",
            invalid: "Datos inválidos: debe tener entre 3 y 15 dígitos alfanuméricos."

        },
        password: {
            req: "El campo es requerido.",
            invalid: "Debe tener entre 8 y 16 dígitos, y Como mínimo un número, una letra mínuscula, una letra mayúscula y un caracter especial."
        }
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", data.userName);
        urlencoded.append("fullname", data.fullName);
        if(Number.isInteger(parseInt(data.emailOrPhone))) urlencoded.append("phone", parseInt(data.emailOrPhone));
        if (!parseInt(data.emailOrPhone)) urlencoded.append("email",  data.emailOrPhone)
        urlencoded.append("password", window.btoa(data.password));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            credentials: 'include'
        };

        fetch("http://127.0.0.1:8000/api/v1/auth/register", requestOptions)
        .then(response => response)
        .then(result => {
            if (result.status == 201) {
                location.href = "/"
            }
        })
        .catch(error => console.log('error', error));
    };
    // console.log(watch("emailOrPhone"));
    // watch((value, { name, type }) =>
    //   console.log(value, name, type)
    // )

    return (
        <>
            <section className="register">
                <div className="register__container">
                    <span className="register__container_logo">
                        <img className="register__container_logo_img" src="/logoDegram.png" alt="Logo Degram" />
                    </span>
                    <div className="register__container_form">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="emailOrPhone">Número de celular o correo electrónico</label>
                                <input
                                    {...register("emailOrPhone", {
                                        required: {
                                            value: true,
                                            message: MESSAGES.emailOrPhone.req
                                        },
                                        pattern: {
                                            value: PATTERNS.emailOrPhone,
                                            message: MESSAGES.emailOrPhone.invalid
                                        }
                                    })}
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="text"
                                    name="emailOrPhone"
                                    id="emailOrPhone" />
                                    {errors.emailOrPhone && <span className="error-text">{errors.emailOrPhone.message}</span>}
                            </div>
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="fullName">Nombre completo</label>
                                <input
                                    {...register("fullName", {
                                        required: {
                                            value: true,
                                            message: MESSAGES.fullName.req
                                        },
                                        pattern: {
                                            value: PATTERNS.fullName,
                                            message: MESSAGES.fullName.invalid
                                        }
                                    })}
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="text"
                                    name="fullName"
                                    id="fullName" />
                                    {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
                            </div>
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="userName">Nombre de usuario</label>
                                <input
                                    {...register("userName", {
                                        required: {
                                            value: true,
                                            message: MESSAGES.userName.req
                                        },
                                        pattern: {
                                            value: PATTERNS.userName,
                                            message: MESSAGES.userName.invalid
                                        }
                                    })}
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="text"
                                    name="userName"
                                    id="userName" />
                                    {errors.userName && <span className="error-text">{errors.userName.message}</span>}
                            </div>
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="password">Contraseña</label>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: MESSAGES.password.req
                                        },
                                        pattern: {
                                            value: PATTERNS.password,
                                            message: MESSAGES.password.invalid
                                        }
                                    })}
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="password"
                                    name="password"
                                    id="password" />
                                    {errors.password && <span className="error-text">{errors.password.message}</span>}
                            </div>
                            <div className="form__group">
                                <p>Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</p>
                            </div>
                            <div className="form__group">
                                <button className="form__group-btn btn-default" type="submit">Regístrarte</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="register__container_separator">
                        <hr className="register__container_separator_line" />
                        <span>O</span>
                        <hr className="register__container_separator_line" />
                    </div> */}
                    {/* <div className="register__container_info">   
                    </div> */}
                </div>
                
                <div className="register__container">
                    <div className="register__container_footer">
                        <p>¿No tienes una cuenta?&nbsp;
                            <Link to="/login">
                                <strong>Inicia sesión</strong>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register