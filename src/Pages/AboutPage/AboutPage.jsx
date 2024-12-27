import About from '../../Components/About';
import CtaSection1 from '../../Components/CtaSection.jsx/CtaSection1';
import CounterSection2 from '../../Components/FunSection/CounterSection2';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import TeamSection from '../../Components/TeamSection';

const headingData = {
  title: 'About Page',
};

const aboutData = {
  sectionSubtitle: 'ABOUT US',
  sectionTitle: 'Your Gateway to Earning Through Opinions.',
  aboutText:
    'Welcome to our survey platform, where your voice matters! We believe in the power of opinions and aim to connect businesses with real feedback from people like you. Our mission is simple: to provide a seamless and rewarding experience for users who want to share their insights and earn money.',
  service:
    "Learn about our mission and commitment to making a difference",
  experienceYears: '26+',
  experienceTitle: 'Experience',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  iconboxes: [
    {
      imgUrl: '/assets/img/icons/about_icon_1.png',
      title: '24/7 Support',
      subtitle: 'We are here to assist, anytime, anywhere.',
    },
    {
      imgUrl: '/assets/img/icons/about_icon_2.png',
      title: 'Trusted Earnings',
      subtitle: 'Earn with confidence through secure surveys.',
    },
  ],

  btnUrl: '/about',
  btnText: 'About More',
  sectionImgUrl: 'assets/img/about_section_img_1.png',
  headImgUrl: 'assets/img/aboutpage.jpg',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 567,
    suffix: '+',
    title: 'Active Clients',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 23,
    suffix: 'K+',
    title: 'Team Support',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 241,
    suffix: '+',
    title: 'Projects Completed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 16,
    suffix: 'K+',
    title: 'Award winner',
  },
];

const teamData = {
  subtitle: 'OUR TEAM MEMBERS',
  title: ' Meet the Team Behind Your Success',
  sliderData: [
    {
      name: 'Dr. Norma Pedric',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_1.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. James Lewis',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_3.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Sophia Anderson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_4.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Michael Thompson',
      profession: 'Neurologist',
      imageUrl: 'assets/img/team_5.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. David Wilson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_6.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
  ],
};

const ctaData = {
  // videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
  // videoButtonText: 'WATCH VIDEO',
  // subtitle: 'OUR WATCH VIDEO',
  // title: 'Professional Medical Care Measure Medical.',
  // description:
  //   'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  // buttonLink: '/contact',
  // buttonText: 'Video More',
  // brandImage: 'assets/img/medical_brand.png',

  videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
videoButtonText: 'WATCH VIDEO',
subtitle: 'OUR WATCH VIDEO',
title: 'Survey Participation: Share Your Insights with Us',
description:
  'Join hundreds of participants in answering insightful survey questions. Your responses help us shape better services and offer rewards for your valuable time and feedback.',
// buttonLink: '/contact',
// buttonText: 'Learn More',
// brandImage: 'assets/img/medical_brand.png',

};

const AboutPage = () => {
  return (
    <div className='about-page-area'>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="assets/img/aboutpage.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>

      {/* End Counter Section */}

      {/* Start CTA Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section> */}
      {/* End CTA Section */}

      {/* Start Team Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section> */}
      {/* End Team Section */}

    </div>
  );
};

export default AboutPage;
