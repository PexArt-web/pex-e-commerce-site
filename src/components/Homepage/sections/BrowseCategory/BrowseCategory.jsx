import CategoryIcons from "./CategoryIcons";

const BrowseCategory = () => {
  const categoryIcons = [{
    id: 1,
    icons:<i className="bi bi-phone"></i>,
    iconTitle:'Pone'
  },
  {
    id: 2,
    icons:<i className="bi bi-tools"></i>,
    iconTitle:'Electronics'
  },
  {
    id: 3,
    icons:<i className="bi bi-laptop"></i>,
    iconTitle:'Home & Lifestyle'
  },

]
const showIcons = categoryIcons.map(icon => (
  <CategoryIcons key={icon.id} {...icon} />
))
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
        <div className="d-flex gap-3 justify-content-center">
        {showIcons}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;
