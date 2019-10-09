import React from 'react';
import './App.css';
import { IDataProps } from './library/interface';
import onValidateRequired from './library/validateRequiredData';
import onValidateSchema from './library/validateSchema';
import onValidateDataType from './library/validateDataType';


const schema: IDataProps[] = [
  {
    fieldName: 'todo_id',
    fieldType: 'string'
  },
  {
    fieldName: 'first_name',
    fieldType: 'string'
  },
  {
    fieldName: 'age',
    fieldType: 'string'
  }
];

const data = {
  todo_id: 1,
  last_name: '321312'
}


const App: React.FC = () => {
  const isValidRequired = onValidateRequired(schema, data);
  console.log('isValidRequired', isValidRequired)

  const returnOnlySchema = onValidateSchema(schema, data);
  console.log('returnOnlySchema', returnOnlySchema)

  const validateDataTypes = onValidateDataType(schema, data)
  console.log('validateDataTypes', validateDataTypes)

  return (
    <div className="App">
      <h2>Schema-validation</h2>
    </div>
  );
}

export default App;
