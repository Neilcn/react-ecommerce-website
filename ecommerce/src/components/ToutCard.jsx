const ToutCard = ({ tout }) => (
  <div
    className="relative flex flex-col justify-end p-4 text-white overflow-hidden"
    style={{
      backgroundImage: `url(${tout.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "300px",
      display: "flex",
    }}
  >
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      aria-hidden="true"
    ></div>
    {(tout.title || tout.subtitle || tout.cta) && (
      <div className="p-4 relative z-10">
        {tout.title && (
          <h2 className="mb-1 font-extrabold text-2xl tracking-tight drop-shadow-lg leading-6">
            {tout.title}
          </h2>
        )}
        {tout.subtitle && (
          <p className="mb-2 text-base font-medium drop-shadow ">
            {tout.subtitle}
          </p>
        )}
        {tout.cta && (
          <a href={tout.url} className="btn-ecom mt-8">
            {tout.cta}
          </a>
        )}
      </div>
    )}
  </div>
);

export default ToutCard;
