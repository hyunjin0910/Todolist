import { useState } from "react";

const useForm = ({ initialValue, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const newErrors = validate ? validate(values) : {};
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error){
       return error
      }
    }
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
