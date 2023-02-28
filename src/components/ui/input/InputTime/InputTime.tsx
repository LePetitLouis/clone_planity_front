import { LabelTextCustom } from "../inputText/InputTextStyles";
import { InputTimeContainer } from "./InputTimeStyles"

interface InputTimeProps{
  value: any
  label?: string
  classNameForm?: string
  onChange: (value: any) => void
}

const InputTime = ({value, label, classNameForm, onChange}: InputTimeProps) => {
  return (
    <InputTimeContainer className={classNameForm}>
      <LabelTextCustom>{label}
        <input type="time" name="time" value={value} onChange={(event) => onChange(event.target.value)}></input>
      </LabelTextCustom> 
    </InputTimeContainer>
  );
};

export default InputTime;