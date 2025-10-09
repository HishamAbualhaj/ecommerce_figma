interface HeadingProps {
  label: string;
  title: string;
}
const Heading = ({ label, title }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-10 bg-primary rounded-sm"></div>
        <span className="text-primary font-medium">{label}</span>
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold mt-3">{title}</h2>
    </div>
  );
};

export default Heading;
