import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/FormCheck";

type FieldType =
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "select";

export type FieldProps = {
  field: string;
  label: string;
  type?: FormCheckType | FieldType;
  placeholder?: string;
  className?: string;
  controlId?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  error?: string;
  value?: string | number | string[];
  touched?: boolean;
  disabled?: boolean;
  options?:
    | string[]
    | { name: string; value?: string | number | string[] | "readonly" }[];
  min?: string | number;
  max?: string | number;
  required?: boolean;
};

export default function Field({
  field,
  label,
  required,
  error,
  touched,
  type,
  value,
  placeholder,
  className,
  controlId,
  disabled,
  options,
  min,
  max,
  onBlur,
  onChange,
}: FieldProps) {
  return (
    <Form.Group as={Row} className={className} controlId={controlId ?? field}>
      {type === "radio" || type === "checkbox" || type === "switch" ? (
        <Form.Check
          type={type}
          placeholder={placeholder}
          name={field}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          label={label}
          isInvalid={error !== undefined && error !== ""}
          feedback={error}
          feedbackType="invalid"
          id={field}
        />
      ) : (
        <Form.Label
          as={Col}
          md={2}
          htmlFor={field}
          className="d-inile-flex flex-nowrap"
        >
          {label}
          {required && " *"}
        </Form.Label>
      )}
      <Col md={10}>
        {type === "select" ? (
          <Form.Select
            placeholder={placeholder}
            name={field}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            isInvalid={error !== undefined && error !== ""}
            id={field}
          >
            {options?.map((option) =>
              typeof option === "string" ? (
                <option key={option}>{option}</option>
              ) : (
                <option key={`${option.value}`} value={option.value}>
                  {option.name}
                </option>
              )
            )}
          </Form.Select>
        ) : (
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={field}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            isInvalid={error !== undefined && error !== ""}
            min={min}
            max={max}
            id={field}
          />
        )}
        {type === "range" && (
          <Form.Range
            placeholder={placeholder}
            name={field}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            id={field}
          />
        )}
        {error && touched && (
          <Form.Control.Feedback type="invalid" className="text-danger">
            {error}
          </Form.Control.Feedback>
        )}
      </Col>
    </Form.Group>
  );
}
