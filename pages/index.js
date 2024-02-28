import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="p-4 text-center bg-green-500">
        <h1 className="text-4xl font-bold text-white">Cookie Stand Admin</h1>
      </header>

      <main className="p-8">
        <form className="p-4 bg-green-300 rounded-md">
          <div className="flex mb-4 space-x-2">
            <label htmlFor="location" className="flex-grow">
              <input name="location" type="text" placeholder="Location" className="w-full p-2" />
            </label>
            <label htmlFor="minCustomers" className="flex-grow">
              <input name="minCustomers" type="number" placeholder="Minimum Customers" className="w-full p-2" />
            </label>
            <label htmlFor="maxCustomers" className="flex-grow">
              <input name="maxCustomers" type="number" placeholder="Maximum Customers" className="w-full p-2" />
            </label>
            <label htmlFor="avgCookies" className="flex-grow">
              <input name="avgCookies" type="number" placeholder="Average Cookies per Sale" className="w-full p-2" />
            </label>
          </div>
          <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">
            Create
          </button>
        </form>

        <div className="p-4 mt-4 bg-green-200">
          <p>{'{"location": "Downtown", "minimumCustomers": 5, "maximumCustomers": 15, "averageCookies": 2.5}'}</p>
        </div>
      </main>

      <footer className="p-4 text-center bg-green-500">
        <p className="text-white">&copy;2024 Cookie Stand Admin</p>
      </footer>
    </div>
  );
}

