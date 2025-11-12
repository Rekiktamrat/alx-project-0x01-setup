import Header from '@/components/layout/Header';

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold mb-4">Users Page</h2>
        <p>This is where the users will appear.</p>
      </main>
    </div>
  );
};

export default UsersPage;
