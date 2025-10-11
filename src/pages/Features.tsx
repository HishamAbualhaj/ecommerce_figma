import { Truck, Headphones, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="lg:py-26 py-16 bg-white max-container">
      <div className="max-w-6xl mx-auto md:px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-5"
          >
            <div className="bg-gray-300 p-2 rounded-full">
              <div className="bg-dark text-white rounded-full p-4 flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="md:text-xl  font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
