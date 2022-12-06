import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styles from './BackLink.modules.css';

const { arrow } = styles;

export const BackLink = ({ to, children }) => {
  return (
    <Link className={arrow} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
