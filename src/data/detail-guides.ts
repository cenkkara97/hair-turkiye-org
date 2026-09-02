import type { DetailGuideContent } from "@/types/detail-guide";

const editorialNote = "This page contains structured sample copy. Medical review, clinic evidence and final citations should be added before search indexation.";

export const fueGuide: DetailGuideContent = {
  breadcrumb: "FUE",
  eyebrow: "Method guide",
  title: "FUE hair transplant: process, planning and questions to ask",
  intro: "Follicular Unit Extraction describes how individual grafts are removed from the donor area. The quality of the wider treatment still depends on planning, handling, placement and medical oversight.",
  quickAnswer: "FUE avoids a linear strip scar, but it is not automatically scar-free or suitable for every donor area. Ask about the complete treatment plan, not extraction alone.",
  readingTime: "7 minute guide",
  overview: {
    eyebrow: "Method in context",
    title: "FUE is an extraction method, not a complete quality label",
    paragraphs: ["During FUE, follicular units are extracted one at a time from the donor area. Those grafts are then prepared and implanted into recipient sites created according to the treatment plan.", "Punch selection, donor distribution, graft handling, hairline design and placement all influence the final outcome."],
    facts: [{ label: "Describes", value: "Individual graft extraction" }, { label: "Donor area", value: "Usually back and sides" }, { label: "Key question", value: "Who performs each step?" }],
    imageLabel: "FUE process image slot",
    imageAlt: "Temporary image representing FUE treatment planning",
  },
  sections: [
    { id: "process", eyebrow: "Treatment sequence", title: "How a typical FUE process is structured", intro: "Exact protocols vary, but a clear clinic explanation should cover each stage.", cards: [{ title: "Assessment and design", text: "Donor capacity, hair loss and recipient priorities are evaluated before the plan is finalised." }, { title: "Graft extraction", text: "Follicular units are removed with small punches and distributed across the donor zone." }, { title: "Recipient planning", text: "Sites are planned for direction, angle, distribution and the available graft supply." }, { title: "Placement and aftercare", text: "Grafts are implanted, checked and followed by written recovery instructions." }] },
    { id: "quality", eyebrow: "Beyond the method name", title: "The details that make FUE plans different", cards: [{ title: "Donor management", text: "Overharvesting can reduce future options and create visible thinning in the donor area." }, { title: "Graft handling", text: "Time outside the body, hydration and careful preparation should be controlled." }, { title: "Hairline strategy", text: "A realistic design considers age, facial proportions and future hair loss." }, { title: "Team responsibility", text: "Patients should know the physician and trained team members responsible for every stage." }] },
  ],
  decision: { eyebrow: "Suitability", title: "When FUE may be considered", intro: "Suitability is individual and should follow clinical assessment.", positiveTitle: "Potential advantages", positives: ["No linear donor scar", "Flexible graft-by-graft extraction", "Widely available in experienced clinics"], questionTitle: "Questions to resolve", questions: ["Is the donor area strong enough?", "What punch and extraction plan will be used?", "How will future hair loss be managed?"] },
  faqs: [{ question: "Does FUE leave scars?", answer: "FUE creates many small extraction sites rather than one linear scar. Visibility depends on healing, punch size, extraction pattern and hair length." }, { question: "Is FUE better than DHI?", answer: "The terms describe different stages. FUE is an extraction method; DHI usually refers to an implantation approach. They are not direct opposites." }, { question: "How many grafts can be extracted?", answer: "The safe range depends on donor density, hair characteristics and long-term planning. It should not be guaranteed from marketing photos alone." }],
  related: [{ href: "/hair-transplant/dhi", eyebrow: "Compare", title: "How DHI differs" }, { href: "/clinic-checklist", eyebrow: "Verify", title: "Clinic safety checklist" }],
  note: editorialNote,
};

