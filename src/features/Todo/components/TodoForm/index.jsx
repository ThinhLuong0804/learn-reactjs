import React from 'react';
import PropTypes from 'prop-types';
import InputFiled from '../../../../components/Form-Controls/InputFiled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TodoForm({ onSubmit }) {
  const schema = yup
    .object({
      title: yup.string().required('Please enter title').min(2, 'Title is too short'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log('TODO FORM: ', values);
    if (onSubmit) onSubmit(values);

    form.reset();
  };

  return (
    <div>
      Todo Form
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFiled name="title" label="Todo" form={form} />
      </form>
    </div>
  );
}

export default TodoForm;
