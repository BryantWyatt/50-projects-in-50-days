import Input from "./FormInput";
import "./FormWaveAnimation.css";

const FormWaveAnimation = () => {

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <Input name="Email" />
        <Input name="Password" />
        <button className="btn">Login</button>
        <p className="text">Don't have an account?</p>
        <a href="#">Register</a>
      </form>
    </div>
  );
};

export default FormWaveAnimation;
