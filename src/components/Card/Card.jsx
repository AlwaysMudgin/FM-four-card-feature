import React from 'react';

const CARDS = {
  Supervisor: {
    color: 'cyan',
    icon: './assets/images/icon-supervisor.svg',
    text: 'Monitors activity to identify project roadblocks',
  },
  'Team Builder': {
    color: 'red',
    icon: './assets/images/icon-team-builder.svg',
    text: 'Scans our talent network to create the optimal team for your project',
  },
  Karma: {
    color: 'orange',
    icon: './assets/images/icon-karma.svg',
    text: 'Regularly evaluates our talent to ensure quality',
  },
  Calculator: {
    color: 'blue',
    icon: './assets/images/icon-calculator.svg',
    text: 'Uses data from past projects to provide better delivery estimates',
  },
};

function Card({ title }) {
  return (
    <article className="card">
      <div className={`ribbon ${CARDS[title].color}`}></div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{CARDS[title].text}</p>
      </div>
      <div className="icon-container">
        <img
          src={CARDS[title].icon}
          alt={`${title} icon`}
          className="card-icon"
        />
      </div>
    </article>
  );
}

export default Card;
