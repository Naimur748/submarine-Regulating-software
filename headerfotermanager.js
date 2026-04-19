class SpecialHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          all: initial;
          font-family: Arial, sans-serif;
        }

        /* ================= TOP BAR ================= */
        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: #1e1e2f;
          display: flex;
          align-items: center;
          overflow-x: auto;
          white-space: nowrap;
          z-index: 1000;
          padding-left: 60px;
        }

        .top-item {
          flex: 0 0 auto;
          width: 160px;
          height: 38px;
          margin: 0 5px;
          background: #2c2c3e;
          color: #00e5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-size: 12px;
          transition: 0.3s;
        }

        .top-item:hover {
          background: #00e5ff;
          color: #000;
        }

        /* ================= MENU BUTTON ================= */
        .menu-btn {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 2000;
          background: #00e5ff;
          color: black;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        /* ================= SIDEBAR ================= */
        .sidebar {
          position: fixed;
          top: 0;
          left: -270px;
          width: 260px;
          height: 100vh;
          background: #111;
          overflow-y: auto;
          transition: 0.3s ease;
          z-index: 1500;
          padding-top: 60px;
        }

        .sidebar.open {
          left: 0;
        }

        /* CLOSE BUTTON */
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: bold;
        }

        .menu-item {
          margin: 6px 10px;
          padding: 12px;
          background: #222;
          color: #00e5ff;
          border-radius: 6px;
          font-size: 13px;
          transition: 0.3s;
        }

        .menu-item:hover {
          background: #00e5ff;
          color: black;
        }

        a {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .top-item {
            width: 120px;
            font-size: 10px;
          }

          .sidebar {
            width: 220px;
          }
        }
      </style>

      <!-- MENU BUTTON -->
      <div class="menu-btn">☰ MENU</div>

      <!-- TOP BAR -->
      <div class="topbar">
        ${this.renderTopBar()}
      </div>

      <!-- SIDEBAR -->
      <div class="sidebar">
        <div class="close-btn">✖</div>
        ${this.renderSidebar()}
      </div>
    `;

    const menuBtn = this.shadowRoot.querySelector(".menu-btn");
    const sidebar = this.shadowRoot.querySelector(".sidebar");
    const closeBtn = this.shadowRoot.querySelector(".close-btn");

    // OPEN / CLOSE TOGGLE
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }

  /* ================= TOP BAR ================= */
  renderTopBar() {
    return Array(12).fill("Bangladesh Navy")
      .map(text => `<div class="top-item">${text}</div>`)
      .join("");
  }

  /* ================= SIDEBAR LINKS ================= */
  renderSidebar() {
    return `
      <div class="menu-item"><a href="./stateboard.html">Live state board</a></div>
      <div class="menu-item"><a href="./gxmaker.html">genform making</a></div>
      <div class="menu-item"><a href="./index.html">gx book</a></div>
      <div class="menu-item"><a href="./shnshipscompany.html">shn ships company</a></div>
      <div class="menu-item"><a href="./leaverequestform.html">Leave request form</a></div>
      <div class="menu-item"><a href="./victualling.html">Gangway victualling</a></div>
      <div class="menu-item"><a href="./checksheet.html">gangway check book</a></div>
      <div class="menu-item"><a href="./leavedayribook.html">Leave diary book</a></div>
      <div class="menu-item"><a href="./requestconditionn.html">All request condition</a></div>
      <div class="menu-item"><a href="./manualofnavallaw.html">Manual of Naval law</a></div>
      <div class="menu-item"><a href="./part1.html">navy regulation part1</a></div>
      <div class="menu-item"><a href="./part2.html">navy regulation part2</a></div>
    `;
  }
}

customElements.define("special-header", SpecialHeader);