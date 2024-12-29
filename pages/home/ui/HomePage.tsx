'use client';

import { usePostQuery } from '../../../entities/post';

export default function HomePage() {
   const {
      data: posts = [],
      isLoading,
      isError,
   } = usePostQuery({
      queryKey: 'post',
      params: { data: 'posts' },
   });

   if (isLoading) return <>Loading....</>;
   if (isError) return <>Error!</>;
   return (
      <section>
         <ul className="p-2 bg-slate-600">
            {posts.map(post => (
               <li key={post.id}>{post.title}</li>
            ))}
         </ul>
      </section>
   );
}
