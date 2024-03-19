import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { MainLayout } from '../layouts';
import styled from '@emotion/styled';
import { useSidebar } from '../common';
import { Logo, Link } from '../common';

const Title = styled.h1(({ theme }) => ({
  fontFamily: theme.fonts.primary,
  color: theme.colors.primaryInverse,
}));

const Description = styled.p(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  color: theme.colors.primaryInverse,
}));

const Card = styled.div(({ theme }) => ({
  display: 'flex',
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '5px',
  padding: '20px',
  margin: '30px',
  flexDirection: 'column',
  backdropFilter: 'blur(3px)',
}));

const HeaderContainer = styled.div({
  paddingTop: '20px',
});

const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',

  '@media only screen and (min-width: 300px)': {
    flexDirection: 'column-reverse',
  },
  '@media only screen and (min-width: 1440px)': {
    flexDirection: 'row-reverse',
  },
  '@media only screen and (min-width: 1520px)': {
    flexDirection: 'row',
  },
});

const ProfilePicture = styled.img({
  width: '300px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media only screen and (min-width: 300px)': {
    width: '150px',
    height: '150px',
  },
  '@media only screen and (min-width: 580px)': {
    width: '300px',
    height: '300px',
  },
});

const Home: React.FC = () => {
  const enableOrbitControls = false;
  const { isOpen } = useSidebar();

  return (
    <>
      <MainLayout>
        <MainLayout.Header>
          <HeaderContainer>
            <Logo />
          </HeaderContainer>
        </MainLayout.Header>
        <MainLayout.Body>
          <ContentContainer>
            <Card>
              <Title>About Me</Title>
              <Description>
                Hello! I'm a Canadian software developer with a keen interest in
                building intuitive, user-friendly software. My journey through
                the tech industry has taken me from obtaining a{' '}
                <Link href="https://www.uoguelph.ca/programs/bachelor-of-computing/">
                  Bachelor of Computing
                </Link>{' '}
                at the{' '}
                <Link href="https://www.uoguelph.ca/">
                  University of Guelph
                </Link>{' '}
                to exploring various roles in cities like Montréal, where I
                ventured into starting my own business. Though the outcome was
                unexpected, the experience enriched my understanding of
                resilience and innovation.
              </Description>
              <Description>
                In Ottawa, amid the pandemic's challenges, I started "Ottaweb",
                a JavaScript Meetup. It was my way of contributing to a sense of
                community when we all needed it most. While I can't claim sole
                responsibility for revitalizing the Ottawa tech meetup scene,
                I'm proud to have added to the collective efforts that kept our
                community connected and resilient during those times.
              </Description>
              <Description>
                My professional path has seen me tackle a broad spectrum of
                challenges, from improving inventory management systems at{' '}
                <Link href="https://getvish.com/product-features/">Vish</Link>{' '}
                to contributing to cybersecurity solutions. Currently, I'm with{' '}
                <Link href="https://www.affinity.co/product/extensions">
                  Affinity
                </Link>
                , working on exciting projects that shape the future of
                relationship intelligence.
              </Description>
              <Description>
                Outside of work, I'm an avid skier and draw inspiration from art
                and music, which fuels my creative approach to technology. I
                believe in the joy of discovery and innovation in every project,
                aiming to make software development not just productive but also
                enjoyable. I'm eager to connect with others who share a vision
                for technology that enhances our lives.
              </Description>
              <Description>
                Let's embark on a journey of software development filled with
                learning, innovation, and fun.
              </Description>
            </Card>
            <Card>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ProfilePicture
                  src="images/profile_picture.png"
                  alt="Profie Picture"
                />
              </div>
            </Card>
          </ContentContainer>
        </MainLayout.Body>
        <MainLayout.Footer />
      </MainLayout>
    </>
  );
};

export default Home;

export const useQuery = (): string =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
