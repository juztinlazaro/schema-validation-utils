import { IDataProps } from "./interface";
import { isEmpty, serializeData } from "./util";

const onValidateRequired = (schema: IDataProps[], data: any, message?: string) => {
  const validateData = schema.map(item => {
    const { fieldName } = item;

    if (isEmpty(data[fieldName])) {
      return {
        [`${fieldName}`]: message ? `${fieldName} ${message}` : `${fieldName} is required.`
      };
    }

    return {
      data: {}
    };
  });

  return {
    isValid: isEmpty(validateData),
    requiredData: serializeData(validateData)
  };
};

export default onValidateRequired;