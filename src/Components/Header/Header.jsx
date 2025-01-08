

import { useEffect, useState } from 'react';
import { FaEnvelope, FaAngleRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from storage
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); // Set loggedIn state to false
    navigate('/'); // Redirect to home page after logout
  };

  const menu = {
    email: 'support@surveysphere.tech',
    logoUrl: '/assets/img/logo.svg',
    logoLink: '/',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Join Now', href: '/join' },
      // New Surveys link, checks if user is logged in
      {
        label: 'Surveys',
        href: isLoggedIn ? '/surveys' : '/login', // Redirect to /surveys if logged in, otherwise to /login
        onClick: () => {
          if (!isLoggedIn) {
            // If the user is not logged in, alert them or handle accordingly
            alert('Please login to take surveys');
          }
        }
      },
      {
        label: isLoggedIn ? 'SignOut' : 'SignIn',
        href: isLoggedIn ? '/' : '/login', // Change href based on login status
        onClick: isLoggedIn ? handleLogout : undefined, // Logout function if logged in
      },
    ],
    btnUrl: '/join',
    btnText: 'Join Now',
  };

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    // Check if the token exists in localStorage (for keeping the user logged in)
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // If token exists, user is logged in
    } else {
      setIsLoggedIn(false); // If no token, user is logged out
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${variant ? variant : ''} cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link to={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <h4 className="mt-3">surveysphere</h4>
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}>
                    {menu.navItems.map((item, index) => (
                      <li className={item.subItems ? 'menu-item-has-children' : ''} key={index}>
                        <Link
                          to={item.href}
                          onClick={() => {
                            if (item.onClick) item.onClick(); // If there's an onClick, trigger it
                            setIsShowMobileMenu(!isShowMobileMenu); // Toggle mobile menu visibility
                          }}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index) ? 'block' : 'none',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.href}
                                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${isShowMobileMenu && 'cs_toggle_active'}`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {variant === 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;


