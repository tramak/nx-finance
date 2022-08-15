import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button, View } from 'react-native';

interface ICreateValues {
  name: string;
}

export const Create = () => {
  const initialValues: ICreateValues = {
    name: ''
  };

  const onSubmit = (values: ICreateValues) => {
    console.log(values);
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <View>
          <Button title="Отправить" onPress={() => handleSubmit()} />
        </View>
      )}
    />
  )
};
