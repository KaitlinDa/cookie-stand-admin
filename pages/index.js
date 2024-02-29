import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';

export default function Home() {
  const [reports, setReports] = useState([]);

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
      <CreateForm onCreate={handleCreate} />
      {reports.length === 0 ? (
        <h2 className="my-5 text-xl text-center">No Cookie Stands Available</h2>
      ) : (
        <ReportTable reports={reports} />
      )}
    </main>
      <Footer />
    </div>
  );
}

