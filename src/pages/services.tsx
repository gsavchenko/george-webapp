import styled from '@emotion/styled';
import { MainLayout } from '../modules/layouts';
import { Pricing } from '../modules/services/pricing.component';

const SectionContainer = styled.div({
  paddingTop: '20px',
  textAlign: 'center',
});

const SevicesContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.primary,
}));

export const Head = (): JSX.Element => <title>Services</title>;

const Services = (): JSX.Element => {
  return (
    <SevicesContainer>
      <MainLayout>
        <MainLayout.Header>
          <SectionContainer>
            <h1>Services</h1>
          </SectionContainer>
        </MainLayout.Header>
        <MainLayout.Body>
          <Pricing />
          <SectionContainer>
            <p>
              Discover the Unmatched Personalization of a Custom-Built Website —
              No Cookie-Cutter Templates. Just Unique, Tailored Design and
              Flexible Growth Plans That Fit Your Business Like a Glove.
            </p>
          </SectionContainer>
        </MainLayout.Body>
        <MainLayout.Footer />
      </MainLayout>
    </SevicesContainer>
  );
};

export default Services;
