import studentImg from "@/assets/student.jpg";
import youtuberImg from "@/assets/youtuber.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import instagrammerImg from "@/assets/instagrammer.jpg";
import freelancerImg from "@/assets/freelancer.jpg";
import agencyOwnerImg from "@/assets/agency-owner.jpg";
import selfEmployeeImg from "@/assets/self-employee.jpg";
import housewifeImg from "@/assets/housewife.jpg";
import jobProfessionalImg from "@/assets/job-professional.jpg";
import smallBusinessImg from "@/assets/small-business.jpg";
import digitalMarketerImg from "@/assets/digital-marketer.jpg";
import dropshipperImg from "@/assets/dropshipper.jpg";

const TargetAudienceSection = () => {
  const personas = [
    { image: studentImg, label: "Student" },
    { image: youtuberImg, label: "Youtuber" },
    { image: entrepreneurImg, label: "Entrepreneur" },
    { image: instagrammerImg, label: "Instagrammer" },
    { image: freelancerImg, label: "Freelancer" },
    { image: agencyOwnerImg, label: "Agency Owner" },
    { image: selfEmployeeImg, label: "Self Employee" },
    { image: housewifeImg, label: "Housewife" },
    { image: jobProfessionalImg, label: "Job Professional" },
    { image: smallBusinessImg, label: "Small Business Owner" },
    { image: digitalMarketerImg, label: "Digital Marketer" },
    { image: dropshipperImg, label: "Dropshipper" },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="gradient-border p-8 rounded-xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            This Is For You{" "}
            <span className="text-gradient">If You Are</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="bg-card border border-white/20 rounded-xl p-5 text-center hover:border-primary transition"
              >
                <img
                  src={persona.image}
                  alt={persona.label}
                  className="w-20 h-20 mx-auto mb-3 object-contain"
                />
                <p className="text-base font-medium">{persona.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;