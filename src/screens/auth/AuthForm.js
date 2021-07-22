import { useState } from "react";
import "./Auth.css";

export const AuthFrom = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginEr, setLoginEr] = useState("");
  const [pasL, setPasL] = useState("");
  const [pasLat, setPasLat] = useState("");

  let validate = (login, password) => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    let loginOk = pattern.test(login);
    let passwordLength = password.length >= 8;
    let passwordLatin = /^[a-zA-Z]+$/.test(password);
    if (loginOk && passwordLength && passwordLatin) {
      setLoginEr("");
      setPasL("");
      setPasLat("");
      return true;
    } else if (!loginOk && passwordLength && passwordLatin) {
      setLoginEr("Неправильный email");
      setPasL("");
      setPasLat("");
    } else if (!passwordLength && loginOk && passwordLatin) {
      setLoginEr("");
      setPasL("Минимальная длина пароля 8 символов");
      setPasLat("");
    } else if (!passwordLatin && loginOk && passwordLength) {
      setLoginEr("");
      setPasL("");
      setPasLat("Пароль должен содержать только латинские буквы");
    } else if (loginOk && !passwordLength && !passwordLatin) {
      setLoginEr("");
      setPasL("Минимальная длина пароля 8 символов");
      setPasLat("Пароль должен содержать только латинские буквы");
    } else if (!loginOk && passwordLength && !passwordLatin) {
      setLoginEr("Неправильный email");
      setPasL("");
      setPasLat("Пароль должен содержать только латинские буквы");
    } else if (!loginOk && !passwordLength && passwordLatin) {
      setLoginEr("Неправильный email");
      setPasL("Минимальная длина пароля 8 символов");
      setPasLat("");
    } else {
      setLoginEr("Неправильный email");
      setPasL("Минимальная длина пароля 8 символов");
      setPasLat("Пароль должен содержать только латинские буквы");
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (validate(login, password)) {
      props.setAuth(true);
    }
  };
  return (
    <div className="form">
      <div className="form_text">Simple Flight Check</div>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="email"className={loginEr ? 'danger' : null}>Логин:</label>
          <input type="text" onChange={(e) => setLogin(e.target.value)} className={loginEr ? 'danger_in' : null}/>
          {{ loginEr } ? <div className="text-danger">{loginEr}</div> : null}
        </div>

        <div class="form-group">
          <label for="comment"className={pasLat || pasL ? 'danger' : null}>Пароль:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={pasLat || pasL ? 'danger_in' : null}
          />

          {{ pasL } || { pasLat } ? (
            <div className="text-danger">
              {pasL}
              <br />
              {pasLat}
            </div>
          ) : null}
        </div>

        <input type="submit" value="Войти" class="btn" />
      </form>
    </div>
  );
};
