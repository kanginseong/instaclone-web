import styled from "styled-components";

import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FatLink } from "../components/shared";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

import BottomBox from "../components/auth/BottomBox";
import routes from "./routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>
            Sign up to see Photos and videos from your friends.
          </SubTitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log In" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" link={routes.home} linkText="Log In" />
    </AuthLayout>
  );
}
export default SignUp;
