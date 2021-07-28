import styled from "styled-components";

import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import Seperator from "../components/auth/Seperator";

import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import PageTitle from "../components/PageTitle";

// Facebook Log In
const FaceBookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  return (
    <AuthLayout>
      <PageTitle title="LogIn" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log In" />
        </form>
        <Seperator />
        <FaceBookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FaceBookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an accout?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
