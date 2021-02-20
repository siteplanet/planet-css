import { PlanetValueInterface } from "../../components/planet-input/planet-value-interface";
import { Validator } from "../validator";

export const RequiredValidator: () => Validator<PlanetValueInterface<string>> = () => {
    return {
        key: 'required',
        validate: (value: PlanetValueInterface<string>) => {
            if (!value || (value && !(value?.value))) {
                return true;
            }
        },
        errorMessage: 'Required'
    }
};
