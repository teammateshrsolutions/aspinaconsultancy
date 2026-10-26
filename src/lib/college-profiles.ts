export type CollegeFeeRow = { course: string; years: number[]; total: number };
export type CollegeFeeGroup = { title: string; rows: CollegeFeeRow[] };
export type CollegeProfileData = {
  slug: string;
  name: string;
  initials: string;
  location: string;
  city: string;
  kind: string;
  areas: string[];
  overview: string;
  feeYear: string;
  groups: CollegeFeeGroup[];
  feeNotes: string[];
  quickFacts: Array<[string, string]>;
};

const fees = (course: string, years: number[], total = years.reduce((sum, amount) => sum + amount, 0)): CollegeFeeRow => ({ course, years, total });

export const addedCollegeProfiles: CollegeProfileData[] = [
  {
    slug: "yenepoya-mudipu",
    name: "Yenepoya Deemed to be University · Mudipu Campus",
    initials: "YU",
    location: "Mudipu Campus",
    city: "Mangaluru",
    kind: "Deemed-to-be university",
    areas: ["Management", "Computing", "Multidisciplinary"],
    overview: "The supplied 2026–27 Mudipu Campus brochure lists undergraduate BCA and BBA specializations, along with MBA Leap pathways. It also describes campus transport, student support, digital learning facilities and industry-linked certifications.",
    feeYear: "2026–27",
    groups: [
      { title: "Bachelor of Computer Applications (BCA) · 3 years", rows: [
        fees("Artificial Intelligence & DevOps · IBM Cloud Computing", [191000,132000,132000]),
        fees("Cyber Security & Ethical Hacking · IBM Cloud Computing", [191000,132000,132000]),
        fees("Artificial Intelligence, Machine Learning & Robotics · IBM IoT", [191000,132000,132000]),
        fees("Artificial Intelligence & Cyber Security · IBM Cloud Computing", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Analytics · Google Cloud", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Analytics · IBM AI", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Analytics · Microsoft Azure AI Fundamentals", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Science · IBM Machine Learning", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Science · AWS Cloud Computing", [191000,132000,132000]),
        fees("Computer Science & Information Technology · IBM AI Services", [191000,132000,132000]),
        fees("Cyber Security & Digital Forensic · EC-Council Ethical Hacking", [191000,132000,132000]),
        fees("Data Science & Big Data Analytics · TUV SUD AI and Big Data", [191000,132000,132000]),
        fees("Cyber Security & Data Science · IBM AI", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Science · IBM Full Stack Development", [191000,132000,132000]),
      ]},
      { title: "Bachelor of Business Administration (BBA) · 3 years", rows: [
        fees("Aviation & Logistics · Airport and Cabin Crew Management", [191000,132000,132000]),
        fees("Logistics & Supply Chain Management · Port and Warehouse Management", [191000,132000,132000]),
        fees("International Business & Business Analytics · Meta Digital Marketing", [191000,132000,132000]),
        fees("Human Resource & Marketing · IBM AI/ML", [191000,132000,132000]),
        fees("FinTech & Banking · TUV SUD", [191000,132000,132000]),
        fees("Artificial Intelligence & Data Analytics · IBM Digital Business Management", [191000,132000,132000]),
      ]},
      { title: "MBA Leap · 2 years", rows: [fees("HR, Marketing, Supply Chain, Logistics, Finance, or Healthcare & Hospital Management", [314500,314500])] },
    ],
    feeNotes: ["The brochure states a booking amount of ₹26,000 extra.", "BCA eligibility is listed as 50% in the qualifying stream.", "The brochure notes that Karnataka students may avail a last-semester fee scholarship for BBA; confirm eligibility and terms."],
    quickFacts: [["Campus", "Mudipu"], ["Study areas", "BCA · BBA · MBA"], ["Fee schedule", "2026–27"]],
  },
  {
    slug: "little-flower-group",
    name: "Little Flower Group of Institutions",
    initials: "LF",
    location: "Mallathahalli · Bengaluru University Road",
    city: "Bengaluru",
    kind: "Multi-college institution group",
    areas: ["Health Sciences", "Nursing", "Pharmacy", "Physiotherapy"],
    overview: "The supplied non-Karnataka fee schedule covers nursing, allied health science, pharmacy and physiotherapy programmes across Little Flower Group of Institutions and SV College of Nursing.",
    feeYear: "2026–27 · Non-Karnataka fee schedule",
    groups: [
      { title: "Nursing · Little Flower Group", rows: [
        fees("GNM", [185000,90000,90000]), fees("P.B.B.Sc Nursing", [140000,100000]),
        fees("B.Sc Nursing (Girls)", [265000,195000,195000,195000]), fees("B.Sc Nursing (Boys)", [340000,195000,195000,195000]),
        fees("M.Sc Nursing · MSN / OBG", [150000,150000]), fees("M.Sc Nursing · PAE / PSY / COM", [150000,100000]),
      ]},
      { title: "Allied Health Science", rows: [
        fees("Diploma in MLT", [155000,90000,90000]), fees("Diploma in MIT", [155000,90000,90000]), fees("Diploma in OT", [155000,90000,90000]),
        fees("B.Sc MLT", [225000,100000,100000]), fees("B.Sc MIT", [250000,100000,100000]), fees("B.Sc AT & OT", [250000,115000,115000]),
        fees("M.Sc MLT", [180000,80000]), fees("M.Sc MIT", [180000,80000]),
      ]},
      { title: "Pharmacy & Physiotherapy", rows: [
        fees("D.Pharm", [180000,80000]), fees("B.Pharm", [245000,110000,110000,110000]), fees("BPT", [220000,110000,110000,110000]),
      ]},
      { title: "SV College of Nursing", rows: [
        fees("B.Sc Nursing (Girls)", [255000,190000,190000,190000]), fees("B.Sc Nursing (Boys)", [330000,190000,190000,190000]),
        fees("M.Sc Nursing · MSN / OBG", [150000,150000]), fees("M.Sc Nursing · PAE / PSY / COM", [150000,100000]),
      ]},
    ],
    feeNotes: ["This is the Non-Karnataka fee structure supplied for 2026–27.", "The brochure marks some courses as without hostel fee; check the relevant course row and confirm hostel charges separately.", "Uniform, university eligibility and examination fees are extra.", "Campus address shown in the brochure: 80 Feet Ring Road, near Bangalore University Road, Mallathahalli, Bengaluru 560056."],
    quickFacts: [["Campus", "Mallathahalli"], ["Study areas", "Nursing · Allied Health · Pharmacy · Physiotherapy"], ["Fee schedule", "2026–27"]],
  },
  {
    slug: "st-benedicts-group",
    name: "St. Benedict’s Group of Institutions",
    initials: "SB",
    location: "Anchepalya · Kumbalgodu",
    city: "Bengaluru",
    kind: "Group of institutions",
    areas: ["Management", "Commerce", "Computing", "Social Work", "Nursing", "Education"],
    overview: "The supplied 2026–27 brochure covers business, commerce, computing and social work programmes, and describes the group’s management studies, education and nursing colleges. The brochure lists affiliation with Bangalore University and Rajiv Gandhi University and recognition by the Government of Karnataka.",
    feeYear: "2026–27",
    groups: [
      { title: "College of Management Studies", rows: [
        fees("B.Com Regular", [245000,125000,125000]), fees("B.Com ACCA", [245000,135000,135000]), fees("B.Com CMA", [245000,125000,125000]),
        fees("B.Com Logistics & Supply Chain Management", [245000,125000,125000]), fees("BBA Regular", [245000,125000,125000]),
        fees("BBA Aviation", [245000,125000,125000]), fees("BBA Logistics & Supply Chain Management", [245000,125000,125000]),
        fees("BCA with AI & Data Science", [245000,125000,125000]), fees("BCA with Cloud Computing · AWS / Azure / GCP", [245000,125000,125000]),
        fees("BCA with AI & Machine Learning", [245000,125000,125000]), fees("BCA with Cyber Security & Ethical Hacking", [245000,125000,125000]),
        fees("MSW", [100000,100000]),
      ]},
    ],
    feeNotes: ["The brochure says all course fees include food and accommodation.", "Admission fee: ₹25,000. Uniform, university and book fees are extra.", "Address shown in the brochure: Asirvanam, Anchepalya, Kumbalgodu Post, Bengaluru 560074."],
    quickFacts: [["Campus", "Kumbalgodu"], ["Study areas", "Business · Computing · Social Work"], ["Fee schedule", "2026–27"]],
  },
  {
    slug: "vidya-vikas-group",
    name: "Vidya Vikas Group of Institutions",
    initials: "VV",
    location: "Mysuru",
    city: "Mysuru",
    kind: "Group of institutions",
    areas: ["Management", "Law", "Education", "Social Work", "Computing", "Health Sciences", "Hospitality"],
    overview: "The supplied 2026–27 fee structure is from Vidya Vikas Educational Trust in Mysore, Karnataka. It lists undergraduate and postgraduate programmes in business, law, education, social work, computing, nursing and tourism or hospitality management.",
    feeYear: "2026–27",
    groups: [
      { title: "Undergraduate programmes", rows: [
        fees("BBA · Tourism & Travel Management", [180000,100000,70000]), fees("BBA · Hotel Management", [180000,100000,70000]),
        fees("BBA LLB", [80000,70000,50000,50000,50000]), fees("LLB", [80000,70000,50000]), fees("BCA · Add-on", [165000,110000,80000]),
        fees("B.Ed", [100000,100000]), fees("B.Sc Nursing", [350000,200000,200000,200000]),
      ]},
      { title: "Postgraduate programmes", rows: [
        fees("MSW", [100000,100000]), fees("MBA", [200000,200000]), fees("MCA", [200000,200000]), fees("MTTM · Master of Tourism & Travel Management", [150000,150000]),
      ]},
    ],
    feeNotes: ["The brochure is labeled Fee Structure 2026–27.", "B.Sc Nursing is marked as including food and accommodation in the supplied fee sheet. Confirm what other listed charges cover before admission."],
    quickFacts: [["City", "Mysuru"], ["Study areas", "Business · Law · Education · Health"], ["Fee schedule", "2026–27"]],
  },
  {
    slug: "sjes-group",
    name: "SJES Group of Institutions",
    initials: "SJ",
    location: "Medahalli · Old Madras Road",
    city: "Bengaluru",
    kind: "Group of institutions",
    areas: ["Management", "Commerce", "Computing", "Hospitality", "Education", "Nursing"],
    overview: "The supplied 2026–27 brochure covers the College of Management Studies, College of Education and College of Nursing. Its programme and fee tables include business, commerce, computing, hotel management, teacher education and nursing.",
    feeYear: "2026–27",
    groups: [
      { title: "College of Management Studies", rows: [
        fees("BBA", [100000,50000,50000]), fees("BBA Aviation", [210000,60000,60000]), fees("BBA Tourism & Travel", [210000,60000,60000]),
        fees("BCA", [150000,60000,60000]), fees("BCA Add-on", [210000,70000,70000]), fees("B.Com", [100000,50000,50000]),
        fees("B.Com Logistics & Supply Chain Management", [150000,60000,60000]), fees("BHM & CT · Hotel Management", [140000,70000,70000,70000]),
        fees("MBA", [225000,150000]), fees("M.Com", [90000,60000]),
      ]},
      { title: "College of Education", rows: [fees("B.Ed", [100000,100000]), fees("M.Ed", [100000,100000])] },
      { title: "College of Nursing", rows: [fees("GNM · General Nursing", [200000,100000,100000]), fees("B.Sc Nursing", [325000,175000,175000,175000])] },
    ],
    feeNotes: ["The brochure notes that all course fees include food and accommodation.", "Admission fee: ₹25,000. Uniform, university and books fees are extra.", "The College of Nursing page separately notes that books, uniform, transportation and university fees are excluded.", "Address verified from the institution listing: Medahalli, Old Madras Road, Bengaluru."],
    quickFacts: [["Campus", "Medahalli"], ["Study areas", "Business · Education · Nursing"], ["Fee schedule", "2026–27"]],
  },
  {
    slug: "krupanidhi-group",
    name: "Krupanidhi Group of Institutions",
    initials: "KG",
    location: "Chikkabellandur · Carmelaram",
    city: "Bengaluru",
    kind: "Group of institutions",
    areas: ["Management", "Commerce", "Computing", "Health Sciences", "Pharmacy", "Social Work"],
    overview: "The supplied 2026 fee schedule lists programmes across computing, business, commerce, social work, physiotherapy, pharmacy and forensic science. It includes undergraduate, postgraduate and professional pathways.",
    feeYear: "2026 · Fee structure",
    groups: [
      { title: "Computing & business", rows: [
        fees("BCA · AI, Big Data Analytics, Cyber Security & Ethical Hacking options", [224000,118000,120000]), fees("BCA · Co-brand IBM", [213000,142000,144000]),
        fees("BBA Logistics", [200000,116000,118000]), fees("BBA Aviation & Logistics", [212000,106000,108000]), fees("BBA Aviation", [182000,106000,108000]), fees("BBA Business Analyst", [213000,141000,143000]),
      ]},
      { title: "Commerce", rows: [fees("B.Com CMA", [185000,100000,100000]), fees("B.Com ACCA", [200000,120000,122000]), fees("B.Com Logistics", [168000,100000,102000])] },
      { title: "Postgraduate & social sciences", rows: [fees("MBA", [330000,300000]), fees("MBA with Foreign Trip", [425000,300000]), fees("MCA", [226000,172000]), fees("MSW", [142000,114000])] },
      { title: "Health sciences & pharmacy", rows: [fees("B.Sc Forensic Science", [160000,112000,114000]), fees("Bachelor of Physiotherapy", [200000,202000,204000,206000]), fees("M.Sc Microbiology", [120000,116000]), fees("Bachelor of Pharmacy", [176000,178000,180000,182000]), fees("Pharm.D", [350000,350000,350000,350000,350000,350000])] },
    ],
    feeNotes: ["The supplied brochure is labeled Fee Structure 2026.", "Registration fee: ₹25,000; the brochure says it will be adjusted in the fees.", "Course options and fee totals are transcribed from the supplied brochure; confirm the applicable admission category and any additional charges."],
    quickFacts: [["Campus", "Chikkabellandur"], ["Study areas", "Business · Computing · Health · Pharmacy"], ["Fee schedule", "2026"]],
  },
];
