import { useEffect } from "react";
import BlogList from "../components/blogs/BlogList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/useHttp";
import { getAllBlogs } from "../lib/api";
import NoBlogsFound from "../components/blogs/NoBlogsFound";

const AllBlogs = () => {
  const { sendRequest, status, data: loadedBlogs, error } = useHttp(
    getAllBlogs,
    true
  );

  useEffect(() => {
    sendRequest();

  }, [sendRequest]);


  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centred focused">{error}</p>
  }

  if (status === "completed" && (!loadedBlogs || loadedBlogs.length === 0)) {
    return <NoBlogsFound />
  }
  return <BlogList blogs={loadedBlogs} />




};
export default AllBlogs;    