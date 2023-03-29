import { format } from "date-fns";
import React from "react";
import {
  useAvailableTimes,
  useListTimes,
} from "../../hooks/useAvailableBookingTimes";
import Field, { FieldProps } from "../utils/Field";

type FieldPickProps = Omit<FieldProps, "type" | "min" | "max" | "options">;

type PickerProps = {
  bookingDate?: Date;
  options?: string[];
} & FieldPickProps;

export default function BookingTimesPicker({
  bookingDate,
  field,
  label,
  className,
  controlId,
  disabled,
  error,
  options,
  placeholder,
  required,
  touched,
  value,
  onChange,
  onBlur,
}: PickerProps) {
  const { availableTimes } = useAvailableTimes(bookingDate);
  const availableTimesList = useListTimes(
    availableTimes,
    bookingDate ? format(bookingDate, "MM/dd/yyyy") : ""
  );

  return (
    <Field
      type="select"
      placeholder={placeholder}
      field={field}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={className}
      error={error}
      touched={touched}
      options={options ?? availableTimesList}
      disabled={disabled}
      required={required}
      controlId={controlId}
    />
  );
}