export const dhiGuide: DetailGuideContent = {
  breadcrumb: "DHI",
  eyebrow: "Method guide",
  title: "DHI hair transplant: what the term means and what to compare",
  intro: "Direct Hair Implantation commonly refers to placing grafts with a pen-style implanter. It is often combined with FUE extraction and should be assessed as part of the complete surgical plan.",
  quickAnswer: "DHI mainly describes an implantation tool and workflow. It does not by itself prove greater density, faster healing or a better result.",
  readingTime: "6 minute guide",
  overview: { eyebrow: "Terminology", title: "DHI usually changes the implantation stage", paragraphs: ["Grafts are generally extracted individually and loaded into an implanter pen. The tool can help control placement during selected cases.", "The skill of the team, graft handling, donor plan and design remain central regardless of the device used."], facts: [{ label: "Describes", value: "Implantation workflow" }, { label: "Often paired with", value: "FUE extraction" }, { label: "Key question", value: "Who loads and implants?" }], imageLabel: "DHI implantation image slot", imageAlt: "Temporary image representing DHI implantation planning", imagePosition: "object-right" },
  sections: [
    { id: "process", eyebrow: "Workflow", title: "What happens during DHI implantation", cards: [{ title: "Extraction", text: "Individual grafts are collected from the donor area, commonly using FUE principles." }, { title: "Sorting", text: "Grafts are checked and organised according to follicle type and planned placement." }, { title: "Pen loading", text: "Prepared grafts are loaded into compatible implanter devices." }, { title: "Implantation", text: "The team places grafts according to the planned angle, direction and distribution." }] },
    { id: "comparison", eyebrow: "Marketing versus plan", title: "Claims that deserve a closer look", cards: [{ title: "Density", text: "High-density claims must still respect blood supply, graft availability and recipient area limits." }, { title: "No-shave options", text: "Partial or no-shave workflows may be possible in selected cases, not every patient." }, { title: "Team size", text: "Ask how many people load pens, place grafts and supervise quality." }, { title: "Case selection", text: "The tool should match the patient and plan rather than determine them." }] },
  ],
  decision: { eyebrow: "Suitability", title: "When DHI may fit the plan", intro: "The implantation approach may be useful in selected recipient areas and workflows.", positiveTitle: "Potential reasons to use it", positives: ["Controlled pen-based placement", "Useful in selected unshaven cases", "Flexible implantation workflow"], questionTitle: "Questions to resolve", questions: ["Who performs implantation?", "Why is DHI preferred for this case?", "Does the price reflect clinical value or branding?"] },
  faqs: [{ question: "Is DHI a separate extraction technique?", answer: "Usually not. Individual graft extraction is commonly carried out with FUE-style methods before pen implantation." }, { question: "Does DHI guarantee more density?", answer: "No. Achievable density depends on donor supply, recipient conditions, planning and safe placement." }, { question: "Is DHI always more expensive?", answer: "Pricing varies by clinic and package. Ask what changes clinically rather than judging the method by price alone." }],
  related: [{ href: "/hair-transplant/fue", eyebrow: "Foundation", title: "Understand FUE extraction" }, { href: "/hair-transplant/sapphire-fue", eyebrow: "Compare", title: "Sapphire FUE explained" }],
  note: editorialNote,
};

export const sapphireGuide: DetailGuideContent = {
  breadcrumb: "Sapphire FUE",
  eyebrow: "Method guide",
  title: "Sapphire FUE: blade material, clinical claims and patient questions",
  intro: "Sapphire FUE is generally marketed as an FUE procedure where sapphire blades are used to open recipient channels. The blade material is only one part of the treatment.",
  quickAnswer: "Sapphire describes the channel-opening blade, not a completely different extraction technique. Planning and clinical execution remain more important than the material name.",
  readingTime: "5 minute guide",
  overview: { eyebrow: "Method in context", title: "Sapphire refers to one tool used during recipient-site creation", paragraphs: ["After graft extraction, recipient sites may be opened using blades made from sapphire rather than conventional steel.", "Claims about incision size, healing or density should be supported by appropriate evidence and explained in relation to the individual case."], facts: [{ label: "Describes", value: "Channel-opening blade" }, { label: "Extraction", value: "Typically FUE" }, { label: "Key question", value: "Why is it suitable?" }], imageLabel: "Sapphire tool image slot", imageAlt: "Temporary image representing Sapphire FUE planning" },
  sections: [
    { id: "process", eyebrow: "Where it fits", title: "Sapphire within the wider procedure", cards: [{ title: "Assessment", text: "The clinic first evaluates donor supply, recipient needs and health suitability." }, { title: "Extraction", text: "Grafts are removed individually through an FUE workflow." }, { title: "Channel opening", text: "Sapphire blades may be used to prepare sites for implantation." }, { title: "Placement", text: "Grafts are positioned according to the planned direction and distribution." }] },
    { id: "claims", eyebrow: "Evidence questions", title: "How to assess common Sapphire FUE claims", cards: [{ title: "Smaller channels", text: "Ask for a clear clinical explanation rather than accepting a universal marketing claim." }, { title: "Faster recovery", text: "Recovery also depends on technique, case size, patient factors and aftercare." }, { title: "Greater density", text: "Density is limited by donor supply, tissue safety and the long-term design." }, { title: "Premium pricing", text: "Confirm what additional clinical service is included beyond the tool itself." }] },
  ],
  decision: { eyebrow: "Decision context", title: "Treat the blade as one variable", intro: "The treatment plan should explain why a particular tool is being used.", positiveTitle: "What may be useful", positives: ["A precise channel-opening option", "Familiar workflow for experienced teams", "Can be integrated with FUE planning"], questionTitle: "Questions to resolve", questions: ["What evidence supports the clinic's claims?", "Who opens the channels?", "Would the plan change with another blade?"] },
  faqs: [{ question: "Is Sapphire FUE different from FUE?", answer: "It is usually an FUE procedure with a specific blade material used during channel opening." }, { question: "Does sapphire guarantee better healing?", answer: "No tool can guarantee a recovery outcome. Technique, case size, patient factors and aftercare all contribute." }, { question: "Should the blade decide my clinic choice?", answer: "It should be a secondary consideration after physician responsibility, donor planning, facility standards and evidence." }],
  related: [{ href: "/hair-transplant/fue", eyebrow: "Foundation", title: "FUE process explained" }, { href: "/clinics", eyebrow: "Compare", title: "Clinic ranking framework" }],
  note: editorialNote,
};

