class SpecialHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: Arial, sans-serif;
        }

        /* ================= TOP BAR ================= */
        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: #222;
          display: flex;
          align-items: center;
          overflow-x: auto;
          white-space: nowrap;
          z-index: 1000;
        }

        .top-item {
          flex: 0 0 auto;
          width: 180px;
          height: 40px;
          margin: 0 5px;
          background: #333;
          color: aqua;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          text-transform: uppercase;
          font-size: 13px;
        }

        .top-item:hover {
          background: #555;
          color: white;
        }

        /* ================= MENU BUTTON (ALWAYS VISIBLE) ================= */
        .menu-btn {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 2000;
          background: #333;
          color: white;
          padding: 10px 15px;
          border-radius: 6px;
          cursor: pointer;
          user-select: none;
        }

        .menu-btn:hover {
          background: #444;
        }

        /* ================= SIDEBAR ================= */
        .sidebar {
          position: fixed;
          top: 0;
          left: -280px;
          width: 260px;
          height: 100vh;
          background: #111;
          overflow-y: auto;
          padding-top: 70px;
          transition: 0.3s ease;
          z-index: 1500;
        }

        /* OPEN STATE */
        .sidebar.open {
          left: 0;
        }

        .menu-item {
          margin: 6px 10px;
          padding: 12px;
          background: #222;
          color: aqua;
          border-radius: 6px;
          text-transform: uppercase;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
        }

        .menu-item:hover {
          background: #444;
          color: white;
        }

        a {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .top-item {
            width: 140px;
            font-size: 11px;
          }

          .sidebar {
            width: 220px;
          }
        }
      </style>

      <!-- MENU BUTTON (FIXED ALWAYS VISIBLE) -->
      <div class="menu-btn">☰ MENU</div>

      <!-- TOP BAR -->
      <div class="topbar">
        ${this.renderTopBar()}
      </div>

      <!-- SIDEBAR -->
      <div class="sidebar">
        ${this.renderSidebar()}
      </div>
    `;

    // TOGGLE LOGIC
    const menuBtn = this.shadowRoot.querySelector(".menu-btn");
    const sidebar = this.shadowRoot.querySelector(".sidebar");

    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  /* TOP BAR */
  renderTopBar() {
    return Array(12).fill("Bangladesh Navy")
      .map(text => `<div class="top-item">${text}</div>`)
      .join("");
  }

  /* SIDEBAR */
  renderSidebar() {
    return `
      <div class="menu-item"><a href="stateboard.html">Live state board</a></div>
      <div class="menu-item"><a href="gxmaker.html">genform making</a></div>
      <div class="menu-item"><a href="index.html">gx book</a></div>
      <div class="menu-item"><a href="shnshipscompany.html">shn ships company</a></div>
      <div class="menu-item"><a href="leaverequestform.html">Leave request form</a></div>
      <div class="menu-item"><a href="victualling.html">Gangway victualling</a></div>
      <div class="menu-item"><a href="checksheet.html">gangway check book</a></div>
      <div class="menu-item"><a href="leavedayribook.html">Leave diary book</a></div>
      <div class="menu-item"><a href="requestconditionn.html">All request condition</a></div>
      <div class="menu-item"><a href="manualofnavallaw.html">Manual of Naval law</a></div>
      <div class="menu-item"><a href="part1.html">navy regulation part1</a></div>
      <div class="menu-item"><a href="part2.html">navy regulation part2</a></div>
    `;
  }
}

customElements.define("special-header", SpecialHeader);