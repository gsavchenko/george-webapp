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
  border: '1px solid #ccc',
  borderRadius: '8px',
  flexBasis: '30%',
  maxWidth: '400px',
  background: 'rgba(255, 255, 255, 0.3)',
  backdropfilter: 'blur(3px)',
}));

const PlanTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
`;

const FeatureList = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
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
            <Feature>Variable Flat Fee</Feature>
            <Feature>Design of Website</Feature>
            <Feature>Development of Website</Feature>
            <Feature>Launch of Website</Feature>
          </FeatureList>
        </Plan>
      </SubscriptionContainer>

      <SubscriptionContainer>
        <Plan>
          <PlanTitle>Starter Growth Plan</PlanTitle>
          <Highlight>Perfect for small businesses and startups</Highlight>
          <Price>$150/month</Price>
          <FeatureList>
            <Feature>Monthly Website Health Checks</Feature>
            <Feature>Content Updates (up to 5 pages/month)</Feature>
            <Feature>Email Support</Feature>
            <Feature>Cancel Anytime</Feature>
          </FeatureList>
        </Plan>

        <Plan>
          <PlanTitle>Dynamic Growth Plan</PlanTitle>
          <Highlight>
            Ideal for businesses aiming for active growth and engagement
          </Highlight>
          <Price>$275/month</Price>
          <FeatureList>
            <Feature>Includes all Starter Growth Features</Feature>
            <Feature>Bi-weekly Content Updates</Feature>
            <Feature>Priority Email Support</Feature>
            <Feature>
              New Features Support (up to 2 new features/quarter)
            </Feature>
            <Feature>Cancel Anytime</Feature>
          </FeatureList>
        </Plan>

        <Plan>
          <PlanTitle>Custom Growth Solution</PlanTitle>
          <Highlight>
            For businesses seeking a bespoke growth strategy
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
