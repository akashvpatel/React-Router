import classes from './HighlightedBlog.module.css';

const HighlightedBlog = (props) => {
  return (
    <figure className={classes.blog}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedBlog;
