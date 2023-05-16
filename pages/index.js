import Image from 'next/image'
import { Posts, Navbar, Footer } from '../components'
import { client } from '../lib/sanity/client';
import { urlFor } from '../lib/sanity/client';
import Link from 'next/link'
import Hero
 from '@/components/Hero';
export default function Home({ posts, postData }) {
  return (
    <>
          <Hero />

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
     
      
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', _createdAt = '', mainImage, body, categories, author, excerpt }) =>
            slug && (
              <div key={_id} className="rounded overflow-hidden shadow-lg mr-5">
               <img src={urlFor(mainImage)} alt="blog images" className="w-full" />
                 <div className="px-6 py-4">
                 {new Date(_createdAt).toDateString()}
                 </div>
                 {/* {console.log(_createdAt)} */}
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <div className="font-bold text-xl mb-2">
                    {title} 
                  </div>
                  <p class="text-gray-700 text-base mb-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
                </Link>{' '}
                <div className="blog-intro-text">
                    {/* {paragraph1.split(" ").splice(0, 11).join(" ")}... */}
                    
                    {/* {console.log(mainImage)} */}
                </div>
                {/* <Button color="secondary" variant="outlined" size="small">Read more</Button>                 */}
              </div>
            )
        )}
      </div>
        </div>

      


      
    </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  const postQuery = '*[_type == "title"]';
  const postData = await client.fetch(postQuery);
  return {
    props: { posts, postData }
  }
}
