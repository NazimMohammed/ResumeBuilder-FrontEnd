import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#e5e7eb",
        padding: "30px 20px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1000px",
          margin: "auto",
          gap: "20px",
        }}
      >


        {/* Brand */}
        <div>
          <h3>Resume App</h3>
          <p style={{ maxWidth: "220px" }}>
           A Web application to get
          </p>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        {/* Support */}
        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        {/* Social */}
        <div>
          <h4>Follow Us</h4>
          <p>🌐 Instagram</p>
          <p>🐦 Twitter</p>
          <p>📘 Facebook</p>
        </div>
      </div>

      <hr style={{ margin: "20px 0", borderColor: "#374151" }} />

      <p style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} WeatherApp. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
