/* ============================================================
   PETER CALLAIS INSTITUTE — DATA STORE
   data.js — all dynamic content as structured arrays
   ============================================================ */

const CIDATA = {

  /* ──────────────────────────────────────────────
     EVENTS
  ────────────────────────────────────────────── */
  events: [
    {
      id: 1,
      title: "BAA Connect",
      subtitle: "Business Analytics Association Networking Night",
      category: "NETWORKING",
      categoryColor: "badge-blue",
      date: "Apr 15, 2025",
      month: "APR",
      day: "15",
      time: "6:00 PM – 8:00 PM",
      location: "Miller Hall Atrium, Loyola University",
      format: "IN PERSON",
      description: "Connect with Business Analytics Association peers, faculty, and industry professionals at our flagship networking event. Build relationships that launch careers.",
      registrationUrl: "#"
    },
    {
      id: 2,
      title: "Data Visualization Competition",
      subtitle: "Annual student data storytelling challenge",
      category: "COMPETITION",
      categoryColor: "badge-maroon",
      date: "Mar 28, 2025",
      month: "MAR",
      day: "28",
      time: "10:00 AM – 4:00 PM",
      location: "Miller Hall, Room 201",
      format: "IN PERSON",
      description: "Open to all Loyola students. Tell a story with data, present your visual, and compete for cash prizes and recognition. Showcase your analytics skills.",
      registrationUrl: "pages/students/dvc.html"
    },
    {
      id: 3,
      title: "Analytics Guest Lecture Series",
      subtitle: "Industry speaker — Spring 2025",
      category: "LECTURE",
      categoryColor: "badge-gold",
      date: "Mar 19, 2025",
      month: "MAR",
      day: "19",
      time: "3:30 PM – 5:00 PM",
      location: "Miller Hall, Room 102 + Zoom",
      format: "HYBRID",
      description: "Industry leaders share real-world analytics insights. This session features a data scientist from the energy sector discussing predictive maintenance.",
      registrationUrl: "pages/students/agl-series.html"
    },
    {
      id: 4,
      title: "Impact Day 2025",
      subtitle: "End-of-year showcase and awards",
      category: "SHOWCASE",
      categoryColor: "badge-green",
      date: "May 2, 2025",
      month: "MAY",
      day: "02",
      time: "9:00 AM – 5:00 PM",
      location: "Miller Hall, Loyola University New Orleans",
      format: "IN PERSON",
      description: "Annual celebration of student research, industry partnerships, and community impact. Poster sessions, keynote, awards, and networking reception.",
      registrationUrl: "pages/students/impact-day.html"
    },
    {
      id: 5,
      title: "AAI4HC Pre-College Camp",
      subtitle: "Analytics & AI for High School Students",
      category: "PRE-COLLEGE",
      categoryColor: "badge-orange",
      date: "Jun 9, 2025",
      month: "JUN",
      day: "09",
      time: "9:00 AM – 4:00 PM Daily",
      location: "Miller Hall, Loyola University New Orleans",
      format: "IN PERSON",
      description: "One-week intensive analytics and AI program for Louisiana high school students (grades 9–12). Free. Certificate of completion provided.",
      registrationUrl: "pages/students/aai4hc.html"
    }
  ],

  /* ──────────────────────────────────────────────
     NEWS ARTICLES
  ────────────────────────────────────────────── */
  news: [
    {
      id: 1,
      title: "Callais Institute Partners with Regional Hospital System for Patient Outcome Analytics",
      category: "Research",
      categoryColor: "badge-blue",
      date: "Mar 10, 2025",
      author: "PCIBA Staff",
      excerpt: "A new research agreement enables Loyola analytics faculty and students to collaborate on predictive readmission models using de-identified patient data.",
      imageColor: "1A2E45",
      imageTxtColor: "C8A951",
      featured: true
    },
    {
      id: 2,
      title: "Student Team Wins National Data Visualization Award",
      category: "Student Success",
      categoryColor: "badge-green",
      date: "Feb 28, 2025",
      author: "PCIBA Staff",
      excerpt: "Three Loyola juniors placed first at the National Student Analytics Competition with a dashboard tracking food insecurity across Louisiana parishes.",
      imageColor: "560D22",
      imageTxtColor: "FFFFFF",
      featured: false
    },
    {
      id: 3,
      title: "Dr. Nuwan Indika Named Fulbright Scholar for 2025–26",
      category: "Faculty Spotlight",
      categoryColor: "badge-gold",
      date: "Feb 15, 2025",
      author: "PCIBA Communications",
      excerpt: "Institute Director Dr. Nuwan Indika has been selected as a J. William Fulbright Scholar, recognizing his contributions to international analytics education.",
      imageColor: "0D1B2A",
      imageTxtColor: "E2C97E",
      featured: false
    },
    {
      id: 4,
      title: "Inaugural Data Visualization Competition Draws 80 Participants",
      category: "Events",
      categoryColor: "badge-maroon",
      date: "Jan 30, 2025",
      author: "PCIBA Staff",
      excerpt: "The first-ever DVC brought together undergraduates from six departments, presenting visualizations on topics ranging from climate data to housing markets.",
      imageColor: "7A1330",
      imageTxtColor: "FFFFFF",
      featured: false
    },
    {
      id: 5,
      title: "New Partnership with Gulf South Technology Council Announced",
      category: "Industry",
      categoryColor: "badge-navy",
      date: "Jan 20, 2025",
      author: "PCIBA Communications",
      excerpt: "The Callais Institute joins the Gulf South Technology Council, creating new pathways for student internships and industry-funded research projects.",
      imageColor: "2C3E50",
      imageTxtColor: "C8A951",
      featured: false
    },
    {
      id: 6,
      title: "AAI4HC Pre-College Program Expands to 5 New High Schools",
      category: "Community",
      categoryColor: "badge-orange",
      date: "Jan 10, 2025",
      author: "PCIBA Staff",
      excerpt: "Following a successful pilot, the Analytics & AI for High School Pre-College program will serve students from five additional Louisiana high schools in 2025.",
      imageColor: "8B2A3A",
      imageTxtColor: "FFFFFF",
      featured: false
    },
    {
      id: 7,
      title: "Impacts Lab Delivers 50th Consulting Project",
      category: "Research",
      categoryColor: "badge-blue",
      date: "Dec 15, 2024",
      author: "Impacts Lab Team",
      excerpt: "The Callais Institute Impacts Lab reaches a major milestone, completing its 50th statistical consulting engagement for LOYNO faculty and nonprofit partners.",
      imageColor: "1A2E45",
      imageTxtColor: "C8A951",
      featured: false
    },
    {
      id: 8,
      title: "Business Analytics Major Named Among Top Emerging Programs",
      category: "Faculty Spotlight",
      categoryColor: "badge-gold",
      date: "Dec 5, 2024",
      author: "PCIBA Communications",
      excerpt: "A national higher education publication highlighted Loyola's Business Analytics program as one of the most innovative offerings in the Gulf South region.",
      imageColor: "560D22",
      imageTxtColor: "E2C97E",
      featured: false
    },
    {
      id: 9,
      title: "Spring AGL Series Recap: Insights from Industry Leaders",
      category: "Events",
      categoryColor: "badge-maroon",
      date: "Nov 22, 2024",
      author: "PCIBA Staff",
      excerpt: "The Spring Analytics Guest Lecture Series concluded with six sessions featuring speakers from finance, healthcare, retail, and government analytics.",
      imageColor: "7A1330",
      imageTxtColor: "FFFFFF",
      featured: false
    }
  ],

  /* ──────────────────────────────────────────────
     WORKSHOPS
  ────────────────────────────────────────────── */
  workshops: [
    {
      id: 1,
      title: "Introduction to Python for Business Analytics",
      audience: ["Students", "Faculty"],
      audienceKey: "students",
      format: "IN PERSON",
      duration: "3 hours",
      level: "Beginner",
      levelColor: "badge-green",
      nextDate: "Apr 8, 2025",
      instructor: "Dr. Nuwan Indika",
      description: "Learn Python fundamentals for data manipulation, analysis, and visualization. Covers pandas, numpy, and matplotlib basics with business datasets."
    },
    {
      id: 2,
      title: "Tableau for Business Dashboards",
      audience: ["Students", "Faculty", "Industry", "Community"],
      audienceKey: "all",
      format: "HYBRID",
      duration: "4 hours",
      level: "Intermediate",
      levelColor: "badge-gold",
      nextDate: "Apr 15, 2025",
      instructor: "Industry Instructor",
      description: "Build professional interactive dashboards in Tableau Desktop. Connect to live data sources, create calculated fields, and design executive-ready visuals."
    },
    {
      id: 3,
      title: "SQL for Business Analysts",
      audience: ["Students"],
      audienceKey: "students",
      format: "IN PERSON",
      duration: "2.5 hours",
      level: "Beginner",
      levelColor: "badge-green",
      nextDate: "Apr 22, 2025",
      instructor: "Graduate Research Assistant",
      description: "Master SQL queries for business data retrieval, filtering, aggregation, and joins. Hands-on exercises with realistic sales and customer databases."
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      audience: ["Faculty", "Industry"],
      audienceKey: "industry",
      format: "IN PERSON",
      duration: "6 hours",
      level: "Advanced",
      levelColor: "badge-maroon",
      nextDate: "May 3, 2025",
      instructor: "Dr. Nuwan Indika",
      description: "Covers supervised and unsupervised ML algorithms using scikit-learn. Includes model evaluation, hyperparameter tuning, and business interpretation."
    },
    {
      id: 5,
      title: "Data Ethics and Responsible AI",
      audience: ["Students", "Faculty", "Industry", "Community"],
      audienceKey: "all",
      format: "VIRTUAL",
      duration: "2 hours",
      level: "All Levels",
      levelColor: "badge-navy",
      nextDate: "Apr 10, 2025",
      instructor: "Ethics Faculty Panel",
      description: "Explore fairness, bias, privacy, and accountability in AI systems. Includes case studies from healthcare, criminal justice, and lending."
    },
    {
      id: 6,
      title: "Excel for Advanced Analytics",
      audience: ["Students", "Faculty", "Industry", "Community"],
      audienceKey: "all",
      format: "IN PERSON",
      duration: "3 hours",
      level: "Intermediate",
      levelColor: "badge-gold",
      nextDate: "Apr 17, 2025",
      instructor: "Program Staff",
      description: "Power Query, Power Pivot, dynamic arrays, and Excel-based dashboards. Perfect for analysts who need to go beyond basic spreadsheets."
    },
    {
      id: 7,
      title: "Power BI for Organizations",
      audience: ["Industry", "Faculty"],
      audienceKey: "industry",
      format: "HYBRID",
      duration: "4 hours",
      level: "Intermediate",
      levelColor: "badge-gold",
      nextDate: "May 10, 2025",
      instructor: "Industry Instructor",
      description: "Design, publish, and share Power BI reports and dashboards. Covers DAX basics, data modeling, and connecting to cloud data sources."
    },
    {
      id: 8,
      title: "R for Statistical Analysis",
      audience: ["Faculty", "Students"],
      audienceKey: "students",
      format: "IN PERSON",
      duration: "5 hours",
      level: "Advanced",
      levelColor: "badge-maroon",
      nextDate: "May 8, 2025",
      instructor: "Graduate Research Assistant",
      description: "Comprehensive R workshop covering tidyverse, ggplot2, regression, and reproducible research with R Markdown. For graduate students and researchers."
    },
    {
      id: 9,
      title: "Data Storytelling and Communication",
      audience: ["Students", "Faculty", "Industry", "Community"],
      audienceKey: "all",
      format: "HYBRID",
      duration: "3 hours",
      level: "All Levels",
      levelColor: "badge-navy",
      nextDate: "Apr 24, 2025",
      instructor: "Guest Speaker",
      description: "Learn to communicate data insights to non-technical audiences. Covers narrative structure, chart selection, presentation skills, and executive summaries."
    },
    {
      id: 10,
      title: "Introduction to AI Concepts",
      audience: ["Students", "Faculty", "Community"],
      audienceKey: "all",
      format: "VIRTUAL",
      duration: "2 hours",
      level: "Beginner",
      levelColor: "badge-green",
      nextDate: "Apr 3, 2025",
      instructor: "Dr. Nuwan Indika",
      description: "Demystify artificial intelligence: machine learning, deep learning, NLP, and AI applications in business. No coding required."
    }
  ],

  /* ──────────────────────────────────────────────
     CERTIFICATIONS
  ────────────────────────────────────────────── */
  certifications: [
    {
      id: 1,
      name: "Google Data Analytics Certificate",
      issuer: "Google / Coursera",
      duration: "6 months",
      level: "Beginner",
      track: "Data Analytics",
      trackKey: "analytics",
      description: "Learn data analytics end-to-end: ask, prepare, process, analyze, share, and act. Includes hands-on practice with spreadsheets, SQL, Tableau, and R.",
      learnMore: "#"
    },
    {
      id: 2,
      name: "Tableau Desktop Specialist",
      issuer: "Salesforce / Tableau",
      duration: "Self-paced",
      level: "Beginner–Intermediate",
      track: "Business Intelligence",
      trackKey: "bi",
      description: "Industry-recognized certification validating Tableau Desktop skills: connecting data, building visualizations, and sharing workbooks.",
      learnMore: "#"
    },
    {
      id: 3,
      name: "Microsoft Power BI Data Analyst (PL-300)",
      issuer: "Microsoft",
      duration: "3–4 months",
      level: "Intermediate",
      track: "Business Intelligence",
      trackKey: "bi",
      description: "Demonstrate skills in data modeling, visualization, and reporting using Power BI Service and Desktop. Highly valued by corporate employers.",
      learnMore: "#"
    },
    {
      id: 4,
      name: "SAS Certified Specialist: Base Programming",
      issuer: "SAS Institute",
      duration: "Self-paced",
      level: "Intermediate",
      track: "Data Analytics",
      trackKey: "analytics",
      description: "Validates proficiency in SAS programming fundamentals: data step programming, procedures, and report generation.",
      learnMore: "#"
    },
    {
      id: 5,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      duration: "3 months",
      level: "Beginner",
      track: "Cloud & Platforms",
      trackKey: "cloud",
      description: "Foundation-level cloud certification covering AWS services, pricing, security, and architecture — essential for cloud-based analytics roles.",
      learnMore: "#"
    },
    {
      id: 6,
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM / Coursera",
      duration: "10 months",
      level: "Beginner–Intermediate",
      track: "AI & Machine Learning",
      trackKey: "ai",
      description: "Comprehensive 12-course program covering Python, SQL, data visualization, machine learning, and applied capstone projects.",
      learnMore: "#"
    },
    {
      id: 7,
      name: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      duration: "Exam-based",
      level: "Advanced",
      track: "Data Analytics",
      trackKey: "analytics",
      description: "The gold-standard analytics certification, validating end-to-end analytics competency. Requires 3+ years of professional experience.",
      learnMore: "#"
    },
    {
      id: 8,
      name: "Python for Data Science (Via Institute)",
      issuer: "DataCamp / Callais Institute",
      duration: "4 months",
      level: "Beginner–Intermediate",
      track: "AI & Machine Learning",
      trackKey: "ai",
      description: "Structured Python learning path available through the Institute's partnership with DataCamp. Covers pandas, visualization, and intro ML.",
      learnMore: "#"
    }
  ],

  /* ──────────────────────────────────────────────
     DATASETS
  ────────────────────────────────────────────── */
  datasets: [
    {
      id: 1,
      name: "Louisiana Business Employment Statistics",
      domain: "Economic",
      domainKey: "economic",
      source: "Louisiana Workforce Commission",
      format: "CSV",
      records: "240,000+",
      access: "Open Access",
      accessKey: "open",
      description: "Monthly employment and wage data by industry sector, parish, and establishment size across Louisiana from 2015–2024.",
      updated: "Feb 2025"
    },
    {
      id: 2,
      name: "New Orleans 311 Service Request Data",
      domain: "Government",
      domainKey: "government",
      source: "City of New Orleans Open Data",
      format: "JSON / CSV",
      records: "1.2M+",
      access: "Open Access",
      accessKey: "open",
      description: "All 311 service requests logged by the city: pothole repairs, code violations, sanitation, and more. Geocoded with timestamps.",
      updated: "Mar 2025"
    },
    {
      id: 3,
      name: "Louisiana Hospital Discharge Data",
      domain: "Health",
      domainKey: "health",
      source: "Louisiana Dept of Health",
      format: "CSV",
      records: "850,000+",
      access: "Request Required",
      accessKey: "request",
      description: "De-identified inpatient discharge records (2018–2023) including diagnoses, procedures, length of stay, and outcomes.",
      updated: "Jan 2025"
    },
    {
      id: 4,
      name: "Gulf South Consumer Sentiment Survey",
      domain: "Business",
      domainKey: "business",
      source: "Callais Institute",
      format: "Excel",
      records: "4,800",
      access: "Open Access",
      accessKey: "open",
      description: "Quarterly consumer confidence and spending intent survey of Gulf South households. Includes demographic breakdowns.",
      updated: "Q1 2025"
    },
    {
      id: 5,
      name: "LOYNO Student Career Outcomes (Anonymized)",
      domain: "Education",
      domainKey: "education",
      source: "LOYNO Career Services",
      format: "CSV",
      records: "3,200",
      access: "Restricted",
      accessKey: "restricted",
      description: "De-identified data on student career outcomes: graduation year, major, first employer industry, starting salary range.",
      updated: "Dec 2024"
    },
    {
      id: 6,
      name: "New Orleans Property Assessment Data",
      domain: "Government",
      domainKey: "government",
      source: "Orleans Parish Assessor",
      format: "JSON",
      records: "178,000+",
      access: "Open Access",
      accessKey: "open",
      description: "Complete property assessments including valuations, ownership type, neighborhood, zoning, and assessment history.",
      updated: "Mar 2025"
    },
    {
      id: 7,
      name: "Louisiana Energy Production Statistics",
      domain: "Environmental",
      domainKey: "environmental",
      source: "Louisiana DNR / EIA",
      format: "CSV",
      records: "95,000+",
      access: "Open Access",
      accessKey: "open",
      description: "Oil, gas, and renewable energy production data by parish and field. Includes production volumes, operator records, and environmental metrics.",
      updated: "Feb 2025"
    },
    {
      id: 8,
      name: "Regional Nonprofit Financial Health Data",
      domain: "Social",
      domainKey: "social",
      source: "IRS Form 990 / Candid",
      format: "Excel",
      records: "12,400",
      access: "Request Required",
      accessKey: "request",
      description: "Compiled financial health metrics for nonprofits in Louisiana, Mississippi, and Alabama: revenue, expenses, program ratios, and leadership data.",
      updated: "Dec 2024"
    }
  ],

  /* ──────────────────────────────────────────────
     LEARNING RESOURCES
  ────────────────────────────────────────────── */
  resources: [
    {
      id: 1,
      title: "Python for Analytics",
      type: "Tutorial",
      typeKey: "tutorial",
      level: "Beginner",
      levelKey: "beginner",
      time: "10 hours",
      platform: "DataCamp",
      url: "#",
      description: "Learn Python from scratch with business data: data structures, pandas, visualization, and EDA workflows."
    },
    {
      id: 2,
      title: "Tableau Public Starter Guide",
      type: "Guide",
      typeKey: "guide",
      level: "Beginner",
      levelKey: "beginner",
      time: "2 hours",
      platform: "Callais Institute",
      url: "#",
      description: "Step-by-step guide to building your first public Tableau visualization. Created by Institute faculty."
    },
    {
      id: 3,
      title: "SQL Fundamentals for Data Analysis",
      type: "Course",
      typeKey: "course",
      level: "Beginner",
      levelKey: "beginner",
      time: "8 hours",
      platform: "Mode Analytics",
      url: "#",
      description: "Hands-on SQL learning using real business datasets. Covers SELECT, JOINs, aggregations, and subqueries."
    },
    {
      id: 4,
      title: "Machine Learning with scikit-learn",
      type: "Course",
      typeKey: "course",
      level: "Intermediate",
      levelKey: "intermediate",
      time: "20 hours",
      platform: "Kaggle",
      url: "#",
      description: "Practical ML: regression, classification, clustering, model evaluation, and feature engineering with Python."
    },
    {
      id: 5,
      title: "R for Statistical Computing",
      type: "Tutorial",
      typeKey: "tutorial",
      level: "Intermediate",
      levelKey: "intermediate",
      time: "15 hours",
      platform: "Callais Institute",
      url: "#",
      description: "Tidyverse, ggplot2, statistical modeling, and reproducible research workflows. Created by Institute faculty."
    },
    {
      id: 6,
      title: "Power BI: Complete Guide",
      type: "Video",
      typeKey: "video",
      level: "Intermediate",
      levelKey: "intermediate",
      time: "12 hours",
      platform: "Microsoft Learn",
      url: "#",
      description: "Full Power BI video curriculum from Microsoft: data modeling, DAX, visual design, and publishing to service."
    },
    {
      id: 7,
      title: "Deep Learning Fundamentals",
      type: "Course",
      typeKey: "course",
      level: "Advanced",
      levelKey: "advanced",
      time: "30 hours",
      platform: "Fast.ai",
      url: "#",
      description: "Practical deep learning for practitioners: image recognition, NLP, tabular data. Top-down teaching approach."
    },
    {
      id: 8,
      title: "Ethics in AI: A Practitioner's Guide",
      type: "Guide",
      typeKey: "guide",
      level: "All Levels",
      levelKey: "all",
      time: "3 hours",
      platform: "Montreal AI Ethics Institute",
      url: "#",
      description: "Frameworks for identifying and mitigating bias, ensuring fairness, and building accountable AI systems."
    },
    {
      id: 9,
      title: "Data Visualization Best Practices",
      type: "Guide",
      typeKey: "guide",
      level: "All Levels",
      levelKey: "all",
      time: "2 hours",
      platform: "Callais Institute",
      url: "#",
      description: "Institute-developed guide covering chart selection, color theory, accessibility, and storytelling with data."
    },
    {
      id: 10,
      title: "Business Statistics with Excel",
      type: "Tutorial",
      typeKey: "tutorial",
      level: "Beginner",
      levelKey: "beginner",
      time: "6 hours",
      platform: "OpenIntro",
      url: "#",
      description: "Descriptive statistics, probability, hypothesis testing, and regression — all using Microsoft Excel as the tool."
    }
  ],

  /* ──────────────────────────────────────────────
     JOB MARKET CANDIDATES
  ────────────────────────────────────────────── */
  candidates: [
    {
      id: 1,
      name: "Ana Martínez",
      email: "amartinez@loyno.edu",
      program: "Ph.D. Business Administration — Analytics",
      fields: ["Machine Learning", "AI Fairness", "Financial Analytics"],
      advisors: ["Dr. Nuwan Indika"],
      paperTitle: "Algorithmic Bias in Credit Scoring Models: Evidence from Regional Banks",
      availability: "Fall 2025"
    },
    {
      id: 2,
      name: "James Tran",
      email: "jtran@loyno.edu",
      program: "Ph.D. Business Administration — Analytics",
      fields: ["Healthcare Analytics", "Natural Language Processing", "Deep Learning"],
      advisors: ["Dr. Nuwan Indika", "Faculty Advisor"],
      paperTitle: "Predicting Hospital Readmission with Transformer-Based Clinical Note Models",
      availability: "Fall 2025"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sjohnson@loyno.edu",
      program: "M.S. Business Analytics",
      fields: ["Business Intelligence", "Causal Inference", "Marketing Analytics"],
      advisors: ["Faculty Advisor"],
      paperTitle: "Marketing Mix Modeling with Synthetic Control Methods in Regional Retail",
      availability: "Spring 2025"
    },
    {
      id: 4,
      name: "David Chen",
      email: "dchen@loyno.edu",
      program: "Ph.D. Business Administration — Analytics",
      fields: ["Supply Chain Analytics", "Optimization", "Operations Research"],
      advisors: ["Dr. Nuwan Indika"],
      paperTitle: "Robust Optimization Under Demand Uncertainty in Gulf Coast Logistics Networks",
      availability: "Fall 2025"
    },
    {
      id: 5,
      name: "Priya Nair",
      email: "pnair@loyno.edu",
      program: "Ph.D. Business Administration — Analytics",
      fields: ["Social Impact Analytics", "Policy Evaluation", "Education Data"],
      advisors: ["Dr. Nuwan Indika", "External Advisor"],
      paperTitle: "Data-Driven School Funding Equity Analysis: A Louisiana Parish Study",
      availability: "Fall 2025"
    }
  ],

  /* ──────────────────────────────────────────────
     NEWSLETTERS
  ────────────────────────────────────────────── */
  newsletters: [
    {
      id: 1,
      volume: 3,
      issue: 1,
      theme: "AI in the Gulf South Economy",
      date: "Spring 2025",
      dateSort: "2025-03",
      preview: "How AI is reshaping energy, healthcare, and financial services across Louisiana and the broader Gulf South — with analysis from Callais Institute faculty.",
      pdfUrl: "#",
      readUrl: "#",
      gradientFrom: "7A1330",
      gradientTo: "0D1B2A"
    },
    {
      id: 2,
      volume: 2,
      issue: 4,
      theme: "Impact Day 2024 Highlights + DVC Winners",
      date: "Fall 2024",
      dateSort: "2024-11",
      preview: "Full recap of Impact Day 2024 and the inaugural Data Visualization Competition, including winner profiles and faculty reflections on the year.",
      pdfUrl: "#",
      readUrl: "#",
      gradientFrom: "0D1B2A",
      gradientTo: "1A2E45"
    },
    {
      id: 3,
      volume: 2,
      issue: 3,
      theme: "New Partnership Announcements",
      date: "Summer 2024",
      dateSort: "2024-07",
      preview: "Three new industry partnerships announced, expanding student internship opportunities and research funding for the 2024–25 academic year.",
      pdfUrl: "#",
      readUrl: "#",
      gradientFrom: "560D22",
      gradientTo: "7A1330"
    },
    {
      id: 4,
      volume: 2,
      issue: 2,
      theme: "Research Spotlight: Healthcare Analytics",
      date: "Spring 2024",
      dateSort: "2024-03",
      preview: "Feature coverage of Impacts Lab research in healthcare: patient outcome modeling, hospital operations optimization, and public health surveillance.",
      pdfUrl: "#",
      readUrl: "#",
      gradientFrom: "1A2E45",
      gradientTo: "2C3E50"
    },
    {
      id: 5,
      volume: 2,
      issue: 1,
      theme: "2024 Annual Report Preview",
      date: "Winter 2024",
      dateSort: "2024-01",
      preview: "Institute highlights from Year 1: enrollment growth, industry partnerships formed, research projects launched, and the founding story of the Callais gift.",
      pdfUrl: "#",
      readUrl: "#",
      gradientFrom: "0D1B2A",
      gradientTo: "7A1330"
    }
  ],

  /* ──────────────────────────────────────────────
     TEAM / LEADERSHIP
  ────────────────────────────────────────────── */
  leadership: [
    {
      id: 1,
      name: "Dr. Nuwan Indika, Ph.D.",
      title: "Founding Director",
      subtitle: "J. William Fulbright Scholar | Chase / Francis C. Doyle Distinguished Professor | Assistant Professor of Business Analytics",
      email: "nimillag@loyno.edu",
      phone: "(504) 864-7930",
      office: "314 Miller Hall",
      research: ["Business Analytics", "AI/ML", "Data Science", "Econometrics", "Statistical Modeling"],
      bio: "Dr. Nuwan Indika is the founding director of the Peter Callais Institute for Business Analytics at Loyola University New Orleans. A J. William Fulbright Scholar, he holds the Chase / Francis C. Doyle Distinguished Professorship and serves as Assistant Professor in the College of Business. His research spans machine learning, econometrics, and applied business analytics. Prior to Loyola, Dr. Indika held research positions at leading institutions in the United States and internationally. He is deeply committed to Jesuit values of education and service.",
      linkedin: "#",
      type: "director"
    },
    {
      id: 2,
      name: "Faculty Lead — Data Analytics",
      title: "Faculty Lead, Data Analytics",
      subtitle: "College of Business, Loyola University",
      email: "analytics@loyno.edu",
      research: ["Business Analytics", "Data Visualization", "Predictive Modeling"],
      bio: "Placeholder faculty bio. This position focuses on leading data analytics curriculum development and student research initiatives within the Institute.",
      linkedin: "#",
      type: "faculty"
    },
    {
      id: 3,
      name: "Faculty Lead — AI & Machine Learning",
      title: "Faculty Lead, AI & Machine Learning",
      subtitle: "College of Business, Loyola University",
      email: "analytics@loyno.edu",
      research: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
      bio: "Placeholder faculty bio. This position oversees AI and machine learning curriculum, research, and industry engagement for the Institute.",
      linkedin: "#",
      type: "faculty"
    },
    {
      id: 4,
      name: "Faculty Lead — Business Intelligence",
      title: "Faculty Lead, Business Intelligence",
      subtitle: "College of Business, Loyola University",
      email: "analytics@loyno.edu",
      research: ["Business Intelligence", "Data Warehousing", "Decision Support Systems"],
      bio: "Placeholder faculty bio. This position leads the Business Intelligence track, including Power BI and Tableau curriculum development.",
      linkedin: "#",
      type: "faculty"
    },
    {
      id: 5,
      name: "Program Manager",
      title: "Program Manager",
      subtitle: "Peter Callais Institute for Business Analytics",
      email: "analytics@loyno.edu",
      research: [],
      bio: "Placeholder program manager bio. This role coordinates student programs, events, workshops, and administrative operations for the Institute.",
      linkedin: "#",
      type: "staff"
    },
    {
      id: 6,
      name: "Research Coordinator",
      title: "Research Coordinator",
      subtitle: "Impacts Lab, Peter Callais Institute",
      email: "analytics@loyno.edu",
      research: ["Research Design", "Statistical Consulting"],
      bio: "Placeholder research coordinator bio. This role manages Impacts Lab consulting engagements, researcher collaboration, and databank operations.",
      linkedin: "#",
      type: "staff"
    }
  ],

  /* ──────────────────────────────────────────────
     ADVISORY BOARD
  ────────────────────────────────────────────── */
  advisors: [
    {
      id: 1,
      name: "Advisory Board Member 1",
      company: "Gulf South Financial Group",
      role: "Chief Data Officer",
      expertise: ["Financial Analytics", "Risk Modeling"]
    },
    {
      id: 2,
      name: "Advisory Board Member 2",
      company: "Louisiana Technology Council",
      role: "Executive Director",
      expertise: ["Technology Policy", "Startup Ecosystem"]
    },
    {
      id: 3,
      name: "Advisory Board Member 3",
      company: "Regional Healthcare System",
      role: "VP of Analytics & Innovation",
      expertise: ["Healthcare AI", "Operational Analytics"]
    },
    {
      id: 4,
      name: "Advisory Board Member 4",
      company: "Callais Family Foundation",
      role: "Foundation Director",
      expertise: ["Philanthropy", "Business Leadership"]
    }
  ],

  /* ──────────────────────────────────────────────
     PARTNERS
  ────────────────────────────────────────────── */
  partners: [
    "Gulf South Technology Council",
    "Louisiana Workforce Commission",
    "New Orleans BioInnovation Center",
    "Regional Healthcare Network",
    "Gulf States Analytics Consortium",
    "Louisiana Economic Dev.",
    "Port of New Orleans",
    "Community Foundation"
  ],

  /* ──────────────────────────────────────────────
     TESTIMONIALS
  ────────────────────────────────────────────── */
  testimonials: [
    {
      id: 1,
      quote: "The Callais Institute's consulting team helped us transform raw customer data into actionable retention strategies. Their student analysts brought fresh perspectives we hadn't considered.",
      name: "Director of Analytics",
      company: "Regional Banking Partner",
      type: "industry"
    },
    {
      id: 2,
      quote: "Through the AGL Series and the DVC competition, I built the portfolio and confidence to land my analytics role before graduation. This institute changed my trajectory.",
      name: "2024 Graduate",
      company: "Business Analytics Major",
      type: "student"
    },
    {
      id: 3,
      quote: "Partnering with the Impacts Lab gave our nonprofit access to statistical expertise we couldn't otherwise afford. They helped us tell our impact story with real evidence.",
      name: "Executive Director",
      company: "New Orleans Nonprofit Partner",
      type: "community"
    }
  ]
};

// Export for use
if (typeof module !== 'undefined') module.exports = CIDATA;
