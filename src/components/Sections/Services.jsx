
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/new/3.jpg";
import AddImage2 from "../../assets/img/new/4.jpg";
import AddImage3 from "../../assets/img/new/1.jpg";
import AddImage4 from "../../assets/img/new/2.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our JabaVerse Services</h1>
            <p className="font13">
              Discover how we help businesses grow by providing tailored digital solutions. Whether it's web development for small businesses, affordable graphic design, or more, we offer the expertise you need to succeed in the JabaVerse.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            {/* Web Development Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="pen"
                title="Web Development"
                subtitle="We specialize in affordable and scalable web development solutions for small businesses. Our approach focuses on creating responsive websites that deliver a great user experience."
              />
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>
            
            {/* Digital Marketing Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="chart-bar"
                title="Digital Marketing"
                subtitle="Boost your online presence with tailored digital marketing strategies. We offer SEO, PPC, content marketing, and social media services to help your business reach its target audience."
              />
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>

            {/* Content Writing Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="pen"
                title="Content Writing"
                subtitle="Engage your audience with expertly written content. Whether it's blog posts, articles, or product descriptions, we offer affordable content writing services that help boost your SEO."
              />
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>

            {/* Graphic Design Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Our graphic design team creates visually stunning and brand-appropriate designs that capture your audience’s attention. We offer everything from logos to social media assets at affordable rates."
              />
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A glimpse into JabaVerse</h4>
                <h2 className="font40 extraBold">The Future of Digital Innovation</h2>
                <p className="font12">
                  Join us in the JabaVerse, where the future of digital creation, design, and innovation is already here. Together, we can bring ideas to life in ways never imagined before.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office"  style={{ width: '285px', height: '406px', zIndex: 9 }} />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office"  style={{ width: '197px', height: '333px', zIndex: 9 }}/>
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office"  style={{ width: '112px', height: '125px', zIndex: 9 }}/>
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office"  style={{ width: '177px', height: '224px', zIndex: 9 }}/>
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const CTASection = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;

const AddRightInner = styled.div`
  width: 100%;
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 40%;  /* Full width on smaller screens */
    margin: 0 0 15px 0;
  }
`;

const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 48%;  /* Adjust width for smaller screens */
    margin: 0 0 15px 0;
  }
`;

const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 48%;  /* Adjust width for smaller screens */
    margin-left: 0;
    margin-bottom: 15px;
  }
`;

const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 48%;  /* Adjust width for smaller screens */
    margin: 0 0 15px 0;
  }
`;
