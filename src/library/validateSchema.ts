import { IDataProps } from "./interface";
import { isEmpty, serializeData } from "./util";

const onValidateSchema = (schema: IDataProps[], data: any) => {
  const validateData = schema.map((item: IDataProps) => {
    const { fieldName } = item;
    const newData: any = {};

    if (!isEmpty(data[fieldName])) {
      newData[fieldName] = data[fieldName];
    }

    return newData;
  });

  const arrayToObject = { ...validateData };
  
  return serializeData(arrayToObject);
};

export default onValidateSchema;
