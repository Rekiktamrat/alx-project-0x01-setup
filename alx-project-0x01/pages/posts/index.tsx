import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold mb-4">Posts Page</h2>
        <p>This is where the posts will appear.</p>
      </main>
    </div>
  );
};

export default PostsPage;
