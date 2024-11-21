const mentalHealthData = [
    {
      id: 1,
      title: "Depression",
      overview: "Depression is a mood disorder that causes persistent feelings of sadness and loss of interest.",
      symptoms: [
        "Persistent sadness",
        "Loss of interest in activities",
        "Changes in appetite",
        "Fatigue",
        "Difficulty concentrating",
      ],
      causes: [
        "Biological factors",
        "Genetic predisposition",
        "Life events (e.g., trauma, stress)",
      ],
      treatments: {
        medications: ["Antidepressants"],
        therapies: ["Cognitive Behavioral Therapy (CBT)", "Interpersonal Therapy (IPT)"],
        selfCare: ["Regular exercise", "Healthy eating", "Maintaining a sleep routine"],
      },
      additionalInfo: "Depression affects people of all ages and can often go unnoticed. Early intervention is key.",
    },
    {
      id: 2,
      title: "Anxiety Disorders",
      overview: "Anxiety disorders involve excessive fear or worry that can interfere with daily life.",
      symptoms: [
        "Excessive worry",
        "Restlessness",
        "Rapid heartbeat",
        "Muscle tension",
        "Panic attacks",
      ],
      causes: [
        "Environmental stress",
        "Trauma",
        "Underlying medical conditions",
        "Family history",
      ],
      treatments: {
        medications: ["Anti-anxiety medications", "SSRIs"],
        therapies: ["Exposure Therapy", "CBT"],
        selfCare: ["Mindfulness practices", "Avoiding caffeine", "Relaxation techniques"],
      },
      additionalInfo: "Anxiety disorders are common and treatable with the right support and techniques.",
    },
    {
      id: 3,
      title: "Bipolar Disorder",
      overview: "Bipolar disorder is characterized by extreme mood swings ranging from mania to depression.",
      symptoms: [
        "Mood swings (highs and lows)",
        "Impulsivity",
        "Fatigue during depressive episodes",
        "Excessive energy during manic episodes",
      ],
      causes: [
        "Imbalance in brain chemicals",
        "Genetic factors",
        "Stressful life events",
      ],
      treatments: {
        medications: ["Mood stabilizers", "Antipsychotics"],
        therapies: ["Psychoeducation", "CBT", "Family-focused therapy"],
        selfCare: ["Routine setting", "Avoiding stress triggers", "Regular sleep schedule"],
      },
      additionalInfo: "Bipolar disorder often requires lifelong management with medical and therapeutic interventions.",
    },
    // Add more mental health issues here as needed
  ];
  
  export default mentalHealthData;
  