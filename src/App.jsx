import Card from './components/Card/Card';

import './App.css';

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <h1>
            Reliable, efficient delivery <span>Powered by Technology</span>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </section>
        <section className="cards">
          <Card title="Supervisor" />
          <div className="middle-cards">
            <Card title="Team Builder" />
            <Card title="Karma" />
          </div>
          <Card title="Calculator" />
        </section>
      </main>
      <footer>
        <p class="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://github.com/AlwaysMudgin/FM-four-card-feature">
            Brian
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
