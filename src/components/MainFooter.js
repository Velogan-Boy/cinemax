import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MainFooter() {
   return (
      <Footer
         style={{ paddingBottom: 75 }}
         columns={[
            {
               title: 'About',
               items: [
                  {
                     title: 'Terms',
                     url: '/',
                  },
                  {
                     title: 'Conditions',
                     url: '/',
                  },
                  {
                     title: 'Privacy Policy',
                     url: '/',
                  },
                  {
                     title: 'Purchase Policy',
                     url: '/',
                  },
               ],
            },
            {
               title: '"CINEMATRIX"',
               style: {
                  textAlign: 'center',
               },
               items: [
                  {
                     title: 'Cinematrix is the movie ticket booking web app.',
                  },
                  {
                     title: 'Designed and implemented by aspiring Full Stack Web Developer.',
                  },
                  {
                     title: `Velmurugan Jeyakumar`,
                     icon: <CopyrightOutlinedIcon />,
                     url: 'https://www.github.com/Velogan-Boy',
                     openExternal: true,
                  },
               ],
            },
            {
               title: 'Follow me',
               items: [
                  {
                     icon: <GitHubIcon />,
                     title: 'Github',
                     url: 'https://www.github.com/Velogan-Boy',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
                  {
                     icon: <LinkedInIcon />,
                     title: 'LinkedIn',
                     url: 'https://www.linkedin.com/in/velmurugan-jeyakumar/',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
                  {
                     icon: <InstagramIcon />,
                     title: 'Instagram',
                     url: 'https://www.instagram.com/velogan_boy/',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
               ],
            },
         ]}
         bottom="Made with ❤️ by Velan"
      />
   );
}
