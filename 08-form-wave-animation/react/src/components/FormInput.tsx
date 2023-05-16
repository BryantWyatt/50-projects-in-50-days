import "./FormInput.css";

interface InputProps {
  name: string;
  waveAnimation?: boolean,
}

const Input = ({ name, waveAnimation=true }: InputProps) => {
  return (
    <div className="form-control">
      <input type="text" required />
      <label>
        {name.split("").map((letter, idx) => ( 
          <span style={{ transitionDelay: waveAnimation ? `${idx * 50}ms` : ""}}>{letter}</span>
        ))}
      </label>
    </div>
  );
};

export default Input;
