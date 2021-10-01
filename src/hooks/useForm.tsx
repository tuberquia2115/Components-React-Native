import {useState} from 'react';

export const useForm = <T extends Object>(initialValue: T) => {
  const [form, setForm] = useState(initialValue);

  const onChange = <J extends Object>(value: J, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return {
    ...form,
    form: form,
    onChange,
  };
};
