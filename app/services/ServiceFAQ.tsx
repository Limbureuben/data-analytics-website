"use client";

import { useId, useState } from "react";

const questions = [
  {
    question: "How does a project usually begin?",
    answer: "We start with a focused discovery conversation to understand the decision, audience, evidence, and outcomes that matter most.",
  },
  {
    question: "Can you work with our existing team and tools?",
    answer: "Yes. We design around the people and systems already in place, then bring in only the specialist capability needed to close the gaps.",
  },
  {
    question: "Do you handle both strategy and delivery?",
    answer: "We do. The same integrated team can move from research and strategy through design, implementation, measurement, and iteration.",
  },
  {
    question: "How do you measure success?",
    answer: "We agree on practical indicators at the start, make progress visible throughout the work, and use evidence to improve what we build.",
  },
];

export default function ServiceFAQ() {
  const id = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="service-faq" aria-labelledby={`${id}-title`}>
      <div className="service-faq-intro">
        <p>Working together</p>
        <h2 id={`${id}-title`}>A few things you may want to know.</h2>
      </div>

      <div className="service-faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${id}-panel-${index}`;
          const buttonId = `${id}-button-${index}`;

          return (
            <div className={`service-faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <i aria-hidden="true" />
                </button>
              </h3>
              <div
                className="service-faq-answer"
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
              >
                <div><p>{item.answer}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
