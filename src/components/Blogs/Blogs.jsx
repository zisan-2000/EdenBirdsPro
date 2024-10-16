import "aos/dist/aos.css";
import React from "react";
import { blogData } from "../../Data/Data";

const Blogs = () => {
  return (
    <div>
      <main data-aos="fade-up" data-aos-offset="200">
        <section className="container mb-10 py-8">
          <h1 className="heading">Our Latest Blogs</h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {blogData.map((blog, index) => (
              <div
                key={index}
                id="card"
                className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt="No image"
                    className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                  />
                </div>
                <div className="flex justify-between pt-2 text-slate-600">
                  <p>{blog.date}</p>
                  <p className="line-clamp-1">By {blog.author}</p>
                </div>
                <div className="space-y-3 py-3">
                  <h1 className="line-clamp-1 text-xl font-bold">
                    {blog.title}
                  </h1>
                  <p className="line-clamp-2">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;
