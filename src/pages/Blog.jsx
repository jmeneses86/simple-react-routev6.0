import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    const [searchParams, setsearchParams] = useSearchParams();

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading && !data)
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );

    if (error) return <p>Error: {error.message}</p>;

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setsearchParams({ filter });
        } else {
            setsearchParams({});
        }
    };

    return (
        <>
            <h1>Blog</h1>
            <input
                type="text"
                name=""
                onChange={handleChange}
                className="form-control my-3"
                value={searchParams.get("filter") || ""}
            ></input>
            <ul className="list-group">
                {data &&
                    data
                        .filter((item) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let name = item.title.toLowerCase();
                            return name.startsWith(filter.toLowerCase());
                        })
                        .map((item) => (
                            <Link
                                to={`/blog/${item.id}`}
                                key={item.id}
                                className="list-group-item"
                            >
                                {item.title}
                            </Link>
                        ))}
            </ul>
        </>
    );
};

export default Blog;
