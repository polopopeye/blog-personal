const ExperienceCard = ({
  title,
  titleLink,
  dates,
  description,
  referenceSpan,
}) => {
  return (
    <section className="mb-2">
      <header className="flex self-center">
        {titleLink ? (
          <a href={titleLink}>
            <h3 className="text-lg font-semibold text-gray-900 mr-4 bg-gray-300 p-2 rounded-t-md">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="text-lg font-semibold text-gray-900 mr-4 bg-gray-300 p-2 rounded-t-md">
            {title}
          </h3>
        )}

        <p className="leading-normal text-md text-gray-800 mt-2">{dates}</p>
      </header>
      <p className="mt-2.1 text-md text-gray-700 leading-normal">
        {referenceSpan && (
          <span className="flex px-4  bg-gray-300">{referenceSpan}</span>
        )}
        <div className=" border-2 border-gray-300 rounded-b-md p-1">
          {description}
        </div>
      </p>
    </section>
  );
};

export default ExperienceCard;
