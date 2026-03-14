type ButtonProps = {
  variant?: "primary" | "outline" | "white";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  href,
  type = "button",
  className = "",
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold cursor-pointer transition-colors";
  const variants = {
    primary: "bg-brand-purple text-white hover:bg-brand-purple-dark",
    outline: "border border-brand-purple text-brand-purple hover:bg-brand-purple/10",
    white: "bg-white text-brand-purple-dark hover:bg-white/90",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
