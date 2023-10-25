

const SectionTitle = ({ headingTitle, subHeadingTitle }) => {
  return (
    <div className="w-4/12 mx-auto text-center">
      <p className="text-yellow-600 "> {headingTitle}</p>
      <p className="text-4xl uppercase border-y-4 my-4 font-semibold">{subHeadingTitle}</p>
    </div>
  );
};

export default SectionTitle;