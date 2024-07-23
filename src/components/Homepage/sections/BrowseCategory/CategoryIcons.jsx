const CategoryIcons = ({id, iconTitle, icons}) => {
  return (
    <div>
      <div className="iconCategory rounded">
      <div>{icons}</div>
        <p>{iconTitle}</p>
      </div>
    </div>
  )
}

export default CategoryIcons
