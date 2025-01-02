// import { BsTwitter } from 'react-icons/bs';
// import { FaPhoneAlt } from 'react-icons/fa';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLocationDot,
//   FaPinterestP,
//   FaRegClock,
// } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// const data = {
//   backgroundImage: 'assets/img/footer_bg.jpg',
//   logo: '/assets/img/footer_logo.svg',
//   contact: [
//     {
//       icon: 'fa-regular fa-clock',
//       text: 'Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
//     },
//     {
//       icon: 'fa-solid fa-location-dot',
//       text: '13/A, Miranda Halim City.',
//     },
//     {
//       icon: 'fa-solid fa-phone',
//       text: '099 695 695 35',
//     },
//   ],
//   socialLinks: [
//     { href: '#', icon: 'fa-brands fa-facebook-f' },
//     { href: '#', icon: 'fa-brands fa-pinterest-p' },
//     { href: '#', icon: 'fa-brands fa-twitter' },
//     { href: '#', icon: 'fa-brands fa-instagram' },
//   ],
//   widgets: [
//     {
//       title: 'Company',
//       links: [
//         { href: '#', text: 'Home' },
//         { href: '#', text: 'About Us' },
//         { href: '#', text: 'Contact Us' },
//         { href: '#', text: 'Team' }
//       ],
//     },
//     {
//       title: 'Quick Link',
//       links: [
//         { href: '#', text: 'Residents' },
//         { href: '#', text: 'Business' },
//         { href: '#', text: 'Online Service' },
//         { href: '#', text: 'Visiting' },
//         { href: '#', text: 'Employment' },
//       ],
//     },
//   ],
//   recentPosts: [
//     {
//       href: '/blog/blog-details',
//       image: 'assets/img/recent_post_1.png',
//       date: '23 jun 2024',
//       title: 'We round Solution york Blog',
//     },
//     {
//       href: '/blog/blog-details',
//       image: 'assets/img/recent_post_2.png',
//       date: '20 jun 2024',
//       title: 'The Medical Of This Working Health',
//     },
//   ],
//   copyrightText: 'Copyright © 2024 Medilo, All Rights Reserved.',
//   footerMenu: [
//     { href: 'about.html', text: 'About Us' },
//     { href: '#', text: 'Events' },
//     { href: 'blog.html', text: 'News' },
//     { href: 'service.html', text: 'Service' },
//   ],
// };

// const Footer = () => {
//   const data = {
//     // backgroundImage: '/assets/img/footer_bg.jpg',
//     logo: '/assets/img/footer_logo.svg',
//     contactText:
//       '24/7 available',
//     contactText2: 'LB Nagar, Hyderabad.',
//     contactText3: '099 695 695 35',
//     facebookHref: '/',
//     pinterestHref: '/',
//     twitterHref: '/',
//     instagramHref: '/',
//     widgets: [
//       {
//         title: 'Company',
//         links: [
//           { href: '/service/service-details', text: 'Privacy Policy' },
//           { href: '/service/service-details', text: 'Terms Of Use' },
//           { href: '/service/service-details', text: 'Website Terms Of use' },
//           { href: '/service/service-details', text: 'FAQs' }
//         ],
//       },
//       {
//         title: 'Quick Links',
//         links: [
//           { href: '/', text: 'Home' },
//           { href: '/about', text: 'About Us' },
//           { href: '/contact', text: 'Contact Us' },
//           { href: '/', text: 'Team' },
//         ],
//       },
//     ],
//     recentPosts: [
//       {
//         href: '/blog/blog-details',
//         image: '/assets/img/recent_post_1.png',
//         date: '23 jun 2024',
//         title: 'We round Solution york Blog',
//       },
//       {
//         href: '/blog/blog-details',
//         image: '/assets/img/recent_post_2.png',
//         date: '20 jun 2024',
//         title: 'The Medical Of This Working Health',
//       },
//     ],
//     copyrightText: 'Copyright © 2024 Survey, All Rights Reserved.',
//     footerMenu: [
//       { href: '/about', text: 'About Us' },
//       { href: '/', text: 'Events' },
//       { href: '/blog', text: 'News' },
//       { href: '/service', text: 'Service' },
//     ],
//   };

//   return (
//     <footer
//       className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
//       // style={{ backgroundImage: `url(${data.backgroundImage})` }}
//     >
//       <div className="container">
//         <div className="cs_footer_row">
//           <div className="cs_footer_col">
//             <div className="cs_footer_highlight_col">
//               {/* <div className="cs_footer_logo">
//                 <img src={data.logo} alt="Logo" />
//               </div> */}
//               <h4 className='text-white'>SURVEYS</h4>
//               <ul className="cs_footer_contact cs_mp_0">
//                 <li>
//                   <i
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'flex-start',
//                     }}
//                   >
//                     <FaRegClock />
//                   </i>
//                   <span
//                     dangerouslySetInnerHTML={{ __html: data.contactText }}
//                   />
//                 </li>
//                 <li>
//                   <i
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'flex-start',
//                     }}
//                   >
//                     <FaLocationDot />
//                   </i>
//                   <span
//                     dangerouslySetInnerHTML={{ __html: data.contactText2 }}
//                   />
//                 </li>
//                 <li>
//                   <i
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'flex-start',
//                     }}
//                   >
//                     <FaPhoneAlt />
//                   </i>
//                   <span
//                     dangerouslySetInnerHTML={{ __html: data.contactText3 }}
//                   />
//                 </li>
//               </ul>
//               <div className="cs_social_btns cs_style_1">
//                 <Link to={data.facebookHref} className="cs_center">
//                   <i>
//                     <FaFacebookF />
//                   </i>
//                 </Link>
//                 <Link to={data.pinterestHref} className="cs_center">
//                   <i>
//                     <FaPinterestP />
//                   </i>
//                 </Link>
//                 <Link to={data.twitterHref} className="cs_center">
//                   <i>
//                     <BsTwitter />
//                   </i>
//                 </Link>
//                 <Link to={data.instagramHref} className="cs_center">
//                   <i>
//                     <FaInstagram />
//                   </i>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {data.widgets.map((widget, index) => (
//             <div className="cs_footer_col" key={index}>
//               <div className="cs_footer_widget">
//                 <h2 className="cs_footer_widget_title">{widget.title}</h2>
//                 <ul className="cs_footer_widget_nav_list cs_mp_0">
//                   {widget.links.map((link, index) => (
//                     <li key={index}>
//                       <Link to={link.href}>{link.text}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}

