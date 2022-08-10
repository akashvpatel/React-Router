import classes from './BlogItem.module.css';
import { Link } from 'react-router-dom';
const BlogItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>

      </figure>
      <Link className='btn' to={`/blogs/${props.id}`}>
        Read
      </Link>
    </li>
  );
};

export default BlogItem;
