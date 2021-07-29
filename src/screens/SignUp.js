import styled from "styled-components";

import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FatLink } from "../components/shared";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

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

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccout(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: "onChange",
  });

  const history = useHistory();

  // OnCompleted Function comes from useMutation.
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home, {
      message: "Account created. Please log in.",
      username,
      password,
    });
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="SignUp" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>
            Sign up to see Photos and videos from your friends.
          </SubTitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "First Name is required",
            })}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <Input
            ref={register}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <Input
            ref={register({
              required: "Email is required",
            })}
            name="email"
            type="text"
            placeholder="Email"
          />
          <Input
            ref={register({
              required: "Username is required",
            })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            ref={register({
              required: "Password is required",
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" link={routes.home} linkText="Log In" />
    </AuthLayout>
  );
}
export default SignUp;
