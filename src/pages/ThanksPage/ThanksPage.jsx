import CTAButton from "../../components/CTAButton/CTAButton";
import PageContainer from "../../components/PageContainer/PageContainer";
import Title from "../../components/Title/Title";

const ThanksPage = () => {
  const cta = "explore popular picks";
  return (
    <PageContainer>
      <Title dark capitalize fontSize>
        Thank you!
      </Title>
      <CTAButton cta={cta} />
    </PageContainer>
  );
};

export default ThanksPage;
