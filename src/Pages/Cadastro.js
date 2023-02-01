
import { useContext, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import CadastroForm from "../Components/CadastroForm";
import { GlobalContext } from "../GlobalSatate/GlobalContext";

const Cadastro = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate()

  const context = useContext(GlobalContext);
  const { cadastro } = context;

  return (
    <div>
      <CadastroForm onChange={onChange} form={form} cadastro={cadastro}  navigate={navigate}/>
    </div>
  );
};
export default Cadastro;
