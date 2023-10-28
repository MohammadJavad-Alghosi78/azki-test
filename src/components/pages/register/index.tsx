// components
import { Layout } from "../../organisms";
import { Register } from "../../templates";
// translations
import { persianWords } from "../../../translation";

const RegisterPage = () => (
  <Layout details={persianWords.RegistrationProcess.register}>
    <Register />
  </Layout>
);

export default RegisterPage;
