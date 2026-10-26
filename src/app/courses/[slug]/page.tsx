import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { courses } from "@/lib/site-data";

type CourseCopy = {
  kicker: string;
  headline: string;
  intro: string;
  heroNote: string;
  levels: [string, string, string, string, string[]][];
  focusIntro: string;
  focus: [string, string, string][];
  learningTitle: string;
  learningIntro: string;
  learning: [string, string, string][];
  compareTitle: string;
  compareIntro: string;
  checklist: string[];
  admission: [string, string, string][];
  directionsIntro: string;
  directions: string[];
  faq: [string, string][];
};

const courseCopy: Record<string, CourseCopy> = {
  engineering: {
    kicker: "Engineering & technology · Course pathway",
    headline: "Build ideas into systems that work.",
    intro: "Explore engineering disciplines, compare how programmes are structured, and identify the questions that matter when choosing a college.",
    heroNote: "Design · Build · Improve",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Explore B.E., B.Tech and related undergraduate pathways. Compare subject combinations, specialisations, practical work and entry requirements for each programme.", ["B.E.", "B.Tech", "Engineering degrees"]],
      ["02", "AFTER A FIRST DEGREE", "Postgraduate", "Look into M.E., M.Tech and related postgraduate study. Check accepted prior qualifications, specialisation fit, selection steps and the awarding institution.", ["M.E.", "M.Tech", "Specialist study"]],
    ],
    focusIntro: "Engineering programmes combine scientific principles with designing, building and improving systems. Compare both the core curriculum and the practical opportunities in each branch.",
    focus: [["01", "Computing & software", "Study computational thinking, software systems, data and emerging digital technologies."], ["02", "Mechanical & manufacturing", "Explore machines, materials, product design, production and automation."], ["03", "Civil & infrastructure", "Look at structures, transport, water systems and the built environment."], ["04", "Electrical & electronics", "Understand circuits, power, communication systems and electronic devices."], ["05", "Chemical & process", "Explore materials, industrial processes, energy and process design."], ["06", "Emerging specialisations", "Compare newer focus areas and the foundations behind each programme."]],
    learningTitle: "Learn by understanding how things work.",
    learningIntro: "Look beyond the branch name. Compare the balance between mathematical foundations, laboratories, design work and projects across the programmes you shortlist.",
    learning: [["01", "Engineering foundations", "Mathematics, sciences, computing and core principles for the chosen branch."], ["02", "Labs & design work", "Laboratory practice, technical tools, prototypes and design exercises."], ["03", "Projects & application", "Team projects, internships or industry exposure where the programme provides them."]],
    compareTitle: "Compare the branch and the learning environment.",
    compareIntro: "A familiar course title can hide important differences. Review the actual curriculum and facilities before comparing colleges.",
    checklist: ["Branch, curriculum and elective choices", "Laboratories, projects and practical hours", "Eligibility and current selection route", "Recognition, approvals and fee details"],
    admission: [["01", "Subject eligibility", "Check required subjects, qualifying examinations and any minimum criteria for the exact programme."], ["02", "Selection route", "Confirm which entrance examinations or institution-level steps apply for the current intake."], ["03", "Application details", "Verify dates, documents, application steps and fees from the official admissions notice."], ["04", "Programme recognition", "Check the current status of the institution and programme with the relevant official authority."]],
    directionsIntro: "Engineering study can connect with many kinds of work. Research the skills and qualifications expected in the areas that interest you.",
    directions: ["Software development", "Product design", "Construction", "Manufacturing", "Energy systems", "Electronics", "Research", "Data & automation"],
    faq: [["Which engineering branch should I choose?", "Start with the subjects and problems that interest you. Compare the curriculum, practical work and possible directions for each branch rather than choosing by title alone."], ["What should I study in Class 11 and 12?", "Requirements vary by programme and institution. Check the current eligibility criteria for each engineering course you plan to consider."], ["Are entrance examinations required?", "Selection routes vary by institution, programme and admission category. Use the current official admission notice to confirm the applicable process."], ["How do I compare engineering colleges?", "Compare the exact branch, curriculum, facilities, location, fees, current recognition and student support using official sources."]],
  },
  "medical-allied-health": {
    kicker: "Health & life sciences · Course pathway",
    headline: "Explore a future centred on health and care.",
    intro: "Understand the range of clinical, allied health and life science pathways, then check the distinct eligibility and admission rules for each course.",
    heroNote: "Care · Science · Service",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Explore medicine, dentistry, nursing, pharmacy, allied health and life science programmes. Each pathway has its own eligibility, selection and regulatory requirements.", ["Clinical routes", "Allied health", "Life sciences"]],
      ["02", "AFTER A FIRST DEGREE", "Postgraduate", "Compare advanced study within a specific health or science discipline. Check accepted qualifications, registration requirements and the current selection process.", ["Specialist study", "Master’s routes", "Research pathways"]],
    ],
    focusIntro: "Health and life science courses differ in their learning settings, professional scope and admission rules. Identify which area fits your interests before comparing programmes.",
    focus: [["01", "Medicine & dentistry", "Review clinical education pathways and their current official entrance and eligibility requirements."], ["02", "Nursing & pharmacy", "Explore patient care, medicines, practice placements and discipline-specific recognition."], ["03", "Allied health sciences", "Compare diagnostic, therapeutic and rehabilitation-focused study routes."], ["04", "Public & community health", "Look at population health, prevention, health systems and community practice."], ["05", "Life sciences", "Study biological systems, laboratory methods, biotechnology and research foundations."], ["06", "Nutrition & wellness", "Explore evidence-based study of nutrition, health promotion and wellbeing."]],
    learningTitle: "See how science connects to care.",
    learningIntro: "Compare the scientific foundations, supervised practice and professional requirements included in each course. Clinical placements and registration rules differ by discipline.",
    learning: [["01", "Scientific foundations", "Core biology, chemistry, anatomy or other subjects relevant to the pathway."], ["02", "Practice & placements", "Laboratory, clinical or community learning as defined by the programme."], ["03", "Professional standards", "Current registration, recognition and scope-of-practice requirements for the discipline."]],
    compareTitle: "Check the exact course and professional pathway.",
    compareIntro: "Health courses can have specific regulatory requirements. Verify details with the institution and the relevant official regulator before applying.",
    checklist: ["Exact course title and professional scope", "Recognition and current approvals", "Practice or clinical placement structure", "Eligibility, selection and fees"],
    admission: [["01", "Eligibility", "Confirm required subjects, examinations, age or other criteria in the official current notice."], ["02", "Entrance & selection", "Some pathways use national or institution-level selection processes; confirm the rule for the specific course."], ["03", "Practice requirements", "Check placement, health, documentation and professional requirements that apply to the programme."], ["04", "Recognition & registration", "Verify the course and institution with the relevant official regulator or council."]],
    directionsIntro: "Possible directions depend on the course, further study and professional registration. Research the qualifications required for each role.",
    directions: ["Clinical practice", "Diagnostics", "Patient support", "Rehabilitation", "Pharmacy", "Public health", "Laboratory science", "Research"],
    faq: [["Are all health courses admitted through the same entrance exam?", "No. Admission routes vary by course and institution. Check the current official notice and the relevant regulator for the exact pathway."], ["Can I study allied health without choosing medicine?", "There are multiple allied health and life science pathways. Compare their curriculum, professional scope and eligibility before deciding."], ["What should I verify before joining a health programme?", "Confirm current recognition, eligibility, practical training arrangements, fees and any registration requirements with official sources."], ["Does ASPIN confirm professional registration eligibility?", "ASPIN helps you identify what to check. Final eligibility and registration requirements should be confirmed with the institution and relevant official authority."]],
  },
  management: {
    kicker: "Business & management · Course pathway",
    headline: "Understand how ideas become organisations.",
    intro: "Explore management study by level, subject focus and learning style—from foundational business degrees to postgraduate programmes.",
    heroNote: "People · Ideas · Impact",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Look into BBA, BBM and related bachelor’s programmes. Compare the core subjects, practical learning, specialisation options and entry requirements.", ["BBA", "BBM", "Business-focused degrees"]],
      ["02", "AFTER GRADUATION", "Postgraduate", "Compare MBA, PGDM and related postgraduate routes. Check each programme’s recognition, format, entry process, fees and areas of focus.", ["MBA", "PGDM", "Postgraduate study"]],
    ],
    focusIntro: "Management brings together people, markets, resources and decisions. These areas can help you compare course content and possible focus areas.",
    focus: [["01", "Finance & accounting", "Understand how organisations plan, record and make decisions about money."], ["02", "Marketing & communication", "Explore customer needs, brand strategy, research and communication."], ["03", "People & organisations", "Study teams, workplace behaviour, talent and organisational culture."], ["04", "Operations & supply chains", "Look at how products and services are planned, delivered and improved."], ["05", "Business analytics", "Use data, quantitative methods and digital tools to inform business decisions."], ["06", "Entrepreneurship & strategy", "Examine how ideas become ventures and how organisations set direction."]],
    learningTitle: "Learn to see the whole organisation.",
    learningIntro: "Look beyond the programme name. A management course may combine business fundamentals with research, group projects, case discussions and practical work. Compare how each college balances these elements.",
    learning: [["01", "Business fundamentals", "Accounting, economics, marketing and organisational behaviour."], ["02", "Applied thinking", "Projects, presentations, case work and research methods."], ["03", "A chosen focus", "Electives or specialisations that vary by course and institution."]],
    compareTitle: "Check the programme, not just the college name.",
    compareIntro: "Start with the ASPIN Bengaluru directory, then confirm the exact management programme, eligibility, fees and admissions information on the college’s official website.",
    checklist: ["Programme title and curriculum", "Eligibility and selection process", "Recognition and awarding body", "Fees, format and location"],
    admission: [["01", "Entry requirements", "Required subjects, minimum marks and any experience criteria."], ["02", "Selection", "Entrance tests, interviews, group discussions or other selection steps."], ["03", "Application details", "Current dates, documents, fees and the application process."], ["04", "Recognition", "The institution, awarding body and current programme recognition."]],
    directionsIntro: "Management study may connect with different kinds of work. Treat these as areas to research, and compare the skills and qualifications each role expects.",
    directions: ["Marketing", "Finance", "People operations", "Business analysis", "Operations", "Entrepreneurship", "Consulting", "Product & strategy"],
    faq: [["What can I study after Class 12?", "Depending on the institution, undergraduate options may include BBA, BBM or other business-focused bachelor’s programmes. Compare the curriculum and check eligibility on each institution’s official site."], ["What is the difference between an MBA and a PGDM?", "They are different programme types, and details vary by provider. Check the awarding or approving body, recognition, curriculum, fees and admission requirements directly with the institution."], ["Do I need to study commerce to choose management?", "Not always. Entry requirements differ across programmes and institutions, so check the required subjects and eligibility for each course you are considering."], ["Which specialisation should I choose?", "Start with the kind of work and problems that interest you. Compare the subjects, practical learning and progression options within each specialisation before deciding."]],
  },
  law: {
    kicker: "Law & public life · Course pathway",
    headline: "Study the rules that shape everyday life.",
    intro: "Explore legal education routes by your current study stage, compare the focus of each programme and verify recognition and admission requirements.",
    heroNote: "Rights · Reasoning · Society",
    levels: [
      ["01", "AFTER CLASS 12", "Integrated undergraduate", "Review integrated law degrees that combine legal study with another undergraduate discipline. Compare curriculum, duration, selection route and current recognition.", ["BA LL.B.", "BBA LL.B.", "Integrated law"]],
      ["02", "AFTER GRADUATION", "Graduate-entry & advanced", "Depending on your prior qualification, explore LLB or postgraduate law study. Confirm eligibility, accepted degrees and the exact professional route with the institution.", ["LLB", "LLM", "Legal studies"]],
    ],
    focusIntro: "Legal programmes may combine doctrine, research, writing and practical exercises. Compare how the course develops your understanding of law and public institutions.",
    focus: [["01", "Constitutional law", "Explore public institutions, rights, duties and constitutional principles."], ["02", "Business & corporate law", "Study legal frameworks that apply to companies, commerce and transactions."], ["03", "Criminal justice", "Understand criminal law, procedure, evidence and justice systems."], ["04", "International law", "Examine legal questions across borders, treaties and global institutions."], ["05", "Research & advocacy", "Build legal research, writing, reasoning and oral presentation skills."], ["06", "Policy & governance", "Explore how laws and public policy influence society and administration."]],
    learningTitle: "Build a careful, evidence-based argument.",
    learningIntro: "Compare the balance between legal principles, research, writing and practical learning. Moots, clinics and internships differ by college and programme.",
    learning: [["01", "Legal foundations", "Core concepts, cases, legislation and legal systems."], ["02", "Research & writing", "Finding authority, evaluating sources and presenting clear arguments."], ["03", "Practice & public context", "Moots, clinics, policy work or internships where offered."]],
    compareTitle: "Check recognition and the route each degree supports.",
    compareIntro: "Legal qualifications and professional pathways have specific rules. Verify the current recognition status and requirements before making a decision.",
    checklist: ["Degree title and duration", "Current recognition and approval", "Curriculum and practical opportunities", "Eligibility, selection and total fees"],
    admission: [["01", "Entry route", "Confirm the accepted qualifications and any entrance test, interview or selection process."], ["02", "Recognition", "Verify the programme and institution against current official requirements for legal education."], ["03", "Application", "Check current deadlines, documents, fees and counselling or admission steps."], ["04", "Professional pathway", "Clarify what additional requirements apply for the legal work you may wish to pursue."]],
    directionsIntro: "A law degree can lead toward varied further study and work. Research the current qualifications, registration or examination requirements for each direction.",
    directions: ["Legal practice", "Corporate compliance", "Public service", "Policy research", "Legal operations", "Academia", "Mediation", "Civil society"],
    faq: [["What is the difference between integrated law and LLB?", "Integrated courses combine law with another undergraduate discipline, while LLB routes depend on prior study. Check the exact programme structure and eligibility with the institution."], ["Can I study law after graduation?", "Some programmes offer graduate-entry routes. Eligibility and duration differ, so verify accepted prior qualifications and current requirements."], ["How do I check if a law course is recognised?", "Use the official institution information and relevant legal education authority sources to confirm current recognition before applying."], ["Are internships guaranteed?", "Practical opportunities vary by institution and course. Review the curriculum and ask the college about its actual arrangements."]],
  },
  "arts-science": {
    kicker: "Humanities & sciences · Course pathway",
    headline: "Follow the questions that make you curious.",
    intro: "Explore arts, humanities, social sciences and natural science programmes, and compare subject combinations, learning methods and progression routes.",
    heroNote: "Ideas · Evidence · Discovery",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Compare BA, BSc and other bachelor’s programmes by subject combination, teaching approach, practical components and eligibility.", ["BA", "BSc", "Subject combinations"]],
      ["02", "AFTER A FIRST DEGREE", "Postgraduate", "Explore MA, MSc and related postgraduate programmes that deepen a subject area. Check prerequisites, research options and course format.", ["MA", "MSc", "Research pathways"]],
    ],
    focusIntro: "A broad subject area can lead in many academic directions. Compare the subjects you will actually study, including electives, labs, field work and research.",
    focus: [["01", "Literature & languages", "Study writing, texts, communication, language and cultural expression."], ["02", "History & philosophy", "Explore ideas, societies, evidence and the ways people interpret the past."], ["03", "Psychology & sociology", "Understand behaviour, groups, institutions and social change."], ["04", "Economics & political science", "Examine markets, governance, public policy and institutions."], ["05", "Physical sciences", "Explore physics, chemistry, mathematics and scientific methods."], ["06", "Biological & environmental sciences", "Study living systems, ecosystems, conservation and laboratory practice."]],
    learningTitle: "Ask better questions. Find stronger evidence.",
    learningIntro: "Learning methods vary by subject. Look for a balance of lectures, discussion, laboratory or field work, writing, data analysis and independent projects.",
    learning: [["01", "Subject foundations", "Core concepts, methods and vocabulary within the chosen discipline."], ["02", "Evidence & inquiry", "Research, experiments, close reading, data or field-based investigation."], ["03", "Interdisciplinary choices", "Electives and combinations that let you connect ideas across subjects."]],
    compareTitle: "Compare the subjects behind the degree title.",
    compareIntro: "Programme names alone do not show the full study experience. Review the syllabus, elective availability and practical requirements.",
    checklist: ["Major, minor and elective choices", "Syllabus and teaching methods", "Lab, field or research components", "Eligibility, fees and progression options"],
    admission: [["01", "Subject prerequisites", "Check required subjects or prior knowledge for the exact programme and institution."], ["02", "Selection route", "Confirm whether admission uses qualifying results, an entrance exam or another process."], ["03", "Course structure", "Review combinations, electives, attendance, practical requirements and assessment methods."], ["04", "Next study options", "Ask how the qualification can connect to further study, research or professional pathways."]],
    directionsIntro: "Arts and science study can support many kinds of further study and work. Explore the skills and additional qualifications relevant to your interests.",
    directions: ["Research", "Education", "Public policy", "Writing & media", "Laboratory science", "Environment", "Social services", "Analytics"],
    faq: [["How do I choose between BA and BSc?", "Start with the subjects and learning methods you prefer. Degree titles can vary by institution, so compare the actual curriculum and requirements."], ["Can I combine more than one subject?", "Some programmes offer combinations, minors or electives; availability differs by college. Check the current course structure."], ["Do science courses always include laboratory work?", "Practical components vary across disciplines and programmes. Review the syllabus and ask the college about lab or field requirements."], ["What can I do after an arts or science degree?", "Possible directions depend on your subjects, experience and further qualifications. Research pathways that fit your interests and verify their requirements."]],
  },
  "information-technology": {
    kicker: "Computing & digital systems · Course pathway",
    headline: "Turn curiosity about technology into capability.",
    intro: "Compare computing programmes by their foundations, practical work and specialisations—from applications and software to data and digital systems.",
    heroNote: "Code · Data · Systems",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Explore BCA, BSc computing, engineering and related degree routes. Compare prerequisites, mathematics content, programming and the course’s overall focus.", ["BCA", "BSc computing", "Technology degrees"]],
      ["02", "AFTER A FIRST DEGREE", "Postgraduate", "Look into MCA, MSc and other advanced computing routes. Check accepted prior subjects, bridge requirements, specialisations and selection steps.", ["MCA", "MSc", "Advanced computing"]],
    ],
    focusIntro: "Computing courses can differ in their emphasis on software, hardware, data, infrastructure and theory. Compare the actual subjects and projects before choosing.",
    focus: [["01", "Software development", "Explore programming, software design, testing and application development."], ["02", "Data & analytics", "Study databases, statistics, data handling and analytical methods."], ["03", "Cybersecurity", "Understand secure systems, risk, networks and digital protection."], ["04", "Cloud & networks", "Explore connected systems, infrastructure, distributed services and operations."], ["05", "Artificial intelligence", "Review machine learning, computation, data and responsible applications."], ["06", "Computer applications", "Compare practical computing foundations and how software serves users and organisations."]],
    learningTitle: "Learn through building and testing.",
    learningIntro: "Look for opportunities to apply concepts through coding, labs and team projects. Check what tools, infrastructure and mentoring the programme actually provides.",
    learning: [["01", "Computing foundations", "Programming, algorithms, mathematics and system fundamentals."], ["02", "Build & evaluate", "Projects, software testing, practical labs and technical documentation."], ["03", "Choose a focus", "Electives or specialisations in areas that vary by institution."]],
    compareTitle: "Compare the curriculum and the work you will do.",
    compareIntro: "A technology degree title does not tell you how much practical computing it includes. Review subjects, projects, prerequisites and current facilities.",
    checklist: ["Programming and mathematics foundations", "Project, lab and internship structure", "Specialisations and elective choices", "Eligibility, fees and awarding institution"],
    admission: [["01", "Prior subjects", "Check mathematics, computing or other subject requirements for each course."], ["02", "Selection", "Confirm any entrance tests, qualifying marks or institution-level selection steps."], ["03", "Practical learning", "Ask how labs, software access, projects and internships are structured."], ["04", "Course details", "Verify the current syllabus, fees, dates and awarding institution from official sources."]],
    directionsIntro: "Technology study can connect to different roles, but requirements change with the work and employer. Research the skills and experience each route expects.",
    directions: ["Software engineering", "Data analysis", "Cybersecurity", "Cloud operations", "Quality assurance", "Product support", "AI applications", "IT services"],
    faq: [["Is BCA the same as computer science engineering?", "They are distinct programme types with different structures and entry requirements. Compare curriculum, mathematics, practical work and progression options."], ["Do I need to know coding before joining?", "Entry expectations vary. Check the syllabus and eligibility of each programme; many courses introduce programming foundations."], ["Which is better: BCA, BSc or B.Tech?", "The best fit depends on your interests, eligibility and preferred depth of computing or engineering. Compare the actual subjects and learning methods."], ["What should I check in a technology programme?", "Review curriculum, lab access, projects, faculty support, internships where offered, eligibility and the awarding institution."]],
  },
  "design-media": {
    kicker: "Design & communication · Course pathway",
    headline: "Make ideas clear, useful and memorable.",
    intro: "Explore design, media and communication programmes, compare their creative practice and find out what portfolios or entrance steps may apply.",
    heroNote: "Imagine · Make · Communicate",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate", "Compare design, fine arts, animation, film and media degrees by studio practice, curriculum, portfolio expectations and selection process.", ["B.Des.", "BA / BFA", "Media degrees"]],
      ["02", "AFTER A FIRST DEGREE", "Postgraduate", "Explore advanced design, communication and media study. Check subject prerequisites, portfolio requirements, programme focus and assessment format.", ["M.Des.", "MA", "Specialist study"]],
    ],
    focusIntro: "Creative programmes can be highly specialised. Compare the tools, studio access, assessment style and portfolio expectations for the path you are considering.",
    focus: [["01", "Communication design", "Explore visual identity, typography, editorial work and information design."], ["02", "User experience", "Study how people interact with digital products and services."], ["03", "Animation & illustration", "Compare drawing, storytelling, motion and digital production."], ["04", "Film & photography", "Explore image-making, editing, production and visual narrative."], ["05", "Media & journalism", "Study reporting, media formats, research and communication."], ["06", "Fashion & product design", "Look at materials, form, use, making and design processes."]],
    learningTitle: "Create, critique and refine your work.",
    learningIntro: "Review how each programme combines creative foundations, software or studio practice, feedback and portfolio development. Resources differ across colleges.",
    learning: [["01", "Creative foundations", "Visual language, research, concepts and discipline-specific principles."], ["02", "Studio practice", "Making, iteration, critique and practical use of tools or materials."], ["03", "Portfolio development", "Project documentation and presentation aligned to the course’s expectations."]],
    compareTitle: "Look closely at studios, briefs and portfolio expectations.",
    compareIntro: "A creative course can be judged by the work and learning environment it supports. Ask to see the current syllabus and understand selection requirements.",
    checklist: ["Specialisation and project briefs", "Studios, equipment and software access", "Portfolio and entrance requirements", "Fees, faculty and student work examples"],
    admission: [["01", "Portfolio expectations", "Check whether a portfolio is required, what it should include and how it is evaluated."], ["02", "Selection process", "Confirm entrance tests, studio tasks, interviews or other current steps."], ["03", "Programme fit", "Review specialisations, tools, project work and assessment methods."], ["04", "Practical details", "Verify dates, materials, fees and facilities from the institution’s official information."]],
    directionsIntro: "Creative study can connect to many industries. Research the portfolio, software skills and experience expected in the work you hope to explore.",
    directions: ["Visual design", "User experience", "Animation", "Film production", "Photography", "Content & media", "Fashion", "Creative strategy"],
    faq: [["Do I need a portfolio to apply?", "Some programmes require one and others use different selection methods. Check the current course requirements and portfolio brief."], ["Should I already know design software?", "Expectations vary by programme. Review the syllabus and selection criteria; many courses teach tools alongside design fundamentals."], ["How do I compare design colleges?", "Look at studio facilities, faculty, project briefs, portfolio outcomes, assessment methods and the actual specialisations offered."], ["Are internships part of every media course?", "Internship arrangements vary by institution. Confirm the current curriculum and placement support directly with the college."]],
  },
  "professional-courses": {
    kicker: "Specialist study · Course pathway",
    headline: "Choose a focused route for the work you want to do.",
    intro: "Explore professional and specialist programmes, then verify the qualifications, recognition and practical requirements tied to each route.",
    heroNote: "Specialise · Practise · Progress",
    levels: [
      ["01", "AFTER CLASS 12", "Undergraduate & diploma", "Compare focused courses such as architecture, hospitality, education and other specialist routes. Requirements, duration and professional standards differ widely.", ["Degree routes", "Diplomas", "Specialist study"]],
      ["02", "AFTER A FIRST DEGREE", "Advanced & professional", "Review postgraduate and professional qualifications connected to a chosen field. Check prior-degree requirements, awarding body and any professional recognition.", ["Postgraduate study", "Professional awards", "Advanced practice"]],
    ],
    focusIntro: "Professional courses cover very different fields. Start with the role or discipline that interests you and check which recognised qualification is actually required.",
    focus: [["01", "Architecture & built environment", "Review design study, studio work, practical training and professional requirements."], ["02", "Education & teaching", "Explore educator preparation and the qualifications accepted for your intended setting."], ["03", "Hospitality & tourism", "Compare service, operations, culinary and tourism-focused programmes."], ["04", "Accounting & finance", "Look at degree and professional examination routes, exemptions and membership rules."], ["05", "Aviation & logistics", "Check specialist training, licensing or certification requirements where applicable."], ["06", "Other professional routes", "Verify the awarding body, recognition and progression tied to the exact course."]],
    learningTitle: "Know which qualification the profession recognises.",
    learningIntro: "For specialist routes, course content is only part of the decision. Verify how the qualification connects to licensing, registration, accreditation or further examinations.",
    learning: [["01", "Foundational knowledge", "Core theory and methods for the selected profession or industry."], ["02", "Practical preparation", "Studios, placements, simulations or field experience where required."], ["03", "Professional recognition", "Current approvals, examinations and registration requirements for the intended route."]],
    compareTitle: "Verify the awarding body and the professional route.",
    compareIntro: "Professional requirements can change and differ by field. Confirm course and institution details with the relevant official regulator or professional body.",
    checklist: ["Exact qualification and awarding body", "Current approval or accreditation", "Practical or supervised training", "Professional exams and registration"],
    admission: [["01", "Entry criteria", "Check academic prerequisites, experience or any field-specific conditions."], ["02", "Recognition", "Verify current course approval with the relevant regulator or professional body."], ["03", "Training requirements", "Understand placements, supervised practice, studios or other compulsory components."], ["04", "Progression", "Confirm what additional exams, experience or registration is needed after graduation."]],
    directionsIntro: "The next step depends on the field and the qualification earned. Check the current professional requirements before enrolling in a course.",
    directions: ["Architecture", "Teaching", "Hospitality", "Finance", "Tourism", "Operations", "Professional practice", "Further study"],
    faq: [["What counts as a professional course?", "It can refer to different specialist or practice-oriented programmes. Check the exact qualification, awarding body and intended professional outcome."], ["Are all courses recognised by the same authority?", "No. Recognition depends on the field and qualification. Verify with the relevant official regulator or professional body."], ["Will the course qualify me to practise immediately?", "Not always. Some fields require additional examinations, supervised experience or registration. Confirm the current rules for your intended role."], ["How should I compare specialist courses?", "Check curriculum, practical training, recognition, total costs and the qualifications needed to progress into the work you want."]],
  },
};

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  return { title: course ? `${course.title} Courses` : "Course", description: course?.intro };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  const copy = courseCopy[slug];
  if (!course || !copy) notFound();

  return <div className="course-detail-page">
    <section className="course-detail-hero">
      <div className="container">
        <nav className="course-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/courses">Courses</Link><span aria-hidden="true">/</span><span aria-current="page">{course.title}</span></nav>
        <div className="course-detail-hero-grid">
          <Reveal><div className="course-detail-hero-copy">
            <p className="section-kicker">{copy.kicker}</p>
            <h1>{copy.headline}</h1>
            <p>{copy.intro}</p>
            <div className="course-detail-actions"><Link href="#study-levels" className="button button-coral">Explore study levels <span aria-hidden="true">↓</span></Link><Link href="/contact" className="button button-outline-light">Get guidance <span aria-hidden="true">↗</span></Link></div>
          </div></Reveal>
          <Reveal delay={110}><div className="course-detail-hero-art"><Image src="/aspin-campus-hero.png" alt="A student exploring a Bengaluru college campus" width={1536} height={1024} priority className="course-detail-photo" /><div className="course-detail-art-card"><span>EXPLORE {course.title.toUpperCase()}</span><strong>{copy.heroNote}</strong></div></div></Reveal>
        </div>
      </div>
    </section>

    <section className="course-levels section-shell" id="study-levels">
      <div className="container">
        <Reveal><div className="course-detail-heading"><p className="section-kicker">Choose your starting point</p><h2>Different stages. Different questions to explore.</h2><p>Begin with the level that fits where you are in your education, then compare the exact programme requirements.</p></div></Reveal>
        <div className="course-level-grid">{copy.levels.map(([number, stage, title, text, tags], index) => <Reveal key={number} delay={index * 90}><article className={`course-level-card ${index === 1 ? "course-level-card-dark" : ""}`}><div className="course-level-number">{number} <span>{stage}</span></div><p className="section-kicker">{title}</p><h3>{index === 0 ? "Build your foundations." : "Deepen your perspective."}</h3><p>{text}</p><div className="course-programme-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#admissions" className="text-link">What to check <span aria-hidden="true">↗</span></a></article></Reveal>)}</div>
        <p className="course-detail-caveat">Programme names, availability and eligibility vary by institution. Verify current details with the institution and relevant official sources.</p>
      </div>
    </section>

    <section className="course-focus-section section-shell">
      <div className="container">
        <Reveal><div className="course-detail-heading course-detail-heading-row"><div><p className="section-kicker">Areas to explore</p><h2>Find the questions that interest you.</h2></div><p>{copy.focusIntro}</p></div></Reveal>
        <div className="course-focus-grid">{copy.focus.map(([number, title, description], index) => <Reveal key={number} delay={index * 45}><article className="course-focus-card"><span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true">↗</i></article></Reveal>)}</div>
      </div>
    </section>

    <section className="course-learning-section">
      <div className="container course-learning-grid">
        <Reveal><div className="course-learning-copy"><p className="section-kicker">Inside the classroom</p><h2>{copy.learningTitle}</h2><p>{copy.learningIntro}</p><Link href="/guides/comparing-colleges" className="text-link">How to compare colleges <span aria-hidden="true">↗</span></Link></div></Reveal>
        <div className="course-learning-list">{copy.learning.map(([number, title, description], index) => <Reveal key={number} delay={index * 70}><article><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="course-college-section section-shell">
      <div className="container course-college-callout">
        <Reveal><div><p className="section-kicker">Compare institutions</p><h2>{copy.compareTitle}</h2><p>{copy.compareIntro}</p><Link href="/colleges" className="button button-primary">Explore Bengaluru colleges <span aria-hidden="true">↗</span></Link></div></Reveal>
        <Reveal delay={80}><div className="course-compare-checklist"><h3>Compare these details</h3>{copy.checklist.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div></Reveal>
      </div>
    </section>

    <section className="course-admissions-section section-shell" id="admissions">
      <div className="container course-admissions-grid">
        <Reveal><div className="course-detail-heading"><p className="section-kicker">Admissions &amp; eligibility</p><h2>Know what to verify before you apply.</h2><p>Requirements differ by programme and can change. Use this checklist when reviewing official course pages and admission notices.</p></div></Reveal>
        <div className="course-admissions-points">{copy.admission.map(([number, title, text], index) => <Reveal key={number} delay={index * 45}><article><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div>
      </div>
      <div className="container"><p className="course-detail-caveat">ASPIN provides a research starting point. Confirm current rules, recognition and dates with the institution or relevant official authority.</p></div>
    </section>

    <section className="course-directions-section">
      <div className="container course-directions-grid"><Reveal><div><p className="section-kicker">Possible directions</p><h2>Explore the work behind the subject.</h2><p>{copy.directionsIntro}</p></div></Reveal><Reveal delay={80}><div className="course-direction-tags">{copy.directions.map((direction) => <span key={direction}>{direction}</span>)}</div></Reveal></div>
    </section>

    <section className="course-detail-faq section-shell">
      <div className="container course-detail-faq-grid"><Reveal><div><p className="section-kicker">Common questions</p><h2>Still deciding where to begin?</h2><p>Use these answers as a starting point, then check details for the exact programme you’re considering.</p><Link href="/contact" className="text-link">Ask ASPIN a question <span aria-hidden="true">↗</span></Link></div></Reveal><div className="course-detail-faq-list">{copy.faq.map(([question, answer], index) => <Reveal key={question} delay={index * 50}><details className="faq-item"><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details></Reveal>)}</div></div>
    </section>

    <section className="course-detail-cta"><div className="container"><Reveal><p className="section-kicker">Your next step</p><h2>Compare with care. Choose with clarity.</h2><p>Explore Bengaluru colleges or talk with ASPIN about the options you’re weighing up.</p><div className="hero-actions"><Link href="/colleges" className="button button-coral">Explore colleges <span aria-hidden="true">↗</span></Link><Link href="/contact" className="button button-outline-light">Get started <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>
  </div>;
}
