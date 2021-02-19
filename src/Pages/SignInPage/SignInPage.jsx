import { useState } from "react";
import "./SignInPage.styles.scss";
import { RenderInput, SubmitButton } from "../../Components/Fields";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form className="container__block">
        <h1>Book Catalogue</h1>
        <h3>Sign in</h3>
        <RenderInput
          name="email"
          type="text"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RenderInput
          name="password"
          labelActive=""
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p className="error">{authError}</p> */}
        <SubmitButton value="Sign in" />
      </form>
    </div>
  );
}

export default SignInPage;
