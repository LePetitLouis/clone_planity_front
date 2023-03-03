import { useEffect, useReducer, useState } from "react";

import { TraderRegisterContainer, TraderRegisterTitle, TraderRegisterContent, RegisterProContainerCheckbox } from "./RegisterProStyles";
import InputText from "../../input/inputText/InputText";
import InputPhone from "../../input/inputPhone/InputPhone";
import InputTextarea from "../../input/inputTextarea/InputTextarea";
import Button from "../../button/Button";
import Stepline from "../../stepline/Stepline";

import { AddressAutofill } from "@mapbox/search-js-react"

import { isValidPhoneNumber } from "react-phone-number-input";
import { IBenefits, ITypeTrader } from "../../../../index.d";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";

interface IStepOneForm {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

interface IStepTwoForm {
    companyName: string;
    companyAddress: string;
    companyZipCode: string;
    companyCity: string;
    companyCountry: string;
}

interface IStepThreeForm {
    benefits: IBenefits[];
    categories: string[];
    description: string;
    types: ITypeTrader[];
}

interface ITypeTraderType{
    type: string;
    value: boolean;
}
  
interface typeOfTraderProps{
    types: ITypeTraderType[];
}

const items = [
    {
        name: "Coiffeurs"
    },
    {
        name: "Barbiers"
    },
    {
        name: "Manucure"
    },
    {
        name: "Institut de beauté"
    },
    {
        name: "Tatoueurs"
    }
]

const TraderRegister = () => {
    const [currentStep, setCurrentStep] = useState(3);

    const initialStepOneForm: IStepOneForm = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    };
    const [stepOneState, updateStepOneState] = useReducer((state: IStepOneForm, newState: IStepOneForm) => ({ ...state, ...newState }), initialStepOneForm);

    const initialStepTwoForm: IStepTwoForm = {
        companyName: "",
        companyAddress: "",
        companyZipCode: "",
        companyCity: "",
        companyCountry: "",
    };
    const [stepTwoState, updateStepTwoState] = useReducer((state: IStepTwoForm, newState: IStepTwoForm) => ({ ...state, ...newState }), initialStepTwoForm);

