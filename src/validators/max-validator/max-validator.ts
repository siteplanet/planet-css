import { PlanetValueInterface } from "../../components/planet-input/planet-value-interface";
import { Validator } from "../validator";

export const MaxValidator: (max: number) => Validator<PlanetValueInterface<number>> = (max: number) => {
    return {
        validate: (value: PlanetValueInterface<number>) => {
            console.log(value, max);
            return true;
        },
        errorMessage: 'You must enter a valid fruit name'
    }
};
