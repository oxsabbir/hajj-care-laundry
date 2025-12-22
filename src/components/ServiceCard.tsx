import { handleWhatsApp } from "@/lib/utils";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  highlight: string;
}

const ServiceCard = ({
  title,
  price,
  unit,
  description,
  highlight,
}: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>

      <p className="text-primary text-xl font-semibold mb-4">
        {price}/{unit}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-primary font-medium mb-6">({highlight})</p>

      <div className=" mt-auto">
        <Button
          onClick={() =>
            handleWhatsApp(
              `Hi, I would like to book your ${encodeURIComponent(title)}. 
Please share the pickup details and available timing.
Thank you.`,
              true
            )
          }
          id="generate_lead"
          className=" bg-primary"
        >
          Book Now
        </Button>
      </div>

      {/* <button
        onClick={() =>
          handleWhatsApp(
            `Hi, I would like to book your ${encodeURIComponent(title)}.
Please share the pickup details and available timing.
Thank you.`,
            true
          )
        }
        className="text-muted-foreground font-medium hover:text-primary transition-colors"
      >
        Book Now
      </button> */}
    </div>
  );
};

export default ServiceCard;
