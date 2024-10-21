

const Blog = ({blog}) => {
    const {title} =blog
    return (
        <div>
            <h1>blog title:{title}</h1>
        </div>
    );
};

export default Blog;