    const initialStepThreeForm: IStepThreeForm = {
        benefits: [],
        categories: [],
        description: "",
        types: [],
    };
    const [stepThreeState, updateStepThreeState] = useReducer((state: IStepThreeForm, newState: IStepThreeForm) => ({ ...state, ...newState }), initialStepThreeForm);

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        companyName: "",
        companyAddress: "",
        companyZipCode: "",
        companyCity: "",
        companyCountry: "",
        benefits: "",
        categories: "",
        types: ""
    });

    const initialTypeOfTrader: typeOfTraderProps = {
        types: []
    };
      
    const [typeOfTrader, setTypeOfTrader] = useReducer((state: typeOfTraderProps, newState: typeOfTraderProps) => ({ ...state, ...newState }), initialTypeOfTrader);
    
    const [oldArray, setOldArray] = useState<any[] | [typeOfTraderProps]>([undefined])

    const handleNextStep = () => {
        setError({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            companyName: "",
            companyAddress: "",
            companyZipCode: "",
            companyCity: "",
            companyCountry: "",
            benefits: "",
            categories: "",
            types: ""
        });

        if (currentStep === 1) {
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Check if all fields are filled
            if (stepOneState.firstName !== "" && stepOneState.lastName !== "" && stepOneState.phone !== "" && stepOneState.email !== "" && isValidPhoneNumber(stepOneState.phone) && regexEmail.test(stepOneState.email)) {
                setCurrentStep(2);
            }

            // Error handling
            if (stepOneState.firstName === "") setError(prevState => ({ ...prevState, firstName: "Merci de saisir votre prénom" }));
            if (stepOneState.lastName === "") setError(prevState => ({ ...prevState, lastName: "Merci de saisir votre nom" }));
            if (stepOneState.phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
            else if (stepOneState.phone !== "" && !isValidPhoneNumber(stepOneState.phone)) setError((prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone valide" })));
            if (stepOneState.email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
            else if (stepOneState.email !== "" && !regexEmail.test(stepOneState.email)) setError(prevState => ({ ...prevState, email: "Merci de saisir un email valide" }));
            if (stepOneState.password === "") setError(prevState => ({ ...prevState, password: "Merci de saisir un mot de passe" }));
        } else if (currentStep === 2) {
            // Check if all fields are filled
            if (stepTwoState.companyName !== "" && stepTwoState.companyAddress !== "" && stepTwoState.companyZipCode !== "" && stepTwoState.companyCity !== "" && stepTwoState.companyCountry !== "") {
                setCurrentStep(3);
            }

            // Error handling
            if (stepTwoState.companyName === "") setError(prevState => ({ ...prevState, companyName: "Merci de saisir le nom de votre entreprise" }));
            if (stepTwoState.companyAddress === "") setError(prevState => ({ ...prevState, companyAddress: "Merci de saisir l'adresse de votre entreprise" }));
            if (stepTwoState.companyZipCode === "") setError(prevState => ({ ...prevState, companyZipCode: "Merci de saisir le code postal de votre entreprise" }));
            if (stepTwoState.companyCity === "") setError(prevState => ({ ...prevState, companyCity: "Merci de saisir la ville de votre entreprise" }));
            if (stepTwoState.companyCountry === "") setError(prevState => ({ ...prevState, companyCountry: "Merci de saisir le pays de votre entreprise" }));
        } else if (currentStep === 3) {
            // Check if all fields are filed
            if (stepThreeState.benefits.length && stepThreeState.categories.length && stepThreeState.types.length) {
                // show modal success 
            }

            // Error handling
            if (stepThreeState.benefits.length) setError(prevState => ({ ...prevState, benefits: "Merci de saisir au moins une prestation" }))
            if (stepThreeState.categories.length) setError(prevState => ({ ...prevState, categories: "Merci de saisir au moins une catégorie" }))
            if (stepThreeState.types.length) setError(prevState => ({ ...prevState, types: "Merci de saisir au moins un type de commerce" }))
        }
        
    }

    const getTypeTrader = (value:any) => {
        setOldArray((oldArray) => [...oldArray, value]);
    }

    const filterArray = (item:any) => {
        if(item == undefined){
            oldArray.splice(0, 1);
        }
    }

    const filterArrayFalse = (item:any) => {
        if(Object.keys(oldArray).length >= 1 && item != undefined) {
            const itemsIndexesFalse = oldArray.flatMap((obj, i) => obj.types.do == false ? i : []);
            itemsIndexesFalse.map((index) =>
                oldArray.splice(index, 1)
            )
        }
    }

    const checkValueArray = (value:any) => {
        oldArray.filter(filterArray);
        if(oldArray.find(obj => obj != undefined)){
            console.log(oldArray.find(obj => obj == obj))

            const itemsIndexes = oldArray.flatMap((obj, i) => obj.types.types === value.types.types ? i : []);

            itemsIndexes.map((index) =>
                oldArray.splice(index, 1)
            )
            
        }
    }
    
    const handleOnChange = (value:any) => {
        setTypeOfTrader({...typeOfTrader, types: value })
        getTypeTrader(value);
        checkValueArray(value);
        updateStepThreeState({...stepThreeState, types: value })
    }
    
    useEffect(() => {
        oldArray.filter(filterArrayFalse);
        console.log(oldArray)
    })

    return (
        <TraderRegisterContainer>
            <TraderRegisterTitle>Créer un compte professionnel</TraderRegisterTitle>
            <Stepline steps={["1", "2", "3"]} activeStep={currentStep} onClick={(step) => setCurrentStep(step)} />

            <TraderRegisterContent onSubmit={e => e.preventDefault()}>
                {currentStep === 1 && (
                    <>
                        <InputText
                            label="Prénom"
                            placeholder="Prénom"
                            border="var(--grey-500)" 
                            rounded 
                            backgroundInputColor="var(--white)" 
                            colorLabel="var(--grey-900)" 
                            type="text"
                            value={stepOneState.firstName}
                            onChange={(value) => updateStepOneState({ ...stepOneState, firstName: value })}
                            error={error.firstName}
                        />
                        <InputText
                            label="Nom"
                            placeholder="Nom"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepOneState.lastName}
                            onChange={(value) => updateStepOneState({ ...stepOneState, lastName: value })}
                            error={error.lastName}
                        />
                        <InputPhone
                            label="Téléphone Professionnel"
                            placeholder="Téléphone Professionnel"
                            defaultCountry="FR"
                            value={stepOneState.phone}
                            onChange={(value) => updateStepOneState({ ...stepOneState, phone: value })}
                            error={error.phone}
                        />
                        <InputText
                            label="Email"
                            placeholder="Email"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="email"
                            value={stepOneState.email}
                            onChange={(value) => updateStepOneState({ ...stepOneState, email: value })}
                            error={error.email}
                        />
                        <InputText 
                            label="Mot de passe *" 
                            border="var(--grey-500)" 
                            backgroundInputColor="var(--white)" 
                            rounded 
                            colorLabel="var(--grey-900)" 
                            type="password" 
                            value={stepOneState.password} 
                            placeholder="Mot de passe" 
                            error={error.password} 
                            onChange={(value) => updateStepOneState({ ...stepOneState, password: value })}
                        />
                        <Button 
                            color="var(--white)" 
                            backgroundColor="var(--grey-900)" 
                            borderColor="var(--white)" 
                            height="48px" 
                            rounded 
                            onClick={() => handleNextStep()}
                        >
                            Suivant
                        </Button>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <InputText
                            label="Nom de l'entreprise"
                            placeholder="Nom de l'entreprise"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.companyName}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, companyName: value })}
                            error={error.companyName}
                        />
                        <AddressAutofill accessToken={process.env.REACT_APP_API_KEY_MAPBOX || ""}>
                            <InputText
                                label="Adresse"
                                placeholder="Adresse"
                                border="var(--grey-500)"
                                rounded
                                backgroundInputColor="var(--white)"
                                colorLabel="var(--grey-900)"
                                type="text"
                                autoComplete="shipping address-line1"
                                value={stepTwoState.companyAddress}
                                onChange={(value) => updateStepTwoState({ ...stepTwoState, companyAddress: value })}
                                error={error.companyAddress}
                            />
                        </AddressAutofill>
                        <InputText
                            label="Code postal"
                            placeholder="Code postal"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.companyZipCode}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, companyZipCode: value })}
                            error={error.companyZipCode}
                        />
                        <InputText
                            label="Ville"
                            placeholder="Ville"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.companyCity}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, companyCity: value })}
                            error={error.companyCity}
                        />
                        <InputText
                            label="Pays"
                            placeholder="Pays"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.companyCountry}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, companyCountry: value })}
                            error={error.companyCountry}
                        />
                        <Button 
                            color="var(--white)" 
                            backgroundColor="var(--grey-900)" 
                            borderColor="var(--white)" 
                            height="48px" 
                            rounded 
                            onClick={() => handleNextStep()}
                        >
                            Suivant
                        </Button>
                    </>
                )}
                {currentStep === 3 && (
                    <>
                        <InputTextarea
                            label="Description de l'entreprise"
                            placeholder="Description de l'entreprise"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            value={stepThreeState.description}
                            onChange={(value) => updateStepThreeState({ ...stepThreeState, description: value })}
                        />
                        <RegisterProContainerCheckbox>
                            <InputCheckbox items={items} typeCheckbox="register_pro" onChange={(value) => handleOnChange({...typeOfTrader, types: value})} />
                        </RegisterProContainerCheckbox>
                    </>
                )}
            </TraderRegisterContent>
        </TraderRegisterContainer>
    );
};

export default TraderRegister;