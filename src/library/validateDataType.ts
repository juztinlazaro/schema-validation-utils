import { IDataProps } from "./interface";
import { isEmpty } from "./util";

const onValidateDataType = (schema: IDataProps[], data: any, message?: string) => {
  const validateData = schema.map((item: IDataProps) => {
    const { fieldName, fieldType } = item;

    if (!isEmpty(data[fieldName]) && typeof data[fieldName] !== fieldType) {
      return {
        data: message ? `${fieldName} ${message}` : `${fieldName} is invalid type.`
      };
    }

    return {
      data: null
    };
  });

  const getInvalidDataTypeError = validateData.filter(item => item.data);

  return {
    isValid: isEmpty(getInvalidDataTypeError),
    data: getInvalidDataTypeError
  };
};

export default onValidateDataType;