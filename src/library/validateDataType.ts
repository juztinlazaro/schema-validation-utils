import { IDataProps } from "./interface";
import { isEmpty } from "./util";

const onValidateDataType = (schema: IDataProps[], data: any, message?: string) => {
  const validateData = schema.map((item: IDataProps) => {
    const { fieldName, fieldType } = item;

    if (!isEmpty(data[fieldName]) && typeof data[fieldName] !== fieldType) {
      return fieldName
    }

    return null
  });

  const getInvalidDataTypeError = validateData.filter(item => item);

  return {
    isValid: isEmpty(getInvalidDataTypeError),
    fields: getInvalidDataTypeError
  };
};

export default onValidateDataType;