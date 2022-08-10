import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";



const AllBlogs = React.lazy(() => import("./Pages/AllBlogs"))
const NewBlog = React.lazy(() => import("./Pages/NewBlog"))
const BlogContent = React.lazy(() => import("./Pages/BlogContent"))
const Layout = React.lazy(() => import("./components/layout/Layout"))
const NoFound = React.lazy(() => import("./Pages/NoFound"))


function App() {
  return (

    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/blogs" />
          </Route>
          <Route path="/blogs" exact>
            <AllBlogs />
          </Route>
          <Route path="/blogs/:blogsId">
            <BlogContent />
          </Route>
          <Route path="/new-blog">
            <NewBlog />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