export const candidateGuide: DetailGuideContent = {
  breadcrumb: "Candidate Assessment",
  eyebrow: "Planning guide",
  title: "Who may be a suitable candidate for a hair transplant?",
  intro: "Suitability depends on more than the size of the thinning area. A responsible assessment considers donor capacity, hair-loss progression, health and realistic expectations.",
  quickAnswer: "A transplant may be considered when donor supply and long-term planning can support a realistic goal. An individual medical assessment is essential.",
  readingTime: "6 minute assessment guide",
  overview: { eyebrow: "Suitability first", title: "The donor area sets the limits of the plan", paragraphs: ["A transplant redistributes existing follicles; it does not create unlimited new hair. The available donor area must support both current priorities and possible future hair loss.", "Age, pattern stability, hair calibre, scalp health and medical history can change the recommendation."], facts: [{ label: "Core resource", value: "Available donor hair" }, { label: "Planning horizon", value: "Current and future loss" }, { label: "Required", value: "Medical assessment" }], imageLabel: "Assessment image slot", imageAlt: "Temporary image representing a hair transplant candidate consultation" },
  sections: [
    { id: "assessment", eyebrow: "Clinical review", title: "What a candidate assessment should cover", cards: [{ title: "Hair-loss pattern", text: "The current pattern and likelihood of progression should be considered together." }, { title: "Donor capacity", text: "Density, calibre, extraction zone and safe long-term supply should be assessed." }, { title: "Health history", text: "Conditions, medication, smoking and previous procedures may affect planning." }, { title: "Expectations", text: "The proposed coverage and density should be realistic for the available grafts." }] },
    { id: "alternatives", eyebrow: "Before surgery", title: "When another step may come first", cards: [{ title: "Medical investigation", text: "Sudden or unexplained hair loss may need diagnosis before cosmetic planning." }, { title: "Non-surgical treatment", text: "A clinician may discuss stabilisation or supportive treatment where appropriate." }, { title: "Wait and monitor", text: "A changing pattern may benefit from observation before committing donor grafts." }, { title: "Revised expectations", text: "A smaller or staged plan may protect long-term options." }] },
  ],
  decision: { eyebrow: "Personal decision", title: "Candidate signals and reasons to pause", intro: "These are discussion points rather than a self-diagnosis.", positiveTitle: "Potentially supportive factors", positives: ["Adequate and stable donor area", "Realistic coverage expectations", "Health suitability confirmed"], questionTitle: "Reasons for further review", questions: ["Active or unexplained shedding", "Very limited donor capacity", "Expectations beyond the available supply"] },
  faqs: [{ question: "Am I too young for a transplant?", answer: "Age alone does not decide suitability, but an evolving hair-loss pattern can make long-term planning more difficult." }, { question: "Can a weak donor area be improved with more grafts?", answer: "No. Extracting more than the donor can safely provide may create visible thinning and reduce future options." }, { question: "Can photos confirm candidacy?", answer: "Photos can support an initial review but may not replace scalp examination, medical history and appropriate clinical assessment." }],
  related: [{ href: "/hair-transplant", eyebrow: "Overview", title: "Hair transplant planning" }, { href: "/clinic-checklist", eyebrow: "Prepare", title: "Questions before booking" }],
  note: editorialNote,
};

