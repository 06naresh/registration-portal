import { useState } from "react";
import { Form, Formik } from "formik";
import { ArrowRight } from "lucide-react";

import FormField from "../form/FormField.jsx";
import PasswordField from "../form/PasswordField.jsx";
import Button from "../ui/Button.jsx";
import Notice from "../ui/Notice.jsx";

import { registrationSchema } from "../../validation/registrationSchema.js";
import { registerUser } from "../../services/registrationApi.js";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

export default function RegistrationForm({ onSuccess }) {
  const [serverError, setServerError] = useState("");

  async function handleSubmit(values, { setSubmitting, resetForm }) {
    setServerError("");

    try {
      await registerUser(values);
      onSuccess(values.fullName.trim());
      resetForm();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      {({
        isSubmitting,
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form className="space-y-4" noValidate>
          {serverError && (
            <Notice title="Unable to register">
              {serverError}
            </Notice>
          )}

          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <FormField
              name="fullName"
              label="Full name"
              placeholder="e.g. Alex Morgan"
              autoComplete="name"
              required
            />

            <FormField
              name="email"
              label="Email address"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
            />

            <FormField
              name="phone"
              label="Phone number"
              placeholder="+91 98765 43210"
              type="tel"
              autoComplete="tel"
              required
            />

            <div className="flex min-w-0 flex-col gap-2">
              <label
                htmlFor="course"
                className="text-xs font-bold text-slate-700"
              >
                Program of interest <span className="text-rose-500">*</span>
              </label>

              <select
                id="course"
                name="course"
                value={values.course}
                onChange={(event) =>
                  setFieldValue("course", event.target.value)
                }
                onBlur={() => setFieldTouched("course", true)}
                aria-invalid={Boolean(touched.course && errors.course)}
                className={`h-11.25 w-full rounded-lg border bg-slate-50 px-3 text-xs text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 ${
                  touched.course && errors.course
                    ? "border-rose-400"
                    : "border-slate-200"
                }`}
              >
                <option value="">Select a program</option>
                <option value="web-development">Web Development</option>
                <option value="data-analytics">Data Analytics</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="cybersecurity">Cybersecurity</option>
              </select>

              {touched.course && errors.course && (
                <p className="text-[10px] text-rose-600">
                  {errors.course}
                </p>
              )}
            </div>

            <PasswordField
              name="password"
              label="Password"
              placeholder="Create a strong password"
            />

            <PasswordField
              name="confirmPassword"
              label="Confirm password"
              placeholder="Enter password again"
            />
          </div>

          <p className="text-[10px] leading-4 text-slate-400">
            Use 8+ characters, including an uppercase letter and a number.
          </p>

          <div>
            <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-slate-500">
              <input
                type="checkbox"
                name="terms"
                checked={values.terms}
                onChange={(event) =>
                  setFieldValue("terms", event.target.checked)
                }
                onBlur={() => setFieldTouched("terms", true)}
                className="mt-1 size-4 shrink-0 cursor-pointer accent-violet-600"
              />

              <span>
                I agree to the{" "}
                <a
                  href="#terms"
                  className="font-semibold text-brand hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and privacy policy.
              </span>
            </label>

            {touched.terms && errors.terms && (
              <p className="ml-6 mt-1 text-[10px] text-rose-600">
                {errors.terms}
              </p>
            )}
          </div>

          <Button type="submit" loading={isSubmitting}>
            Create my account <ArrowRight size={18} />
          </Button>

          <p className="pt-1 text-center text-[10px] text-slate-400">
            No credit card required <span className="mx-1">·</span>
            Takes less than 2 minutes
          </p>
        </Form>
      )}
    </Formik>
  );
}