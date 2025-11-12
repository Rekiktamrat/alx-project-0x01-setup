import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  const samplePosts = [
    { title: 'First Post', body: 'This is the first post.' },
    { title: 'Second Post', body: 'This is the second post.' },
  ];

  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        {samplePosts.map((post, index) => (
          <PostCard key={index} title={post.title} body={post.body} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
