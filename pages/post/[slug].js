import { client } from '../../lib/sanity/client';
import React, { useState } from 'react';
import { urlFor } from '../../lib/sanity/client';
import Image from 'next/image'

const Post = ({post}) => {
  const { title, mainImage, body } = post;

  console.log(post)
  return (
    <article>
   <img src={urlFor(post?.mainImage)} className="blog-banner-image" />
   <h2>{post.title}</h2>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  
  return {
    props: {
      post
    }
  }
}

export default Post