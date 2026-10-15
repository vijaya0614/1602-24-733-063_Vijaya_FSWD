<!DOCTYPE html>
<html>
<head>
  <title>Employee Details</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body style="font-family: Arial; background-color: #f0f4f8; padding: 30px;">

  <div id="root"></div>

  <script type="text/babel">
    const employees = [
      { id: 1, name: "Akash", department: "IT", salary: 60000 },
      { id: 2, name: "Priya", department: "HR", salary: 45000 },
      { id: 3, name: "Rahul", department: "Finance", salary: 55000 },
      { id: 4, name: "Sneha", department: "IT", salary: 40000 }
    ];

    function EmployeeTable() {
      return (
        <div style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px #ccc"
        }}>
          <h2 style={{
            textAlign: "center",
            color: "#1e3a8a"
          }}>
            Employee Details
          </h2>

          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center"
          }}>
            <thead>
              <tr style={{
                backgroundColor: "#1e3a8a",
                color: "white"
              }}>
                {["ID", "Name", "Department", "Salary"].map(
                  (heading) => (
                    <th key={heading} style={{
                      padding: "14px",
                      border: "1px solid #ddd"
                    }}>
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} style={{
                  backgroundColor:
                    emp.salary > 50000 ? "#c8f7c5" : "#f8fafc",
                  color: "#333"
                }}>
                  <td style={cellStyle}>{emp.id}</td>
                  <td style={cellStyle}>{emp.name}</td>
                  <td style={cellStyle}>{emp.department}</td>
                  <td style={cellStyle}>₹{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{
            textAlign: "center",
            color: "#15803d",
            fontSize: "14px",
            marginTop: "18px"
          }}>
            Green rows indicate salary above ₹50,000.
          </p>
        </div>
      );
    }

    const cellStyle = {
      padding: "12px",
      border: "1px solid #ddd"
    };

    ReactDOM.createRoot(document.getElementById("root"))
      .render(<EmployeeTable />);
  </script>

</body>
</html>