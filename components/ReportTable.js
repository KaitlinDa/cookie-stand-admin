export default function ReportTable({ reports }) {
    if (reports.length === 0) {
      return <h2 className="text-xl text-center">No Cookie Stands Available</h2>;
    }
  
    const tableHeaders = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
    const tableRows = reports.map(report => (
      <tr key={report.location}>
        <td>{report.location}</td>
        {report.hourlySales.map((sale, index) => (
          <td key={index}>{sale}</td>
        ))}
        <td>{report.hourlySales.reduce((total, current) => total + current, 0)}</td>
      </tr>
    ));
  
    return (
      <table className="w-full mt-4">
        <thead>
          <tr>
            {tableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
  
  