import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Tags } from "@tryghost/helpers-gatsby"
import { readingTime as readingTimeHelper } from "@tryghost/helpers"
import avatar from "../../images/icons/avatar.svg"

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`
  const readingTime = readingTimeHelper(post)
  console.log(post, "<< post")

  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {post.feature_image && (
          <div
            className="post-card-image"
            style={{
              backgroundImage: `url(${post.feature_image})`,
            }}
          ></div>
        )}
        {post.tags && (
          <div className="text-tag uppercase text-xs">
            {" "}
            <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}
        {post.featured && <span>Featured</span>}
        <h2 className="text-2xl text-primary font-bold mb-2">{post.title}</h2>
      </header>
      <section className="text-secondary text-base mb-4">
        {post.excerpt}
      </section>
      <footer>
        <div className="flex gap-x-2 items-center">
          <div>
            {post.primary_author.profile_image ? (
              <img
                className="h-9 w-9"
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
              />
            ) : (
              <img
                className="h-9 w-9 bg-avatar rounded-full"
                src={avatar}
                alt={post.primary_author.name}
              />
            )}
          </div>
          <div>
            <a className="block text-primary text-sm leading-none">{post.primary_author.name}</a>
            <span className="text-secondary text-xs leading-none">{readingTime}</span>
          </div>
        </div>
      </footer>
    </Link>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default PostCard
