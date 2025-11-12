import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  const sampleUsers = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul>
          {sampleUsers.map((user, index) => (
            <li key={index} className="border p-4 rounded mb-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
