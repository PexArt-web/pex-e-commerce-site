import CategoryIcons from "./CategoryIcons";

const BrowseCategory = () => {
  return (
    <section>
      <div className="category--browse card p-3">
        <nav>
          <h5 className="browseCategory--title p-2">Categories</h5>
          <h2>Browse By Category</h2>
        </nav>
        <div className="cate--icon">
          <div className="card-body"></div>
        </div>
        <CategoryIcons />
      </div>
    </section>
  );
};

export default BrowseCategory;
