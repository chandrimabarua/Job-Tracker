function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20",
    secondary:
      "bg-card-light text-text-main border border-white/5 hover:border-primary/30",
    danger:
      "bg-red-500/10 text-red-400 border border-red-500/10 hover:bg-red-500/20",
    ghost:
      "bg-transparent text-text-muted hover:text-text-main hover:bg-white/5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
