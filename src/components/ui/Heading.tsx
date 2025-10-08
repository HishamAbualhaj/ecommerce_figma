interface HeadingProps {
  label: string;
  title: string;
}
const Heading = ({ label, title }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-medium">{label}</span>
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
    </div>
  );
};

export default Heading;
