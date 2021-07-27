import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 10px 0px;
  text-align: center;
`;

function Login() {
  return (
    <Container>
      <div>
        <TopBox>
          <h1>Instagram</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" placeholder="Log in" />
          </form>
          <span>Or</span>
          <span>Log in with Facebook</span>
        </TopBox>
        <BottomBox>
          <span>Don't have an account?</span> <a href="#">Sign up</a>
        </BottomBox>
      </div>
    </Container>
  );
}
export default Login;
