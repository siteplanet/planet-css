export interface Validator<A> {
    key: string;
    validate: (x: A) => boolean;
    errorMessage?: string;
}