export const beforeAfterGuide: DetailGuideContent = {
  breadcrumb: "Before & After",
  eyebrow: "Results guide",
  title: "How to evaluate hair transplant before-and-after photos",
  intro: "Result galleries can be useful, but lighting, angles, hair length and case selection can distort the comparison. Learn what a credible case presentation should show.",
  quickAnswer: "Look for consistent lighting and angles, clear timelines, donor-area views and cases similar to your own. Photos should support — not replace — clinical evidence.",
  readingTime: "5 minute visual guide",
  overview: { eyebrow: "Read the evidence", title: "A convincing image is not always a comparable result", paragraphs: ["A strong case series documents the starting point, treatment plan, graft information, timeline and multiple views under similar conditions.", "Hair fibres, styling, wetness, camera distance and lighting can all change the apparent density."], facts: [{ label: "Compare", value: "Same angle and lighting" }, { label: "Timeline", value: "Clearly documented" }, { label: "Do not ignore", value: "Donor-area outcome" }], imageLabel: "Before / after image slots", imageAlt: "Temporary image representing a before and after results gallery" },
  sections: [
    { id: "photo-checks", eyebrow: "Visual checklist", title: "What credible result photos should include", cards: [{ title: "Matched conditions", text: "Camera angle, distance, lighting and hair preparation should be reasonably consistent." }, { title: "Several viewpoints", text: "Front, temples, top, crown and donor area may be relevant depending on the case." }, { title: "Clear timeline", text: "The clinic should state when each image was taken after treatment." }, { title: "Case context", text: "Hair characteristics, procedure type and approximate graft information add meaning." }] },
    { id: "red-flags", eyebrow: "Image literacy", title: "Presentation choices that can mislead", cards: [{ title: "Different hair length", text: "Longer hair can create the appearance of more coverage in the after image." }, { title: "Harsh versus soft light", text: "Lighting can make the scalp more or less visible without any clinical difference." }, { title: "Hair fibres or products", text: "Cosmetic concealers should be disclosed when used." }, { title: "Only selected angles", text: "Missing donor or crown views can hide important trade-offs." }] },
  ],
  decision: { eyebrow: "Use cases carefully", title: "A gallery should help you ask better questions", intro: "Use images to understand planning style and consistency, not to predict an identical personal outcome.", positiveTitle: "Useful signals", positives: ["Consistent documentation", "Multiple similar cases", "Natural long-term design"], questionTitle: "Questions to ask", questions: ["Is patient consent documented?", "Are products or fibres used?", "Can the donor area be reviewed?"] },
  faqs: [{ question: "Can I expect the same result as a gallery patient?", answer: "No. Donor supply, hair characteristics, loss pattern, healing and treatment plan vary between patients." }, { question: "Why are donor photos important?", answer: "They help show whether graft extraction left a balanced and visually acceptable donor area." }, { question: "Are early results useful?", answer: "They can show healing stages, but mature cosmetic assessment generally requires a clearly stated longer timeline." }],
  related: [{ href: "/hair-transplant/candidate", eyebrow: "Suitability", title: "Candidate assessment guide" }, { href: "/clinics", eyebrow: "Compare", title: "Clinic comparison" }],
  note: editorialNote,
};

