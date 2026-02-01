import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsImageUrl(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isImageUrl",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== "string") return false;

          try {
            const url = new URL(value); // csak érvényes URL
            return /\.(jpg|jpeg|png|gif|webp)$/i.test(url.pathname); // és kép kiterjesztés
          } catch {
            return false; // nem URL
          }
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid image URL ending with jpg, jpeg, png, gif, or webp`;
        },
      },
    });
  };
}
