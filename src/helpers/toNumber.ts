import { AppError } from "@handlers/error/AppError";

type IsNumberValidationModel = {
  value: any;
  error: string;
};

const toNumber = ({ value, error }: IsNumberValidationModel): number => {
  const aux = Number(value);
  if (Number.isNaN(aux)) throw new AppError("BAD_REQUEST", error);
  return aux;
};

export { toNumber };
