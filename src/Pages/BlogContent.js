import { Route, useParams, Link, useRouteMatch } from "react-router-dom"
import { Fragment, useEffect } from "react"
import Comments from "../components/comments/Comments"
import HighlightedBlog from "../components/blogs/HighlightedBlog";
import useHttp from "../hooks/useHttp";
import { getSingleBlog } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const BlogContent = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { blogId } = params;
    const { sendRequest, status, data: loadedBlog, error } = useHttp(getSingleBlog, true);
  



    useEffect(() => {
        sendRequest(blogId);
    }, [sendRequest, blogId]);

    
 
    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered">{error}</p>
    }


    if (!loadedBlog.text) {
        return <p>No blog found!</p>;
    }

    return (
        <Fragment>
            <HighlightedBlog text={loadedBlog.text} author={loadedBlog.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment >
    );
};
export default BlogContent;