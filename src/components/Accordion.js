import AccordianItem from './AccordionItem.js';

export default function Accordion({ faqs }) {
  return (
    <div className="space-y-4 mb-20">
      {faqs.map((faq) => (
        <AccordianItem
          key={faq.id}
          content={faq}
        />
      ))}
    </div>
  );
}