export type FaqItem = {
  category: "Planning" | "Methods" | "Cost & travel" | "Safety" | "Recovery";
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    category: "Planning",
    question: "How do I know whether I am a suitable candidate?",
    answer: "A clinical assessment should consider your hair-loss pattern, donor capacity, age, health history, medication and expectations. Photos can begin the conversation, but they should not replace an appropriate medical review.",
  },
  {
    category: "Methods",
    question: "What is the difference between FUE, DHI and Sapphire FUE?",
    answer: "FUE describes how individual grafts are extracted. DHI usually refers to implantation with a pen-style tool, while Sapphire FUE refers to a blade material used when opening recipient channels. The complete plan matters more than the label alone.",
  },
  {
    category: "Cost & travel",
    question: "How much does a hair transplant cost in Turkey?",
    answer: "Prices vary by clinic model, medical involvement, case complexity and what the package includes. Compare the written clinical scope, accommodation, transfers, medication and follow-up rather than relying on a headline number.",
  },
  {
    category: "Safety",
    question: "How should I verify a clinic?",
    answer: "Confirm the named physician, professional registration, treatment facility, responsibility for each procedure step, patient volume, documentation and aftercare arrangements before paying a deposit.",
  },
  {
    category: "Planning",
    question: "How many grafts will I need?",
    answer: "A responsible estimate depends on the treatment area, hair characteristics, donor supply and long-term hair-loss plan. A remote estimate should be treated as provisional until the medical team completes its assessment.",
  },
  {
    category: "Recovery",
    question: "When are the final results visible?",
    answer: "Hair growth develops gradually and varies by patient. Clinics should explain the expected phases, normal temporary shedding and when progress reviews will take place instead of promising an exact result date.",
  },
  {
    category: "Cost & travel",
    question: "How long should I stay in Turkey?",
    answer: "The itinerary depends on consultation timing, the procedure and the first aftercare review. Confirm the required arrival and departure windows with the clinic before booking flights.",
  },
  {
    category: "Safety",
    question: "Who should perform the procedure?",
    answer: "Patients should know which parts are performed by a physician and which may be delegated to qualified team members under local rules. The clinic should explain names, roles and supervision clearly.",
  },
  {
    category: "Methods",
    question: "Is one transplant method always better?",
    answer: "No single technique is automatically best for every patient. Donor management, hairline planning, team skill, medical oversight and suitability can be more important than the tool being marketed.",
  },
  {
    category: "Recovery",
    question: "What does aftercare usually include?",
    answer: "Aftercare commonly includes washing instructions, medication guidance, activity restrictions, contact details and scheduled photo reviews. Ask how long support continues after you return home.",
  },
  {
    category: "Cost & travel",
    question: "What should be included in a treatment package?",
    answer: "Request an itemised offer covering the procedure, medical consultations, medication, hotel nights, local transfers, interpreters, aftercare products and any services that carry an extra charge.",
  },
  {
    category: "Safety",
    question: "What are warning signs during the booking process?",
    answer: "Pressure to pay immediately, guaranteed graft counts or results, unclear physician identity, refusal to share licence details and sales staff answering medical questions are reasons to pause and investigate further.",
  },
];

