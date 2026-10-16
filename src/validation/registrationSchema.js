import * as Yup from "yup";

export const registrationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(60, "Name must be 60 characters or fewer.")
    .required("Please enter your full name."),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address.")
    .required("Email address is required."),

  phone: Yup.string()
    .matches(
      /^[0-9+\-\s()]{7,20}$/,
      "Enter a valid phone number."
    )
    .required("Phone number is required."),

  course: Yup.string()
    .required("Please select a program."),

  password: Yup.string()
    .min(8, "Use at least 8 characters.")
    .matches(/[A-Z]/, "Add at least one uppercase letter.")
    .matches(/[0-9]/, "Add at least one number.")
    .required("Create a password."),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match.")
    .required("Please confirm your password."),

  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms to continue."),
});