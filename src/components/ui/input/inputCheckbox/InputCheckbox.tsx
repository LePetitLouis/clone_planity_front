import { InputCheckboxContainer } from "./InputCheckboxStyles";


interface InputCheckBoxProps {
  items: Items[]
  onChange: (value: any) => void
}

interface Items {
  name: string
}


const InputCheckbox = ({items, onChange}: InputCheckBoxProps) => {
  
  return (
    <InputCheckboxContainer>
    {items.map((item:any, key:number) => (
      <label className="custom-checkbox-wrap" key={key}>
        <input type="checkbox" id={item.name} onChange={(e) => onChange({types: item.name})}/>
        <label className="custom-checkbox" htmlFor={item.name}></label>
        <span className="label">{item.name}</span>
      </label>
    ))}
    </InputCheckboxContainer>
  );
};

export default InputCheckbox;