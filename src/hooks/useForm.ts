import { useState } from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onRadioChange = ({ target }: any, value: boolean) => {
    const { name } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onRadioChange,
    onResetForm,
  };
};