export const costGuide: DetailGuideContent = {
  parent: { href: "/why-turkey", label: "Why Turkey" },
  breadcrumb: "Cost",
  eyebrow: "Cost guide",
  title: "Hair transplant cost in Turkey: compare the full package",
  intro: "Turkey is known for accessible package pricing, but a useful comparison must separate the clinical procedure from travel, accommodation, medication and follow-up.",
  quickAnswer: "Compare written inclusions and medical responsibility before comparing totals. The lowest headline price may exclude services or reflect a different care model.",
  readingTime: "7 minute cost guide",
  overview: { eyebrow: "Cost in context", title: "The quoted price is only useful when the scope is clear", paragraphs: ["A clinic may quote a package, a case-based fee or a price influenced by the planned graft range. Exchange rates and travel dates can also change the total trip cost.", "Final figures and country comparisons will be inserted after the SEO team completes market research."], facts: [{ label: "Compare", value: "Written package scope" }, { label: "Check", value: "Possible extra charges" }, { label: "Budget for", value: "Travel and recovery" }], imageLabel: "Cost planning image slot", imageAlt: "Temporary image representing treatment and travel cost planning" },
  sections: [
    { id: "package", eyebrow: "Package anatomy", title: "What may be included in a Turkey package", cards: [{ title: "Clinical services", text: "Assessment, procedure, facility use and immediate postoperative checks." }, { title: "Accommodation", text: "Hotel category, room terms and the exact number of nights." }, { title: "Local transfers", text: "Airport, hotel and clinic transport within the stated itinerary." }, { title: "Medication and follow-up", text: "Aftercare products, prescriptions and remote review period." }] },
    { id: "comparison", eyebrow: "Compare like with like", title: "Why two quotes may be difficult to compare", cards: [{ title: "Medical involvement", text: "The physician role and team model can differ substantially." }, { title: "Case complexity", text: "Repair work, crown coverage or limited donor supply may require different planning." }, { title: "Travel assumptions", text: "Flights, extra hotel nights and companion costs may sit outside the package." }, { title: "Currency and terms", text: "Confirm payment currency, deposit, cancellation and refund conditions." }] },
  ],
  decision: { eyebrow: "Value assessment", title: "Cost should follow a safe treatment plan", intro: "A higher or lower figure does not prove quality on its own.", positiveTitle: "Signs of clear value", positives: ["Itemised written quotation", "Named medical responsibilities", "Defined aftercare period"], questionTitle: "Possible hidden costs", questions: ["Additional tests or medication", "Extra hotel or transfer charges", "Changes after in-person assessment"] },
  faqs: [{ question: "Is the price usually per graft?", answer: "Pricing models vary. Many international packages are case-based, while others reference a graft range. Request the exact written basis." }, { question: "Are flights normally included?", answer: "They are commonly separate, but every package differs. Check the written inclusions." }, { question: "Should I pay the full amount before travel?", answer: "Payment schedules vary. Confirm deposit, cancellation, refund and final-payment terms before transferring money." }],
  related: [{ href: "/why-turkey/travel-process", eyebrow: "Plan", title: "Travel process guide" }, { href: "/clinics", eyebrow: "Compare", title: "Compare clinic models" }],
  note: editorialNote,
};

export const standardsGuide: DetailGuideContent = {
  parent: { href: "/why-turkey", label: "Why Turkey" },
  breadcrumb: "Medical Standards",
  eyebrow: "Safety guide",
  title: "Medical standards to check before treatment in Turkey",
  intro: "Country reputation does not replace clinic-level verification. Patients should understand the facility, physician responsibility, documentation and aftercare behind an offer.",
  quickAnswer: "Verify the named medical team and treatment facility first. Accreditation can support the picture, but it should not replace licensing and individual clinical responsibility.",
  readingTime: "8 minute safety guide",
  overview: { eyebrow: "Start with responsibility", title: "Standards become meaningful when they can be verified", paragraphs: ["A polished clinic website may describe awards, memberships or accreditations. Each item should be checked against the issuing organisation and connected to the facility where treatment occurs.", "Patients should also know which professional is medically accountable before, during and after the procedure."], facts: [{ label: "Verify", value: "Facility and physician" }, { label: "Document", value: "Roles and consent" }, { label: "Confirm", value: "Aftercare contact" }], imageLabel: "Clinical standards image slot", imageAlt: "Temporary image representing a regulated clinical environment" },
  sections: [
    { id: "credentials", eyebrow: "Credentials", title: "What should be independently checkable", cards: [{ title: "Physician registration", text: "The doctor identity and professional registration should match the treatment offer." }, { title: "Facility licence", text: "Confirm the licensed location where the procedure will take place." }, { title: "Accreditation scope", text: "Check the issuing body, current status and whether it applies to the relevant facility." }, { title: "Team roles", text: "The clinic should describe who performs and supervises each clinical step." }] },
    { id: "patient-safety", eyebrow: "Patient pathway", title: "Safety continues beyond the procedure room", cards: [{ title: "Health screening", text: "Medical history, medication and relevant risk factors should be reviewed." }, { title: "Informed consent", text: "Risks, alternatives, limitations and the proposed plan should be explained." }, { title: "Emergency planning", text: "The patient should know how complications are escalated and where care is available." }, { title: "Long-term follow-up", text: "Remote review responsibilities should remain clear after travel." }] },
  ],
  decision: { eyebrow: "Evidence hierarchy", title: "Do not confuse recognition with regulation", intro: "Awards and public reputation may add context, but they do not replace medical accountability.", positiveTitle: "Stronger trust signals", positives: ["Current official records", "Named responsible clinicians", "Written safety and follow-up process"], questionTitle: "Signals to investigate", questions: ["Unverifiable accreditation logos", "Unclear treatment location", "Sales staff making medical decisions"] },
  faqs: [{ question: "Does accreditation guarantee a good result?", answer: "No. It may indicate organisational standards, but individual planning, skill, suitability and aftercare still matter." }, { question: "Can technicians participate?", answer: "Professional roles and permitted delegation depend on local rules. Patients should receive a clear explanation of who performs each step and under whose supervision." }, { question: "What documents should I request?", answer: "Ask for clinic and physician details, the treatment plan, consent information, payment terms, medication instructions and aftercare contacts." }],
  related: [{ href: "/clinic-checklist", eyebrow: "Tool", title: "Complete the verification checklist" }, { href: "/sources", eyebrow: "Evidence", title: "Source standards" }],
  note: editorialNote,
};

