import config from '../../config';

const links = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Skills',
    url: '/skills',
  },
  {
    title: 'Resume',
    url: config.RESUME_LINK,
    new_tab: true,
  },
];

export default links;
