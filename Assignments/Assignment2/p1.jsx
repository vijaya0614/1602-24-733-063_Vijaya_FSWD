<!DOCTYPE html>
<html>
<head>
  <title>React Event Handling</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body style="font-family: Arial; background-color: #f0f4f8; padding: 30px;">

  <div id="root"></div>

  <script type="text/babel">
    function EventDemo() {
      const [color, setColor] = React.useState("#60a5fa");
      const [message, setMessage] = React.useState("");
      const [key, setKey] = React.useState("");

      function handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted successfully!");
      }

      return (
        <div style={{
          maxWidth: "600px",
          margin: "auto",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px #ccc"
        }}>

          <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>
            React Event Handling
          </h2>

          <h3>1. Mouse Over and Mouse Out</h3>
          <div
            onMouseOver={() => setColor("#4ade80")}
            onMouseOut={() => setColor("#60a5fa")}
            onDoubleClick={() => setMessage("Box double-clicked!")}
            style={{
              backgroundColor: color,
              padding: "35px",
              textAlign: "center",
              color: "#1f2937",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            Hover over me or double-click me!
          </div>

          <p style={{ color: "#15803d" }}>{message}</p>

          <h3>2. Keyboard Event (onKeyDown)</h3>
          <input
            type="text"
            placeholder="Press any key..."
            onKeyDown={(e) => setKey(e.key)}
            style={inputStyle}
          />
          <p>Key pressed: <b>{key || "None"}</b></p>

          <h3>3. Form Submit Event</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "12px",
                backgroundColor: "#1e3a8a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Submit Form
            </button>
          </form>

        </div>
      );
    }

    const inputStyle = {
      width: "95%",
      padding: "12px",
      marginTop: "8px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "15px"
    };

    ReactDOM.createRoot(document.getElementById("root"))
      .render(<EventDemo />);
  </script>

</body>
</html>
