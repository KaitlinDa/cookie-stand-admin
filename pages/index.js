import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import CookieStandAdmin from '../components/CookieStandAdmin';

export default function Home() {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setUser({ name: 'Admin' });
    }
  };

  const handleCreate = (newReport) => {
    setReports([...reports, newReport]);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="p-8">
        {user ? (
          <CookieStandAdmin onCreate={handleCreate} reports={reports} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </main>

      <Footer />
    </div>
  );
}

