import { InputCheckboxContainer } from "./InputCheckboxStyles";


interface InputCheckBoxProps {
  items: Items[]
  onChange: (value: any) => void
  typeCheckbox?:any
}

interface Items {
  name?: string
  label?: string
}



const InputCheckbox = ({items, onChange, typeCheckbox}: InputCheckBoxProps) => {
  
  return (
    <InputCheckboxContainer>
    {
      items.map((element:any, key:number) => (
        <label className="custom-checkbox-wrap" key={key}>
          <input type="checkbox" id={element.name} 
            onChange={(e) => onChange(
              typeCheckbox == "register_pro" ?
                {types: element.name, do: e.target.checked}
              :
                e.target.checked
              )}
            />            
          <label className="custom-checkbox" htmlFor={element.name}></label>
          <span className="label">{element.label ? element.label : element.name}</span>
        </label>
      ))
    }
    </InputCheckboxContainer>
  );
};

export default InputCheckbox;