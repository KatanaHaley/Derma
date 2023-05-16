import { client } from '../../lib/sanity/client';
import React, { useState } from 'react';
import { urlFor } from '../../lib/sanity/client';
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

const Post = ({post}) => {
  const { title, mainImage, body } = post;

  // console.log(Object.values(body))
  return (
    <article>
   <h2 className="font-bold ml-20 mt-20 text-3xl" >{post.title}</h2>
   <p className="ml-20 mt-2">{new Date(post?._createdAt).toDateString()}</p>
      <div className="flex justify-center mb-10">

   <img src={urlFor(post?.mainImage)} className="blog-img" />
      </div>
      <div className="ml-20 mr-20 mb-20">
   {post.body && <PortableText value={post.body} />}
      </div>

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