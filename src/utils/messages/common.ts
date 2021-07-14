export class BuildMessages {
    constructor() {}

    static requiredMessage(property: string): string {
        return `The property ${property} is required!`;
    }
    static maxLengthMessage(property: string, maxCaracter: string): string {
        return `The property ${property} can contain a maximum of ${maxCaracter} caracters`;
    }
}
