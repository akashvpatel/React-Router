import BlogForm from "../components/blogs/BlogForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { addBlog } from "../lib/api";
import { useEffect } from "react";

const NewBlog = () => {
  const { sendRequest, status } = useHttp(addBlog);
  const history = useHistory();




  useEffect(() => {
    if (status === "completed") {
      history.push("/blogs");
    }
  }, [status, history]);

  const addBlogHandler = (blogData) => {
    sendRequest(blogData);
  };

  return (
    <BlogForm isLoading={status === 'pending'} onAddblog={addBlogHandler} />
  )
};


export default NewBlog;