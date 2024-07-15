import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../features/auth/auth.store";

export type TLoginFormValues = {
  email: string;
  password: string;
};

const initialValues: TLoginFormValues = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (values: TLoginFormValues) => {
    await login(values);
    navigate("/counter");
  };

  return (
    <div className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
      <h5>Login</h5>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => {
            return (
              <Form>
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary full-width"
                  >
                    Login
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Link to="/sign-up">Sign-up</Link>
    </div>
  );
};

export default LoginPage;
