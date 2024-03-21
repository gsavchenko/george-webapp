import styled from '@emotion/styled';

const SubscriptionContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '24px',
  borderRadius: '8px',
  marginTop: '20px',

  '@media only screen and (max-width: 500px)': {
    flexDirection: 'column',
  },
});

const Plan = styled.div(() => ({
  padding: '20px',
  border: '1px solid #d4af37',
  borderRadius: '8px',
  flexBasis: '30%',
  maxWidth: '400px',
  background: 'rgba(255, 255, 255, 0.3)',
}));

const PlanTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const FeatureList = styled.ul`
  text-align: left;
  padding: 0 14px;
  margin: 10px 0;
`;

const Feature = styled.li`
  margin-bottom: 8px;
`;

const Highlight = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

export const Pricing = () => {
  return (
    <div>
      <SubscriptionContainer>
        <Plan>
          <PlanTitle>Initial Website Build</PlanTitle>
          <Highlight>The foundational step where every client starts</Highlight>
          <FeatureList>
            <Feature>One-time variable flat fee</Feature>
            <Feature>Custom design and development</Feature>
            <Feature>Mobile-responsive</Feature>
            <Feature>Launch and handover</Feature>
          </FeatureList>
        </Plan>
      </SubscriptionContainer>

      <SubscriptionContainer>
        <Plan>
          <PlanTitle>Essentials Plan</PlanTitle>
          <Highlight>
            Ideal for startups and small businesses needing essential
            maintenance and minor monthly updates
          </Highlight>
          <FeatureList>
            <Feature>
              Affordable monthly subscription, after the initial build
            </Feature>
            <Feature>Content uploading for up to 5 pages</Feature>
            <Feature>Email support with 48-hour response time</Feature>
            <Feature>Web hosting management included</Feature>
            <Feature>Cancel Anytime</Feature>
          </FeatureList>
        </Plan>

        <Plan>
          <PlanTitle>Essentials Plus Plan</PlanTitle>
          <Highlight>
            Geared towards businesses aiming for steady growth and increased
            engagement
          </Highlight>
          <FeatureList>
            <Feature>
              Premium monthly subscription, after the initial build
            </Feature>
            <Feature>All Essentials Plan features</Feature>
            <Feature>Bi-weekly Content Updates for up to 10 pages</Feature>
            <Feature>Priority email support with 24-hour response time</Feature>
            <Feature>Up to 2 new features or integrations per quarter</Feature>
          </FeatureList>
        </Plan>

        <Plan>
          <PlanTitle>Custom Growth Solution</PlanTitle>
          <Highlight>
            For businesses looking for a partner to build and execute a
            long-term digital strategy, not just a website
          </Highlight>
          <FeatureList>
            <Feature>Fully Tailored Web Services</Feature>
            <Feature>Advanced Feature Development</Feature>
            <Feature>Ongoing Consultation for Growth</Feature>
          </FeatureList>
        </Plan>
      </SubscriptionContainer>
    </div>
  );
};
