import { Link } from 'react-router-dom';
import classes from './NoBlogsFound.module.css';

const NoBlogsFound = () => {
  return (
    <div className={classes.noblogs}>
      <p>No Blogs found!</p>
      <Link className='btn' to="/new-blog">
        Add a Blog
      </Link>
    </div>
  );
};

export default NoBlogsFound;
