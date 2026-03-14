type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-brand-purple/20 bg-brand-bg p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
