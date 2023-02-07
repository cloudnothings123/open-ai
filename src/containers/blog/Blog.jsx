import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are on the cutting edge.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2022" title="GPT-3 and Open  AI is the future. Let's explore how and why."/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Aug 22, 2020" title="GPT-3 design team makes groundbreaking discovery"/>
          <Article imgUrl={blog03} date="Jan 20, 2023" title="The future belongs to GPT-3 and OpenAI"/>
          <Article imgUrl={blog04} date="Sep 20, 2021" title="The intelligence behind GPT-3 doesn't feel artificial - it feels as real as you or me."/>
          <Article imgUrl={blog05} date="Oct 26, 2021" title="Why AI doesn't mean the robots are taking over"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
