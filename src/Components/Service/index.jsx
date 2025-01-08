


// import { FaAngleDoubleRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import SectionHeading from '../SectionHeading';

// const Service = ({ data, cardBg }) => {
//   const cardWidth = '260px'; // Set a fixed width for all cards
//   const cardHeight = '280px'; // Set a fixed height for all cards

//   return (
//     <div className="container">
//       <SectionHeading
//         variant={'cs_type_1'}
//         SectionTitle={data.title}
//         SectionSubtitle={data.subtitle}
//         SectionDescription={data.description}
//       />
//       <div className="cs_height_50 cs_height_lg_50" />
//       <div className="row cs_row_gap_30 cs_gap_y_30">
//         {data?.services.map((service, index) => (
//           <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
//             <div
//               className={`cs_iconbox cs_style_2 cs_radius_15 cs_hover_layer_2 ${
//                 cardBg ? '' : 'cs_gray_bg'
//               }`}
//               style={{
//                 width: cardWidth,   // Same width for all cards
//                 height: cardHeight, // Same height for all cards
//               }}
//             >
//               <div
//                 className="cs_iconbox_overlay cs_bg_filed"
//                 // style={{
//                 //   backgroundImage: `url(${service.backgroundImage})`,
//                 // }}
//               />
//               <div className="cs_iconbox_shape" />
//               <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
//                 <div className="cs_iconbox_icon cs_center">
//                   <img src={service.iconUrl} alt="Service Icon" />
//                 </div>
//                 <h3 className="iconbox_index">{service.index}</h3>
//               </div>
//               <h3 className="cs_iconbox_title">
//                 <h5>{service.title}</h5>
//               </h3>
//               <p className="cs_iconbox_subtitle m-0">{service.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cs_service_footer" data-aos="fade-up">
//         <div className="cs_service_footer_icon">
//           <img src={data.footerIcon} alt="Icon" />
//         </div>
//         <div className="cs_service_footer_text cs_medium">
//           <span dangerouslySetInnerHTML={{ __html: data.footerText }} />
//           <Link to={data.footerLink}>
//             {data.footerLinkText}
//             <span>
//               <i>
//                 <FaAngleDoubleRight />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;




import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading';

const Service = ({ data, cardBg }) => {
  const cardWidth = '260px'; // Set a fixed width for all cards
  const cardHeight = '280px'; // Set a fixed height for all cards

  // State to handle responsive layout based on window size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update the state based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Check if the screen is smaller than 768px
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize); // Add event listener for resizing

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="container"
      style={{
        paddingLeft: isSmallScreen ? '15px' : '30px', // Adjust left padding for small screens
        paddingRight: isSmallScreen ? '15px' : '30px', // Adjust right padding for small screens
      }}
    >
      {/* Section Heading */}
      <SectionHeading
        variant={'cs_type_1'}
        SectionTitle={data.title}
        SectionSubtitle={data.subtitle}
        SectionDescription={data.description}
      />

      {/* Spacing for large screens */}
      <div className="cs_height_50 cs_height_lg_50" />

      {/* Service Cards */}
      <div className="row cs_row_gap_30 cs_gap_y_30">
        {data?.services.map((service, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className={`cs_iconbox cs_style_2 cs_radius_15 cs_hover_layer_2 ${
                cardBg ? '' : 'cs_gray_bg'
              }`}
              style={{
                width: isSmallScreen ? '100%' : cardWidth,  // Full width on small screens, fixed width on large
                height: isSmallScreen ? 'auto' : cardHeight, // Auto height for small screens
              }}
            >
              <div className="cs_iconbox_overlay cs_bg_filed" />
              <div className="cs_iconbox_shape" />
              <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                <div className="cs_iconbox_icon cs_center">
                  <img src={service.iconUrl} alt="Service Icon" />
                </div>
                <h3 className="iconbox_index">{service.index}</h3>
              </div>
              <h3 className="cs_iconbox_title">
                <h5>{service.title}</h5>
              </h3>
              <p className="cs_iconbox_subtitle m-0">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="cs_service_footer" data-aos="fade-up">
        <div className="cs_service_footer_icon">
          <img src={data.footerIcon} alt="Icon" />
        </div>
        <div className="cs_service_footer_text cs_medium">
          <span dangerouslySetInnerHTML={{ __html: data.footerText }} />
          <Link to={data.footerLink}>
            {data.footerLinkText}
            <span>
              <i>
                <FaAngleDoubleRight />
              </i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;


