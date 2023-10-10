import "./scss/login.scss"
import  { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {

    const labelAnimation = (e) => {
        const inputValue = e.target.value;
        const label = e.target.parentNode.querySelector(".form__group-label")
        if (inputValue.length > 0) {
            label.classList.add("transform")
        } else {
            label.classList.remove("transform")
        }
    }

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
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", data.userName);
        urlencoded.append("password", window.btoa(data.password));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            credentials: 'include'
        };

        fetch("http://127.0.0.1:8000/api/v1/auth/login", requestOptions)
        .then(response => response)
        .then(result => {
            if (result.status == 202) {
                location.href = "/"
            }
        })
        .catch(error => console.log('error', error));
    }
    return (
        <>
            <section className="login">
                <div className="login__container">
                    <span className="login__container_logo">
                        <img className="login__container_logo_img" src="/logoDegram.png" alt="Logo Degram" />
                    </span>
                    <div className="login__container_form">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="userName">Teléfono, usuario o correo electrónico</label>
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
                                <button className="form__group-btn btn-default" type="submit">Inicias sesión</button>
                            </div>
                        </form>
                    </div>
                    <div className="login__container_separator">
                        <hr className="login__container_separator_line" />
                        <span>O</span>
                        <hr className="login__container_separator_line" />
                    </div>
                    <div className="login__container_info">
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
                
                <div className="login__container">
                    <div className="login__container_footer">
                        <p>¿No tienes una cuenta? &nbsp;
                            <Link to="/register">
                                <strong>Regístrate</strong>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login