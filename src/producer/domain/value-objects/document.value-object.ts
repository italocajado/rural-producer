export class Document{
    private value: string;
    private readonly isCpf: boolean;

    constructor(document: string){
        this.value = document.replace(/[^\d]/g, '');
        this.isCpf = this.value.length === 11;

        if(!this.isValid()){
            throw new Error('Documento inválido!');
        }
    }

    isValid(): boolean {
        return this.isCpf ? this.isValidateCpf() : this.isValidateCnpj();
    }

    private isValidateCpf(): boolean {
        if (this.value.length !== 11 || /^(\d)\1{10}$/.test(this.value)) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(this.value.charAt(i)) * (10 - i);
        }
        let remainder = 100 - (sum % 11);
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        if (remainder !== parseInt(this.value.charAt(9))) {
            return false;
        }
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(this.value.charAt(i)) * (11 - i);
        }
        remainder = 100 - (sum % 11);
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        return remainder === parseInt(this.value.charAt(10));
    }

    private isValidateCnpj(): boolean {
        if (this.value.length !== 14 || /^(\d)\1{13}$/.test(this.value)) {
            return false;
        }
        let size = this.value.length - 2;
        let numbers = this.value.substring(0, size);
        const digits = this.value.substring(size);
        let sum = 0;
        let pos = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += parseInt(numbers.charAt(size - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== parseInt(digits.charAt(0))) {
            return false;
        }
        size += 1;
        numbers = this.value.substring(0, size);
        sum = 0;
        pos = size - 7;

        for (let i = size; i >= 1; i--) {
            sum += parseInt(numbers.charAt(size - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        return result === parseInt(digits.charAt(1));
    }

    getValue(): string{
        return this.value;
    }
    getFormattedValue(): string{
        if(this.isCpf){
            return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
        return this.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

    }
}