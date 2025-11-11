import aboutImage from "@/assets/about-service.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={aboutImage} 
              alt="Makkah Laundry Care Service" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="animate-slide-up animate-delay-200">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Our Service
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Since our establishment, Makkah Laundry Care has been dedicated to providing 
                exceptional laundry and dry cleaning services to our community. We understand 
                that your clothes are more than just fabric – they represent your style, 
                confidence, and daily comfort.
              </p>
              <p>
                Our team of experienced professionals uses state-of-the-art equipment and 
                eco-friendly detergents to ensure your garments receive the gentle care they 
                deserve. From everyday wear to delicate fabrics and special occasion outfits, 
                we handle each item with meticulous attention to detail.
              </p>
              <p>
                What sets us apart is our commitment to convenience and quality. With our 
                reliable pickup and delivery service, professional care for your wardrobe 
                is just a call away. Trust us to keep your clothes fresh, clean, and looking 
                their absolute best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
