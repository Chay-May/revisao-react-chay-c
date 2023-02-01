import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import { GlobalContext } from "../GlobalSatate/GlobalContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const context = useContext(GlobalContext);

  const { login } = context;
  const navigate = useNavigate();

  return (
    <LoginForm
      login={login}
      form={form}
      onChange={onChange}
      navigate={navigate}
      
    />
  );
};
export default Login;
