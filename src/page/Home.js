import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Home() {
  return (
    <div className="container">
      <header className="bg-primary text-white py-3">
        <h1 className="text-center">Welcome to My Website</h1>
      </header>

      <section className="my-5">
        <h2>About Me</h2>
        <p>This is a simple website built with React and Bootstrap.</p>
        <p>It demonstrates basic usage of Bootstrap components.</p>
      </section>

      <section className="my-5">
        <h2>Contact</h2>
        <p>Email: example@email.com</p>
        <p>Phone: 123-456-7890</p>
      </section>

      <footer className="bg-secondary text-white py-3">
        <p className="text-center">© {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
}

export default Home;