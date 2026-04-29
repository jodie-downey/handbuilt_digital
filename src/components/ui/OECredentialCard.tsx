type Props = {
  children: React.ReactNode;
};

export default function OECredentialCard({ children }: Props) {
  return (
    <div className="pl-4 border-l-2 border-oe-gold bg-white/5 rounded-r-xl py-4 pr-4">
      <p className="text-white/85 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
