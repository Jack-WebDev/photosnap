type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  isMonthly: boolean;
  className?: string;
  buttonClassName?: string;
};

export default function PricingCard({
  title,
  price,
  description,
  isMonthly,
  className,
  buttonClassName,
}: PricingCardProps) {
  return (
    <div
      className={`grid gap-2 text-center justify-items-center items-baseline ${className}`}
    >
      <h2 className="uppercase text-lg font-semibold text-center">{title}</h2>
      <p className="text-xs">{description}</p>
      <p className="text-4xl font-semibold">{price}</p>
      <span>per {isMonthly ? "Month" : "Year"}</span>
      <button className={`py-2 px-8 rounded-lg ${buttonClassName}`}>Pick Plan</button>
    </div>
  );
}
