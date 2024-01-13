import PropTypes from "prop-types";
import BlogCard from "./BlogCard";

const Blogs = ({ availableBlogs }) => {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
      {availableBlogs.map((item, index) => (
        <BlogCard key={index} blog={item} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  availableBlogs: PropTypes.array,
};

export default Blogs;
