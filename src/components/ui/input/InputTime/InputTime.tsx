import { LabelTextCustom } from "../inputText/InputTextStyles";
import { InputTimeContainer } from "./InputTimeStyles"

interface InputTimeProps{
  value: any
  label?: string
  onChange: (value: any) => void
}

const InputTime = ({value, label, onChange}: InputTimeProps) => {
  return (
    <InputTimeContainer>
      <LabelTextCustom>{label}
        <input type="time" name="time" value={value} onChange={(event) => onChange(event.target.value)}></input>
      </LabelTextCustom> 
    </InputTimeContainer>
  );
};

export default InputTime;