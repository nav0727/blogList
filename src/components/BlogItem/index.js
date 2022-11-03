import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list">
      <div className="di1">
        <h1>{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
