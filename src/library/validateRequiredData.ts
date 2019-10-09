import { IDataProps } from "./interface";
import { isEmpty, serializeObjectData } from "./util";

const onValidateRequired = (schema: IDataProps[], data: any, message?: string) => {
  const validateData = schema.map(item => {
    const { fieldName } = item;

    if (isEmpty(data[fieldName])) {
      return fieldName
    }

    return null
  });

  const serialize = validateData.filter(item => item)

  return {
    isValid: isEmpty(serialize),
    requiredFields: serialize
  };
};

export default onValidateRequired;