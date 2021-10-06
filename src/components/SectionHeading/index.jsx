const SectionHeading = ({title , text , addWhite=false}) => {

  return (
      <div className="section-heading text-center">
        <div className="mb-15 justify-content-center" data-aos="fade-up" data-aos-delay='200'>
          <span className="gradient-text blue">{title}</span>
        </div>
        <h2 className={`${addWhite && "w-text"}`} data-aos="fade-up" data-aos-delay='300'>{text}</h2>
        <p data-aos="fade-up" data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
      </div>
  );
}

export default SectionHeading;