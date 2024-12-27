import HeroSection from '../../Components/HeroSection';
import CtaSection from '../../Components/CtaSection.jsx';
import About from '../../Components/About/index.jsx';
import CounterSection from '../../Components/FunSection/CounterSection.jsx';
import Service from '../../Components/Service/index.jsx';
import TeamSection from '../../Components/TeamSection/index.jsx';
import BrandsSlider from '../../Components/BrandsSection/index.jsx';
import ChooseUs from '../../Components/ChooseUs/index.jsx';
import ProjectSection from '../../Components/ProjectSection/index.jsx';
import CtaSection1 from '../../Components/CtaSection.jsx/CtaSection1.jsx';
import MedicalTabSection from '../../Components/MedicalTabSection/index.jsx';
import BlogSection from '../../Components/BlogsSection/index.jsx';
import Section from '../../Components/Section/index.jsx';
import ContactSection2 from '../../Components/ContactSection/ContactSection2.jsx';

const heroData = {
  primarySlider: [
    {
      bgImageUrl: 'assets/img/banner1.jpg',
      title: 'Earn Money by Sharing<span>Opinions.</span>',
      contactSubtitle:
        'Participate in surveys, answer simple questions, and get rewarded for your valuable insights. Join us to turn your opinions into earnings today!.',
      contactTitle: 'Receive Medical Service.',
      contact: 'Call Us at: (+2) 56 54 1453',
      btnText1: 'Join Now',
      link: '/join',
      btnText2: 'Learn More',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/hero_slider_2.jpg',
      title: 'Your Center for <br>Mental <span>Health.</span>',
      contactSubtitle:
        'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
      contactTitle: 'Receive Medical Service.',
      contact: 'Call Us at: (+2) 56 54 1453',
      btnText1: 'Contact Now',
      link: '/contact',
      btnText2: 'Discover More',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/hero_slider_1.jpg',
      title: 'We Hospital Doctors Patients <span>Service.</span>',
      contactSubtitle:
        'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
      contactTitle: 'Receive Medical Service.',
      contact: 'Call Us at: (+2) 56 54 1453',
      btnText1: 'Contact Now',
      link: '/contact',
      btnText2: 'Discover More',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
  ],
  secondarySlider: [
    'assets/img/hero_slider_sm_1.png',
    'assets/img/hero_slider_sm_2.png',
    'assets/img/hero_slider_sm_3.png',
  ],
};

const ctaData = {
  imageUrl: 'assets/img/contactimage.jpg',
  title: 'We are Here to Assist You.',
  subtitle: 'Have questions or need help? Reach out to us anytime, and our support team will ensure all your concerns are addressed promptly.',
  buttonUrl: '/contact',
  buttonText: 'Contact Now',
};

const aboutData = {
  sectionSubtitle: 'ABOUT US',
  sectionTitle: 'Your Gateway to Earning Through Opinions.',
  aboutText:
    'Welcome to our survey platform, where your voice matters! We believe in the power of opinions and aim to connect businesses with real feedback from people like you. Our mission is simple: to provide a seamless and rewarding experience for users who want to share their insights and earn money.',
  service:
    "Learn about our mission and commitment to making a difference.",
  experienceYears: '26+',
  experienceTitle: 'Experience',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  iconboxes: [
    {
      imgUrl: 'assets/img/support.png',
      title: '24/7 Support',
      subtitle: 'We are here to assist, anytime, anywhere.',
    },
    {
      imgUrl: 'assets/img/earnings.png',
      title: 'Trusted Earnings',
      subtitle: 'Earn with confidence through secure surveys.',
    },
  ],

  btnUrl: '/about',
  btnText: 'About More',
  // sectionImgUrl: 'assets/img/about_section_img_1.png',
  headImgUrl: 'assets/img/about_img_1.jpg',
};

const countersData = [
  {
    iconUrl: '/assets/img/icons/counter_icon_1.png',
    number: '100k+',
    title: 'Active Users',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '5K+',
    title: 'Team Support',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '50k+',
    title: 'Surveys Available',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '16K+',
    title: 'Winners',
  },
];

const serviceData = {
  subtitle: 'HOW IT WORKS',
  title: 'How to Start Earning with Surveys',
  description:
    'Getting started is easy! Simply sign up and create your account. Once you are registered, browse through available surveys that match your profile and preferences. Start answering questions, and earn money for every survey you complete. It’s that simple to begin earning today!.',
  services: [
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: 'assets/img/join.jpg',
      index: '01',
      title: 'Join now, it’s free!',
      subtitle: 'We will ask a few questions to set up your profile and match relevant surveys.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: 'assets/img/account.jpg',
      index: '02',
      title: 'link your accounts',
      subtitle: 'Link your bank accounts to qualify for more surveys and earn double',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: 'assets/img/finish.avif',
      index: '03',
      title: 'Finish Welecome survey, earn $3!',
      subtitle: 'Complete your welcome survey and earn $3 instantly!',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: 'assets/img/premium.png',
      index: '04',
      title: 'Premium users get 4-6 surveys weekly',
      subtitle: 'Premium members receive 4-6 exclusive surveys every week.',
      link: '/service/service-details',
    }
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'If you want to earn more and unlock additional opportunities',
  footerLink: '/',
  footerLinkText: 'JOIN NOW',
};

const teamData = {
  subtitle: 'Testimonials',
  title: ' Feedback that Inspires Us to Do Better',
  sliderData: [
    {
      name: 'Norma Pedric',
      profession: 'Neurologist',
      imageUrl: '/assets/img/client1.jpg',
      link: '/doctors/doctor-details',
      review:'This survey platform is incredibly user-friendly and has helped us gather valuable insights quickly.'
    },
    {
      name: 'Dr. James Lewis',
      profession: 'Neurologist',
      imageUrl: '/assets/img/client2.jpg',
      link: '/doctors/doctor-details',
      review:'Survey taking has become my favorite way to make extra cash in my free time!'
    },
    {
      name: 'Dr. Sophia Anderson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/client3.jpg',
      link: '/doctors/doctor-details',
      review:'I love how easy it is to earn money by completing surveys – it’s a great side income!.'
    },
    {
      name: 'Dr. Michael Thompson',
      profession: 'Neurologist',
      imageUrl: 'assets/img/client4.jpg',
      link: '/doctors/doctor-details',
      review:'The ease of use and customization options have made collecting feedback so much more efficient.'
    },
    // {
    //   name: 'Dr. David Wilson',
    //   profession: 'Neurologist',
    //   imageUrl: '/assets/img/team_6.jpg',
    //   link: '/doctors/doctor-details',
    //   facebook: '/',
    //   pinterest: '/',
    //   twitter: '/',
    //   instagram: '/',
    // },
  ],
};

const brandData = [
  { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
];

const sectionData = {
  subtitle: 'WHY CHOOSE US',
  title: 'Earn extra income easily by completing simple surveys with us',
  services: [
    {
      iconUrl: 'assets/img/join.png',
      title: 'Anyone can join',
      subtitle: 'Anyone can join and start earning easily.',
    },
    {
      iconUrl: 'assets/img/free.png',
      title: 'It is 100% free, forever',
      subtitle: 'It’s completely free, with no hidden fees, ever',
    },
    {
      iconUrl: 'assets/img/anywhere.png',
      title: 'Work anywhere, any time',
      subtitle: 'Work from anywhere, anytime, at your convenience',
    },
    {
      iconUrl: 'assets/img/devices.png',
      title: 'Use your computer or smartphone',
      subtitle: 'Use your computer or smartphone to start earning',
    },
    {
      iconUrl: 'assets/img/quick.png',
      title: 'No contracts, quit any time',
      subtitle: 'No contracts required, quit anytime you wish',
    },
    {
      iconUrl: 'assets/img/joinpremium.png',
      title: 'Join Premium',
      subtitle: 'Join Premium for exclusive benefits at affordable prices',
    },
  ],
};

const projectData = {
  title: 'All The Great Work That<br> Medical Service',
  subtitle: 'OUR PORTFOLIO',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  tabs: [
    { id: 'dental', label: 'Dental' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'medical', label: 'Medical' },
  ],
  tabData: [
    {
      id: 'dental',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
      ],
    },
    {
      id: 'cardiology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
      ],
    },
    {
      id: 'neurology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
    {
      id: 'medical',
      items: [
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
  ],
};

const ctaData1 = {
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

const medicalTabsData = {
  subtitle: 'What Are Surveys?',
  title: 'Discover How Surveys Can Help You Earn',
  tabsTitle: [
    {
      href: 'brain_althim',
      iconUrl: 'assets/img/icons/tab_link_icon_1.png',
      label: 'Modern Technology',
    },
    {
      href: 'emergency',
      iconUrl: 'assets/img/icons/tab_link_icon_2.png',
      label: 'Success of Treatment',
    },
    {
      href: 'heart_beat',
      iconUrl: 'assets/img/icons/tab_link_icon_3.png',
      label: 'Certified Doctors',
    },
    {
      href: 'blood_test',
      iconUrl: 'assets/img/icons/tab_link_icon_4.png',
      label: 'Medical Advice',
    },
  ],
  tabsData: [
    {
      id: 'brain_althim',
      imageSrc: 'assets/img/surveys.jpg',
      title: 'We are here to hear and heal your',
      subtitle:
        'Surveys are quick questionnaires designed to gather opinions and insights on various topics. By participating, you share your valuable feedback with companies and organizations. In return, you earn rewards or money for your time and effort.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Variety and Flexibility: Surveys cover a wide range of topics and can be completed at your convenience, making it easy to participate.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Earning Potential: Each survey completed brings you closer to earning extra income from the comfort of your home.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'emergency',
      imageSrc: 'assets/img/post_5.jpeg',
      title: 'Treatment patients in primary care',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'heart_beat',
      imageSrc: 'assets/img/post_1.jpeg',
      title: 'Accreditation within a given specialty',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'blood_test',
      imageSrc: 'assets/img/post_3.jpeg',
      title: 'Better Health While Aging health',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    // Add other tab data here
  ],
};

const blogsData = {
  sectionTitle: 'OUR LARGEST BLOG',
  sectionSubtitle: 'Latest Posts &amp; Articles',
  postsData: [
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'There Is Only One Thing That Is Hospital.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_2.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'This Working World and Infection Prevention.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_3.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};

const MainHome = () => {
  return (
    <>
      {/* End Header Section */}
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>

      {/* End Counter */}
      {/* Start Service Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>

      {/* End Service Section */}
      {/* Start Team Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
      {/* Start Brand Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}
      {/* Start Why Choose Us Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="assets/img/choose-banner.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>

      {/* End Why Choose Us Section */}
      {/* Start Projects Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section> */}

      {/* End Projects Section */}
      {/* Start CTA Section */}

      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section> */}

      {/* End CTA Section */}
      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>

      {/* End Medical Tab Section */}
      {/* Start Contact Solution */}

      <ContactSection2></ContactSection2>

      {/* End Contact Solution */}
      {/* Start Blog Section */}

      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section> */}
    </>
  );
};

export default MainHome;
