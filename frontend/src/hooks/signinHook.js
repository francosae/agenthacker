import { useState } from "react";
import { useAuthContext } from "../contexts/user";
import API from "../services/apiClient";
import { authHook } from "./authHook";
import { useNavigate } from "react-router-dom";

export const signinHook = () => {
    const navigate = useNavigate()
    const { user, setUser } = useAuthContext();
    const { form, errors, setErrors, handleOnInputChange } =
      authHook({ user });
    const [isProcessing, setIsProcessing] = useState(false);
    const handleOnSubmit = async () => {
      setIsProcessing(true);

      const { data, error } = await API.loginUser({
        userData: {
        email: form.email,
        password: form.password,
        }  
    });

      if (data) {
        setUser(data.existingUser);
        API.setToken(data.token);
        navigate("/home")
      }
      setIsProcessing(false);
    };
  
    return {
      form,
      errors,
      isProcessing,
      handleOnInputChange,
      handleOnSubmit,
    };
  };