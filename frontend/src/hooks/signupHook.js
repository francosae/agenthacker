import { useState } from "react";
import { authHook } from "./authHook";
import { useAuthContext } from "../contexts/user";
import API from "../services/apiClient";

export const signupHook = () => {
	const { user, setUser } = useAuthContext();
    const [accountCreated, setAccountCreated] = useState(null)
	const { form, errors, setErrors, handleOnInputChange } =
		authHook({ user });
	const [isProcessing, setIsProcessing] = useState(false);
	const handleOnSubmit = async () => {
		setIsProcessing(true);
		const { data, error } = await API.registerUser({
            userData: {
                email: form.email,
                password: form.password,
                firstName: form.firstName,
                username: form.username,
            }
        })

		if (data) {
			setUser(data.newUser);
			API.setToken(data.token);
            setAccountCreated(true)
		}
		setIsProcessing(false);
	};

	return {
		form,
		errors,
		isProcessing,
		handleOnInputChange,
		handleOnSubmit,
        accountCreated
	};
};