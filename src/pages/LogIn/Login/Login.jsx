import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/Provider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue) == true) {
      setDisabled(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Log in</title>
      </Helmet>

      <div className="hero p-20 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {" "}
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha text"
                  placeholder="write the above captcha"
                  className="input input-bordered"
                />
                <label className="form-control mt-4">
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-success btn-xs"
                  >
                    validate the captcha
                  </button>
                </label>
              </div>

              <div className="form-control mt-4">
                <div className="form-control mt-6">
                  <button disabled={disabled} className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
