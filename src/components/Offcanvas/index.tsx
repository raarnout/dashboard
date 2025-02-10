"use client";

export default function Offcanvas() {
  return (
    <>
      {/* Button to open Offcanvas */}
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demoOffcanvas">
        Open Offcanvas
      </button>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-start" id="demoOffcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <p>This is a sidebar menu using Bootstrap Offcanvas in Next.js.</p>
          <button className="btn btn-secondary" data-bs-dismiss="offcanvas">Close</button>
        </div>
      </div>
    </>
  );
}
