import { InputCheckboxContainer } from "./InputCheckboxStyles";


interface InputCheckBoxProps {
  items: Items[]
}

interface Items {
  name: string
}


const InputCheckbox = ({items}: InputCheckBoxProps) => {
  
  return (
    <InputCheckboxContainer>
    {items.map((item:any, key:number) => (
      <label className="custom-checkbox-wrap" key={key}>
        <input type="checkbox" id={item.name}/>
        <label className="custom-checkbox" htmlFor={item.name}></label>
        <span className="label">{item.name}</span>
      </label>
    ))}
    </InputCheckboxContainer>
  );
};

export default InputCheckbox;