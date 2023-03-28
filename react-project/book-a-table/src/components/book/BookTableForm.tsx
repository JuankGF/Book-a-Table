import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import Field from "../utils/Field";

const BookTableSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().optional(),
  booking_date: Yup.string().required(),
  arrival_time: Yup.string().required(),
  dinners: Yup.number().required().min(0).max(12),
  occasion: Yup.string()
    .optional()
    .oneOf(["anniversary", "birthday", "engagement"]),
  restaurant_area: Yup.string().required().oneOf(["inside", "outside"]),
});

const initialValues = {
  email: "",
  name: "",
  phone: "",
  booking_date: "",
  arrival_time: "",
  dinners: 1,
  occasion: "",
  restaurant_area: "outside",
};

export default function BookTableForm() {
  const currentDate = new Date();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookTableSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="py-5 px-2">
          <Field
            type="text"
            placeholder="Enter name"
            field="name"
            label="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="mb-3"
            error={errors.name}
            touched={touched.name}
            required
          />
          <Field
            type="email"
            placeholder="Enter email"
            field="email"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="mb-3"
            error={errors.email}
            touched={touched.email}
            required
          />
          <Field
            type="tel"
            placeholder="Enter phone"
            field="phone"
            label="Phone number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className="mb-3"
            error={errors.phone}
            touched={touched.phone}
          />
          <Field
            type="date"
            placeholder="Enter booking date"
            field="booking_date"
            label="Booking Date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.booking_date}
            className="mb-3"
            error={errors.booking_date}
            touched={touched.booking_date}
            min={currentDate.toISOString().split("T")[0]}
            required
          />
          <Field
            type="time"
            placeholder="Enter time of arrival"
            field="arrival_time"
            label="Time of Arrival"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.arrival_time}
            className="mb-3"
            error={errors.arrival_time}
            touched={touched.arrival_time}
            min={currentDate.toTimeString().substring(0, 5)}
            required
          />
          <Field
            type="number"
            placeholder="Enter number of dinners"
            field="dinners"
            label="Number of dinners"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dinners}
            className="mb-3"
            error={errors.dinners}
            touched={touched.dinners}
            required
          />
          <Field
            type="select"
            placeholder="Enter occasion"
            field="occasion"
            label="Occasion"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.occasion}
            className="mb-3"
            error={errors.occasion}
            touched={touched.occasion}
            options={[
              { name: "Occasion", value: "" },
              { name: "Anniversary", value: "anniversary" },
              { name: "Birthday", value: "birthday" },
              { name: "Engagement", value: "engagement" },
            ]}
          />
          <Form.Group controlId="restaurant_area">
            <Form.Check
              label="Outside"
              name="restaurant_area"
              type="radio"
              id="outside"
              value="outside"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Form.Check
              label="Inside"
              name="restaurant_area"
              type="radio"
              id="inside"
              value="inside"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Button type="submit" disabled={isSubmitting} className="mt-5">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
