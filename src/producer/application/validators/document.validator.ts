import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Document } from 'src/producer/domain/value-objects/document.value-object';

@ValidatorConstraint({ name: 'DocumentValidator', async: false })
export class DocumentValidator implements ValidatorConstraintInterface {
    validate(document: string, args: ValidationArguments) {
        try {
            new Document(document);
            return true;
        } catch (error) {
            return false;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return 'O documento "${value}" é inválido!';
    }
}