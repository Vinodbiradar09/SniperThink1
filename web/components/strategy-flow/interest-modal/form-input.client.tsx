"use client";

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
}

const FormInput = ({
  label,
  type,
  value,
  placeholder,
  isDisabled,
  onChange,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          backgroundColor: "var(--bg)",
          border: "1px solid var(--border-bright)",
          color: "var(--text-primary)",
          padding: "0.875rem 1rem",
          outline: "none",
          width: "100%",
          transition: "border-color 0.2s",
          opacity: isDisabled ? 0.5 : 1,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--accent-1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "var(--border-bright)";
        }}
      />
    </div>
  );
};

export { FormInput };
