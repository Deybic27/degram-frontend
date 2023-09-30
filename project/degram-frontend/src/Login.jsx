import "./scss/login.scss"

const labelAnimation = (e) => {
    const inputValue = e.target.value;
    const label = e.target.parentNode.querySelector(".form__group-label")
    if (inputValue.length > 0) {
        label.classList.add("transform")
    } else {
        label.classList.remove("transform")
    }
}

function Login() {
    return (
        <>
            <section className="login">
                <div className="login__container">
                    <span className="login__container_logo">
                        <img className="login__container_logo_img" src="/logoDegram.png" alt="Logo Degram" />
                    </span>
                    <div className="login__container_form">
                        <form className="form" action="">
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="user">Teléfono, usuario o correo electrónico</label>
                                <input
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="text"
                                    name="user"
                                    id="user" />
                            </div>
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="password">Contraseña</label>
                                <input
                                    onKeyUp={labelAnimation}
                                    className="form__group-input"
                                    type="password"
                                    name="password"
                                    id="password" />
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
                    <div className="login__container_reset">
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
                
                <div className="login__container">
                    <div className="login__container_register">
                        <p>¿No tienes una cuenta? <strong>Regístrate</strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login