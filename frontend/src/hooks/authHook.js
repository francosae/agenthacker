import { useState } from "react";

export const authHook = ({ user }) => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});

	const handleOnInputChange = (event) => {
		setForm((f) => ({ ...f, [event.target?.name]: event.target?.value }));
	};

	return {
		form,
		errors,
		setErrors,
		handleOnInputChange,
	};
};