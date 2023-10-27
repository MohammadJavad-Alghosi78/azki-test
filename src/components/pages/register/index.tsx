import { persianWords } from "../../../translation";
import { Layout } from "../../organisms";
import { Register } from "../../templates";

const RegisterPage = () => {
  return (
    <Layout details={persianWords.RegistrationProcess.register}>
      <Register />
    </Layout>
  );
};

export default RegisterPage;
