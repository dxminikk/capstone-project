import React from "react"
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { ChevronLeft } from "lucide-react"
import toast from "react-hot-toast"

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/\+\d{10}/, "Phone number is not valid")
    .required("Required"),
  date: Yup.date().min(new Date(), "Date cannot be in the past").required("Required"),
  guests: Yup.number()
    .min(1, "Must have at least 1 guest")
    .max(10, "Maximum 10 guests allowed")
    .required("Required"),
  time: Yup.string().required("Required"),
  seating: Yup.string().required("Required"),
  occasion: Yup.string().required("Required")
})

const ReservePage = () => {
  const [progress, setProgress] = useState(0)

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    seating: "",
    occasion: ""
  }

  const FormField = ({ label, name, type = "text", ...props }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        aria-required="true"
        aria-describedby={`${name}-error`}
        className="font-karla border border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:shadow-lg outline-none text-dark px-4 py-1.5 rounded-xl w-full transition-all"
        {...props}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {msg}
          </div>
        )}
      />
    </div>
  )

  const PersonalDetails = () => (
    <div className="space-y-4" aria-label="Personal Details">
      <FormField label="Name" name="name" />
      <FormField label="Email" name="email" type="email" />
      <FormField label="Phone" name="phone" type="tel" />
    </div>
  )

  const ReservationDetails = () => (
    <div className="space-y-4" aria-label="Reservation Details">
      <FormField label="Date" name="date" type="date" />
      <FormField label="Preferred Time" name="time" type="time" />
      <FormField label="Number of Guests" name="guests" type="number" min="1" max="10" />
      <div className="mb-4">
        <label htmlFor="seating" className="block text-sm font-medium text-gray-700 mb-1">
          Seating Preference
        </label>
        <Field
          as="select"
          name="seating"
          id="seating"
          aria-required="true"
          aria-describedby="seating-error"
          className="font-karla border border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:shadow-lg outline-none text-dark px-4 py-1.5 rounded-xl w-full transition-all"
        >
          <option value="">Select preference</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
        </Field>
        <ErrorMessage
          name="seating"
          render={(msg) => (
            <div id="seating-error" className="text-red-500 text-sm mt-1">
              {msg}
            </div>
          )}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="occasion"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Occasion
        </label>
        <Field
          as="select"
          name="occasion"
          id="occasion"
          aria-required="true"
          aria-describedby="occasion-error"
          className="font-karla border border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:shadow-lg outline-none text-dark px-4 py-1.5 rounded-xl w-full transition-all"
        >
          <option value="">Select occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date Night</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </Field>
        <ErrorMessage
          name="occasion"
          render={(msg) => (
            <div id="occasion-error" className="text-red-500 text-sm mt-1">
              {msg}
            </div>
          )}
        />
      </div>
    </div>
  )

  const Confirmation = ({ values }) => (
    <div
      aria-label="Confirmation"
      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
    >
      <h3 className="font-semibold mb-4">Reservation Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(values).map(([key, value]) => (
          <React.Fragment key={key}>
            <p className="text-gray-600 capitalize">{key}:</p>
            <p>{value}</p>
          </React.Fragment>
        ))}
      </div>
      <p className="font-semibold">
        Please make sure every detail is correct, as we are unable to modify this later.
      </p>
    </div>
  )

  return (
    <article className="max-w-5xl mx-auto p-5 place-items-center">
      <h1 className="font-markazi text-5xl">Reserve A Table</h1>
      <div className="bg-white shadow-lg rounded-lg md:w-10/12 w-full p-6">
        <div className="grid grid-cols-3 gap-x-2 place-items-center mt-1 text-dark/60 mb-6">
          {["Personal", "Reservation", "Confirmation"].map((title, i) => (
            <p
              key={title}
              role="button"
              tabIndex={0}
              aria-current={progress === i ? "step" : undefined}
              onClick={() => setProgress(i)}
              className={`cursor-pointer border-b hover:-translate-y-1 transition-all ${
                progress === i
                  ? "border-b-black text-black font-semibold"
                  : "border-b-neutral-500"
              }`}
            >
              {title}
            </p>
          ))}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(progress)
            if (progress < 2) {
              setProgress(progress + 1)
              setSubmitting(false)
            } else {
              console.log("submitted, values: ", values)
              setSubmitting(false)
              toast.success("Your reservation has been confirmed!")
            }
          }}
        >
          {({ values, isValid, dirty, isSubmitting }) => (
            <Form aria-labelledby="reservation-form" className="space-y-6">
              {progress > 0 && (
                <button
                  type="button"
                  onClick={() => setProgress(progress - 1)}
                  className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                  aria-label="Go back to previous step"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
              )}

              {progress === 0 && <PersonalDetails />}
              {progress === 1 && <ReservationDetails />}
              {progress === 2 && <Confirmation values={values} />}

              <div className="flex justify-end pt-4">
                <button
                  type={progress === 2 ? "submit" : "button"}
                  onClick={() => {
                    progress === 2 ? console.log("Submit") : setProgress(progress + 1)
                  }}
                  className="w-full md:w-auto px-4 py-2 rounded-md text-white bg-primary hover:bg-primary/90"
                >
                  {progress === 2 ? "Confirm Reservation" : "Next"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </article>
  )
}

export default ReservePage
