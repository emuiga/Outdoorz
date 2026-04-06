interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, titleAccent, description }: PageHeaderProps) {
  return (
    <div className="bg-forest pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-display font-700 text-mist text-5xl lg:text-6xl leading-tight mb-4">
          {title}{" "}
          {titleAccent && <em className="italic text-malachite">{titleAccent}</em>}
        </h1>
        {description && (
          <p className="body-light text-mist/60 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
