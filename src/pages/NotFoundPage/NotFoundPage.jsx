import CTAButton from "../../components/CTAButton/CTAButton";
import PageContainer from "../../components/PageContainer/PageContainer";
import Title from "../../components/Title/Title";

const NotFoundPage = () => {
  const cta = "explore popular picks";
  const message = "Sorry, we can’t find what you are looking for.";
  return (
    <PageContainer>
      <Title dark fontSize>
        Page not found
      </Title>
      <CTAButton cta={cta} message={message} />
    </PageContainer>
  );
};

export default NotFoundPage;
