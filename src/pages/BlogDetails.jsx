import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
    const params = useParams();

    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (loading && !data)
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link to={"/blog"} className="btn btn-outline-primary">
                Volver a Blog
            </Link>
        </>
    );
};

export default BlogDetails;
