
type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
}



export default function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="grid gap-2 text-center justify-items-center items-baseline">
        <img src={image} alt={title} />
        <h2 className="uppercase text-lg font-semibold text-center">{title}</h2>
        <p>{description}</p>
    </div>
  )
}
