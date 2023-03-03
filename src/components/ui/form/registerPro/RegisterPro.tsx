import { useEffect, useReducer, useState } from "react";

import { TraderRegisterContainer, TraderRegisterTitle, TraderRegisterContent, RegisterProContainerCheckbox, RegisterProContainerCheckboxItem } from "./RegisterProStyles";
import InputText from "../../input/inputText/InputText";
import InputPhone from "../../input/inputPhone/InputPhone";
import InputTextarea from "../../input/inputTextarea/InputTextarea";
import Button from "../../button/Button";
import Stepline from "../../stepline/Stepline";

import { AddressAutofill } from "@mapbox/search-js-react"

import { isValidPhoneNumber } from "react-phone-number-input";
import { ITypeShopeTrade } from "../../../../index.d";  
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import { API } from "../../../../services/index";
import { useAppDispatch } from "../../../../store/hook";
import { login } from "../../../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

interface IStepOneForm {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

interface IStepTwoForm {
    name: string;
    address: string;
    zip_code: string;
    city: string;
    country: string;
}

interface IStepThreeForm {
    description: string;
    id_kind: ITypeShopeTrade[];
}
  
interface typeOfTraderProps{
    id_kind: any;
}

const items = [
    {
        name: 1,
        label: "Coiffeurs"
    },
    {
        name: 2,
        label: "Barbiers"
    },
    {
        name: 3,
        label: "Manucure"
    },
    {
        name: 4,
        label: "Institut de beauté"
    },
    {
        name: 5,
        label: "Tatoueurs"
    }
]

const TraderRegister = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const allEqual = (object:any) => {
        Object.keys(object).forEach(function(key, index) {
            console.log((object[key] == "" || object[key] === undefined) ? true : false);
        });
    }
    
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
        name: "",
        address: "",
        zip_code: "",
        city: "",
        country: "",
    };
    const [stepTwoState, updateStepTwoState] = useReducer((state: IStepTwoForm, newState: IStepTwoForm) => ({ ...state, ...newState }), initialStepTwoForm);

    const initialStepThreeForm: IStepThreeForm = {
        description: "",
        id_kind: [],
    };
    const [stepThreeState, updateStepThreeState] = useReducer((state: IStepThreeForm, newState: IStepThreeForm) => ({ ...state, ...newState }), initialStepThreeForm);

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        name: "",
        address: "",
        zip_code: "",
        city: "",
        country: "",
        description: "",
        id_kind: ""
    });

    const initialTypeOfTrader: typeOfTraderProps = {
        id_kind: []
    };
      
    const [typeOfTrader, setTypeOfTrader] = useReducer((state: typeOfTraderProps, newState: typeOfTraderProps) => ({ ...state, ...newState }), initialTypeOfTrader);
    
    const [oldArray, setOldArray] = useState<any[] | any[]>([undefined])

    const [newArray, setNewArray] = useState<any[] | any[]>([])

    const handleSetCheckbox = () => {
        oldArray.map((item, i) => (
            setNewArray(newArray => [...newArray, oldArray[i].id_kind.types])
        ))
    }

    const handleSetAllValue = () => {
        updateStepThreeState({...stepThreeState, id_kind: newArray })
    }

    const handleRegisterShop = async () => {

        setError({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            name: "",
            address: "",
            zip_code: "",
            city: "",
            country: "",
            description: "",
            id_kind: ""
        });

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (stepOneState.firstName === "") setError(prevState => ({ ...prevState, firstName: "Merci de saisir votre prénom" }));
        if (stepOneState.lastName === "") setError(prevState => ({ ...prevState, lastName: "Merci de saisir votre nom" }));
        if (stepOneState.phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
        else if (stepOneState.phone !== "" && !isValidPhoneNumber(stepOneState.phone)) setError((prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone valide" })));
        if (stepOneState.email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
        else if (stepOneState.email !== "" && !regexEmail.test(stepOneState.email)) setError(prevState => ({ ...prevState, email: "Merci de saisir un email valide" }));
        if (stepOneState.password === "") setError(prevState => ({ ...prevState, password: "Merci de saisir un mot de passe" }));

        if (stepTwoState.name === "") setError(prevState => ({ ...prevState, name: "Merci de saisir le nom de votre entreprise" }));
        if (stepTwoState.address === "") setError(prevState => ({ ...prevState, address: "Merci de saisir l'adresse de votre entreprise" }));
        if (stepTwoState.zip_code === "") setError(prevState => ({ ...prevState, zip_code: "Merci de saisir le code postal de votre entreprise" }));
        if (stepTwoState.city === "") setError(prevState => ({ ...prevState, city: "Merci de saisir la ville de votre entreprise" }));
        if (stepTwoState.country === "") setError(prevState => ({ ...prevState, country: "Merci de saisir le pays de votre entreprise" }));

        if (stepThreeState.description === "") setError(prevState => ({ ...prevState, description: "Merci de saisir une description" }))
        if (stepThreeState.id_kind.length === 0) setError(prevState => ({ ...prevState, id_kind: "Merci de saisir au moins un type de commerce" }))

        if (stepOneState.firstName !== "" && stepOneState.lastName !== "" && stepOneState.phone !== "" && stepOneState.email !== "" && isValidPhoneNumber(stepOneState.phone) && regexEmail.test(stepOneState.email) && stepTwoState.name !== "" && stepTwoState.address !== "" && stepTwoState.zip_code !== "" && stepTwoState.city !== "" && stepTwoState.country !== "" && (stepThreeState.id_kind.length !== 0 || stepThreeState.id_kind === newArray) && stepThreeState.description !== "") {
            const data = await API.shop.registerShop(stepOneState.firstName, stepOneState.lastName, stepOneState.phone, stepOneState.email, stepOneState.password, stepTwoState.name, stepTwoState.address, stepTwoState.zip_code, stepTwoState.city, stepTwoState.country, stepThreeState.description, stepThreeState.id_kind)
            console.log(data);
            if (data) {
              dispatch(login(data))
              navigate("/dashboard-trader")
            } else {
              alert('Erreur lors de l\'inscription');
            }
        }
    }

    const handleNextStep = () => {

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        setError({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            name: "",
            address: "",
            zip_code: "",
            city: "",
            country: "",
            description: "",
            id_kind: ""
        });

        if (currentStep === 1) {

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
            if (stepTwoState.name !== "" && stepTwoState.address !== "" && stepTwoState.zip_code !== "" && stepTwoState.city !== "" && stepTwoState.country !== "") {
                setCurrentStep(3);
            }

            // Error handling
            if (stepTwoState.name === "") setError(prevState => ({ ...prevState, name: "Merci de saisir le nom de votre entreprise" }));
            if (stepTwoState.address === "") setError(prevState => ({ ...prevState, address: "Merci de saisir l'adresse de votre entreprise" }));
            if (stepTwoState.zip_code === "") setError(prevState => ({ ...prevState, zip_code: "Merci de saisir le code postal de votre entreprise" }));
            if (stepTwoState.city === "") setError(prevState => ({ ...prevState, city: "Merci de saisir la ville de votre entreprise" }));
            if (stepTwoState.country === "") setError(prevState => ({ ...prevState, country: "Merci de saisir le pays de votre entreprise" }));
        } else if (currentStep === 3) {
            // newArray.filter(filterArrayFalse);
            // Check if all fields are filed
            if (stepThreeState.description === "" && stepThreeState.id_kind.length === 0) {
                allEqual(stepOneState)
                allEqual(stepTwoState)
                allEqual(stepThreeState)
            }
            if (stepOneState.firstName !== "" && stepOneState.lastName !== "" && stepOneState.phone !== "" && stepOneState.email !== "" && isValidPhoneNumber(stepOneState.phone) && regexEmail.test(stepOneState.email) && stepTwoState.name !== "" && stepTwoState.address !== "" && stepTwoState.zip_code !== "" && stepTwoState.city !== "" && stepTwoState.country !== "" && stepThreeState.id_kind.length !== 0 && stepThreeState.description !== "") {
                setCurrentStep(4);
            }

            // Error handling
            if (stepThreeState.description === "") setError(prevState => ({ ...prevState, description: "Merci de saisir une description" }))
            if (stepThreeState.id_kind.length === 0) setError(prevState => ({ ...prevState, id_kind: "Merci de saisir au moins un type de commerce" }))
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
            const itemsIndexesFalse = oldArray.flatMap((obj, i) => obj.id_kind.do == false ? i : []);
            itemsIndexesFalse.map((index) =>
                oldArray.splice(index, 1)
            )
        }
    }

    const checkValueArray = (value:any) => {
        oldArray.filter(filterArray);
        if(oldArray.find(obj => obj != undefined)){

            const itemsIndexes = oldArray.flatMap((obj, i) => obj.id_kind.types === value.id_kind.types ? i : []);

            itemsIndexes.map((index) =>
                oldArray.splice(index, 1)
            )
        }
    }

    
    const handleOnChange = (value:any) => {
        setTypeOfTrader({...typeOfTrader, id_kind: value })
        getTypeTrader(value);
        checkValueArray(value);
    }
    
    useEffect(() => {
        oldArray.filter(filterArrayFalse);
        console.log(oldArray)
        console.log(stepOneState);
        console.log(stepTwoState);
        console.log(stepThreeState);
    })

    return (
        <TraderRegisterContainer>
            <TraderRegisterTitle>Créer un compte professionnel</TraderRegisterTitle>
            <Stepline steps={["1", "2", "3", "4"]} activeStep={currentStep} onClick={(step) => setCurrentStep(step)} />

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
                            value={stepTwoState.name}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, name: value })}
                            error={error.name}
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
                                value={stepTwoState.address}
                                onChange={(value) => updateStepTwoState({ ...stepTwoState, address: value })}
                                error={error.address}
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
                            value={stepTwoState.zip_code}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, zip_code: value })}
                            error={error.zip_code}
                        />
                        <InputText
                            label="Ville"
                            placeholder="Ville"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.city}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, city: value })}
                            error={error.city}
                        />
                        <InputText
                            label="Pays"
                            placeholder="Pays"
                            border="var(--grey-500)"
                            rounded
                            backgroundInputColor="var(--white)"
                            colorLabel="var(--grey-900)"
                            type="text"
                            value={stepTwoState.country}
                            onChange={(value) => updateStepTwoState({ ...stepTwoState, country: value })}
                            error={error.country}
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
                            <RegisterProContainerCheckboxItem>                                
                                <InputCheckbox items={items} typeCheckbox="register_pro" onChange={(value) => handleOnChange({...typeOfTrader, id_kind: value})} />
                            </RegisterProContainerCheckboxItem>
                            <Button 
                                color="var(--white)" 
                                backgroundColor="var(--grey-900)" 
                                borderColor="var(--white)" 
                                height="48px" 
                                rounded 
                                onClick={() => handleSetCheckbox()}
                            >
                                Vérifier le type
                            </Button>
                        </RegisterProContainerCheckbox>
                        <Button 
                            color="var(--white)" 
                            backgroundColor="var(--grey-900)" 
                            borderColor="var(--white)" 
                            height="48px" 
                            rounded 
                            onClick={() => (handleSetAllValue(), handleNextStep())}
                        >
                            Vérifier les toutes vos données
                        </Button>
                    </>
                )}
                {currentStep === 4 && (
                    <>
                        <Button 
                            color="var(--white)" 
                            backgroundColor="var(--grey-900)" 
                            borderColor="var(--white)" 
                            height="48px" 
                            rounded 
                            onClick={handleRegisterShop}
                        >
                            Créer
                        </Button>
                    </>
                )}
            </TraderRegisterContent>
        </TraderRegisterContainer>
    );
};

export default TraderRegister;