//           <div className="cs_footer_col">
//             <div className="cs_footer_widget">
//               <h2 className="cs_footer_widget_title">Recent Posts</h2>
//               <ul className="cs_recent_post_list cs_mp_0">
//                 {data.recentPosts.map((post, index) => (
//                   <li key={index}>
//                     <div className="cs_recent_post">
//                       <Link to={post.href} className="cs_recent_post_thumb">
//                         <img src={post.image} alt="" />
//                       </Link>
//                       <div className="cs_recent_post_right">
//                         <p>{post.date}</p>
//                         <h3 className="cs_recent_post_title">
//                           <Link to={post.href}>{post.title}</Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const data = {
  logo: '/assets/img/footer_logo.svg',
  contactText: '24/7 available',
  contactText2: 'LB Nagar, Hyderabad.',
  contactText3: '099 695 695 35',
  facebookHref: '/',
  pinterestHref: '/',
  twitterHref: '/',
  instagramHref: '/',
  widgets: [
    {
      title: 'Quick Links',
      links: [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About Us' },
        { href: '/contact', text: 'Contact Us' },
        { href: '/', text: 'Team' },
      ],
    },
  ],
  copyrightText: 'Copyright © 2024 Survey, All Rights Reserved.',
};

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#002261', // Updated footer background color
      color: '#fff',
      padding: '40px 0',
      fontFamily: '"Helvetica", sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>

          {/* Footer Logo and Contact Information */}
          <div style={{
            flex: '1 1 30%',
            marginBottom: '40px',  // Adjusted marginBottom once
            paddingRight: '15px',
          }}>
            <div style={{ marginBottom: '20px' }}>
              {/* <img src={data.logo} alt="Logo" style={{ width: '150px', marginBottom: '10px' }} /> */}
              <h4 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#2ea6f7',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
                SURVEYS
              </h4>
            </div>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              lineHeight: '1.8',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                fontSize: '16px',
              }}>
                <FaRegClock style={{
                  fontSize: '20px',
                  color: '#2ea6f7',
                  marginRight: '10px',
                }} />
                <span>{data.contactText}</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                fontSize: '16px',
              }}>
                <FaLocationDot style={{
                  fontSize: '20px',
                  color: '#2ea6f7',
                  marginRight: '10px',
                }} />
                <span>{data.contactText2}</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                fontSize: '16px',
              }}>
                <FaPhoneAlt style={{
                  fontSize: '20px',
                  color: '#2ea6f7',
                  marginRight: '10px',
                }} />
                <span>{data.contactText3}</span>
              </li>
            </ul>
            <div style={{
              marginTop: '20px',
            }}>
              <Link to={data.facebookHref} style={{
                display: 'inline-block',
                marginRight: '15px',
                color: '#fff',
                fontSize: '24px',
                transition: 'color 0.3s ease',
              }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FaFacebookF />
              </Link>
              <Link to={data.pinterestHref} style={{
                display: 'inline-block',
                marginRight: '15px',
                color: '#fff',
                fontSize: '24px',
                transition: 'color 0.3s ease',
              }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FaPinterestP />
              </Link>
              <Link to={data.twitterHref} style={{
                display: 'inline-block',
                marginRight: '15px',
                color: '#fff',
                fontSize: '24px',
                transition: 'color 0.3s ease',
              }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <BsTwitter />
              </Link>
              <Link to={data.instagramHref} style={{
                display: 'inline-block',
                marginRight: '15px',
                color: '#fff',
                fontSize: '24px',
                transition: 'color 0.3s ease',
              }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div style={{
            flex: '1 1 30%',
            marginBottom: '40px',  // Adjusted marginBottom once
            paddingRight: '15px',
          }}>
            <div>
              <h2 style={{
                fontSize: '20px',
                marginBottom: '10px',
                fontWeight: 'bold',
                color: '#fff',
                textTransform: 'uppercase',
              }}>
                Quick Links
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: '0',
              }}>
                {data.widgets[0].links.map((link, index) => (
                  <li key={index} style={{
                    marginBottom: '12px',
                  }}>
                    <Link to={link.href} style={{
                      textDecoration: 'none',
                      color: '#fff',
                      fontSize: '16px',
                      transition: 'color 0.3s ease',
                    }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Section (Right Corner) */}
          <div style={{
            flex: '1 1 30%',
            marginBottom: '40px',  // Adjusted marginBottom once
          }}>
            {/* Google Map iframe (or you can use other map services) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.561571904155!2d-122.4261233846815!3d37.77354597975891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809f5a597c83%3A0x7efaba4c4a474c4f!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1673112183613!5m2!1sen!2sus"
              width="100%" height="300" style={{
                border: '0', borderRadius: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              }} allowFullScreen="" loading="lazy" />
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{
          marginTop: '40px',
          fontSize: '14px',
          textAlign: 'center',
        }}>
          <p style={{
            color: 'white',
          }}>{data.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

