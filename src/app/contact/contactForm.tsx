"use client";

import { useState, FormEvent } from "react";

interface FormState {
  companyName: string;
  firstName: string;
  lastName: string;
  contactNo: string;
  email: string;
  secondaryEmail: string;
  message: string;
  honeypot: string;
}

const initialState: FormState = {
  companyName: "",
  firstName: "",
  lastName: "",
  contactNo: "",
  email: "",
  secondaryEmail: "",
  message: "",
  honeypot: "",
};

const ZOHO_ENDPOINT = "https://crm.zoho.in/crm/WebForm";

// These are the fixed Zoho form tokens — do not change unless you regenerate the form in Zoho CRM
const ZOHO_HIDDEN_FIELDS = {
  xnQsjsdp: "6dfc7cba137345639cd5460c63b7ae1ad5dc8188d8328d796493144f50ab8176",
  zc_gad: "",
  xmIwtLD:
    "3b19b18b6a753c2ec60f49147c4eccdf961e461a907a7e3fee8203f63ea7515a4490008db544aebfea79897276578d9f",
  actionType: "Q3VzdG9tTW9kdWxlMjI=",
  returnURL: "null",
};

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0) return true; // optional fields pass when empty
  const atPos = trimmed.indexOf("@");
  const dotPos = trimmed.lastIndexOf(".");
  return atPos >= 1 && dotPos >= atPos + 2 && dotPos + 2 < trimmed.length;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      validate();
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (form.companyName.trim().length === 0) {
      newErrors.companyName = "Company Name cannot be empty.";
    }
    if (form.contactNo.trim().length === 0) {
      newErrors.contactNo = "Contact No cannot be empty.";
    }
    if (form.message.trim().length === 0) {
      newErrors.message = "Message cannot be empty.";
    }
    if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!isValidEmail(form.secondaryEmail)) {
      newErrors.secondaryEmail = "Please enter a valid email address.";
    }
    // Honeypot: if filled, silently treat as invalid (bot submission)
    if (form.honeypot.trim().length > 0) {
      newErrors.honeypot = "Submission blocked.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");
    setStatusMessage("");

    const formData = new FormData();
    formData.append("xnQsjsdp", ZOHO_HIDDEN_FIELDS.xnQsjsdp);
    formData.append("zc_gad", ZOHO_HIDDEN_FIELDS.zc_gad);
    formData.append("xmIwtLD", ZOHO_HIDDEN_FIELDS.xmIwtLD);
    formData.append("actionType", ZOHO_HIDDEN_FIELDS.actionType);
    formData.append("returnURL", ZOHO_HIDDEN_FIELDS.returnURL);
    formData.append("aG9uZXlwb3Q", form.honeypot);

    formData.append("COBJ22CF3", form.companyName);
    formData.append("COBJ22CF4", form.firstName);
    formData.append("COBJ22CF5", form.lastName);
    formData.append("COBJ22CF1", form.contactNo);
    formData.append("Email", form.email);
    formData.append("Secondary Email", form.secondaryEmail);
    formData.append("COBJ22CF2", form.message);

    try {
      const response = await fetch(ZOHO_ENDPOINT, {
        method: "POST",
        body: formData,
        cache: "no-cache",
      });

      const contentType = response.headers.get("Content-Type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      if (typeof data === "object" && data !== null) {
        if (data.actionsubmit === "Splash Message") {
          if (data.invalidCaptcha === "true") {
            setStatus("error");
            setStatusMessage(data.actionvalue || "Captcha validation failed.");
          } else {
            setStatus("success");
            setStatusMessage(
              data.actionvalue || "Thank you for your submission.",
            );
            setForm(initialState);
          }
        } else if (data.actionsubmit === "thankyou_page") {
          window.location.assign(data.redirectUrl);
        } else if (
          data.actionsubmit === "error_msg" ||
          data.actionsubmit === "captcha_error"
        ) {
          setStatus("error");
          setStatusMessage(data.message || "Something went wrong.");
        } else {
          setStatus("success");
          setStatusMessage("Thank you for your submission.");
          setForm(initialState);
        }
      } else {
        // Non-JSON response — treat as success
        setStatus("success");
        setStatusMessage("Thank you for your submission.");
        setForm(initialState);
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <div className="contact-form-self">
        <h2 className="fw-bold mb-4">Send Us A Query</h2>
        {status === "success" && (
          <p className="text-success mt-3">{statusMessage}</p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field — kept hidden, bots that fill it get blocked in validate() */}
          <input
            type="text"
            style={{ display: "none" }}
            name="aG9uZXlwb3Q"
            value={form.honeypot}
            onChange={handleChange("honeypot")}
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="mb-3">
            <input
              name="COBJ22CF3"
              type="text"
              className="form-control form-control-self"
              placeholder="Company Name *"
              aria-label="Company Name (required)"
              maxLength={255}
              required
              value={form.companyName}
              onChange={handleChange("companyName")}
            />
            {errors.companyName && (
              <div className="text-danger">{errors.companyName}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              name="COBJ22CF4"
              type="text"
              className="form-control form-control-self"
              placeholder="First Name"
              aria-label="First Name"
              maxLength={255}
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="mb-3">
            <input
              name="COBJ22CF5"
              type="text"
              className="form-control form-control-self"
              placeholder="Last Name"
              aria-label="Last Name"
              maxLength={255}
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
          <div className="mb-3">
            <input
              name="COBJ22CF1"
              type="tel"
              className="form-control form-control-self"
              placeholder="Contact No *"
              aria-label="Contact No (required)"
              maxLength={30}
              value={form.contactNo}
              onChange={handleChange("contactNo")}
              aria-required="true"
            />
            {errors.contactNo && (
              <div className="text-danger">{errors.contactNo}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              name="Email"
              type="email"
              className="form-control form-control-self"
              placeholder="Email"
              aria-label="Email"
              maxLength={100}
              value={form.email}
              onChange={handleChange("email")}
              autoComplete="off"
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              name="Secondary Email"
              type="email"
              className="form-control form-control-self"
              placeholder="Secondary Email"
              aria-label="Secondary Email"
              maxLength={100}
              value={form.secondaryEmail}
              onChange={handleChange("secondaryEmail")}
              autoComplete="off"
            />
            {errors.secondaryEmail && (
              <div className="text-danger">{errors.secondaryEmail}</div>
            )}
          </div>
          <div className="mb-3">
            <textarea
              name="COBJ22CF2"
              rows={5}
              className="form-control form-control-self"
              placeholder="Message *"
              aria-label="Message (required)"
              value={form.message}
              onChange={handleChange("message")}
              aria-required="true"
            ></textarea>
            {errors.message && (
              <div className="text-danger">{errors.message}</div>
            )}
          </div>
          {status === "error" && (
            <div className="col-12">
              <div className="row" />
              <div className="bg-danger" style={{ color: "red" }}>
                {statusMessage}
              </div>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-lg px-5 text-white"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
          <input
            type="reset"
            className="btn ms-3  bg-light btn-lg px-5 text-black"
            value="Reset"
            onClick={() => {
              setForm(initialState);
              setErrors({});
              setStatus("idle");
            }}
          />
        </form>
      </div>
    </>
  );
}