export const travelGuide: DetailGuideContent = {
  parent: { href: "/why-turkey", label: "Why Turkey" },
  breadcrumb: "Travel Process",
  eyebrow: "Patient journey",
  title: "Planning a hair transplant trip to Turkey",
  intro: "A smooth treatment trip depends on clinical preparation and practical logistics working together. Build the itinerary around medical requirements rather than flight prices alone.",
  quickAnswer: "Confirm assessment, arrival window, treatment location, hotel nights, transfers and the first follow-up before booking non-refundable travel.",
  readingTime: "8 minute travel guide",
  overview: { eyebrow: "Plan in sequence", title: "The medical itinerary should come before the travel itinerary", paragraphs: ["Clinics often coordinate hotels and local transfers, but the patient remains responsible for understanding the full schedule and package terms.", "Allow enough time for consultation, the planned procedure and immediate aftercare before departure."], facts: [{ label: "Before flights", value: "Confirm clinic dates" }, { label: "Keep available", value: "Documents and contacts" }, { label: "After return", value: "Follow-up schedule" }], imageLabel: "Patient travel image slot", imageAlt: "Temporary image representing travel to Istanbul for treatment", imagePosition: "object-right" },
  sections: [
    { id: "before-travel", eyebrow: "Before departure", title: "Prepare the medical and practical details", cards: [{ title: "Remote assessment", text: "Send requested information and understand which decisions remain provisional." }, { title: "Written itinerary", text: "Confirm consultation, treatment and follow-up dates in local time." }, { title: "Package scope", text: "Check hotel nights, transfers, companion terms and extra costs." }, { title: "Travel documents", text: "Review passport, entry, insurance and medication requirements relevant to the trip." }] },
    { id: "in-turkey", eyebrow: "During and after the visit", title: "Know each hand-off in the patient journey", cards: [{ title: "Arrival contact", text: "Save the coordinator and clinic contact details before landing." }, { title: "In-person review", text: "Expect the final plan to be confirmed after appropriate assessment." }, { title: "Discharge information", text: "Receive medication, washing, activity and emergency instructions in writing." }, { title: "Home follow-up", text: "Know when to send photos and who answers clinical concerns after departure." }] },
  ],
  decision: { eyebrow: "Travel safety", title: "Leave room for care, not only convenience", intro: "A very compressed itinerary can reduce flexibility if the plan changes or review is needed.", positiveTitle: "Useful preparation", positives: ["Flexible travel where possible", "Clear local contacts", "Written aftercare plan"], questionTitle: "Questions before booking", questions: ["When is it safe to fly home?", "What if the plan changes on arrival?", "Who handles a concern after return?"] },
  faqs: [{ question: "How many days should I stay?", answer: "The required stay depends on the clinic schedule and procedure. Confirm the arrival and safe departure window before booking travel." }, { question: "Should I buy travel insurance?", answer: "Review available coverage and exclusions carefully, especially where planned medical treatment is involved." }, { question: "Can I travel alone?", answer: "Many patients do, but personal support needs vary. Ask the clinic what assistance is included and consider help during early recovery." }],
  related: [{ href: "/why-turkey/cost", eyebrow: "Budget", title: "Full cost guide" }, { href: "/clinic-checklist", eyebrow: "Prepare", title: "Pre-booking checklist" }],
  note: editorialNote,
};
