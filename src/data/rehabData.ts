import { 
  Activity, 
  Briefcase, 
  Brain, 
  Heart, 
  Wind, 
  Zap, 
  Baby, 
  Users, 
  MessageSquare, 
  Accessibility,
  ShieldCheck,
  Stethoscope,
  Droplets,
  Cpu,
  Activity as MedicalIcon,
  Timer,
} from 'lucide-react';

export interface RehabDomain {
  id: string;
  title: string;
  description: string;
  icon: any;
  imageUrl: string;
  category: 'Core' | 'Specialized' | 'Pallative' | 'Modern';
  details: string[];
  fullServices: string[];
  customerRequirements: string[];
  successMetrics: string;
  whoCanBenefit?: string[];
  programComponents?: { title: string; description: string }[];
  benefits?: string[];
  conditionsTreated?: { category: string; conditions: string[] }[];
  acceptanceCriteria?: string[];
}

export const rehabDomains: RehabDomain[] = [
  {
    id: 'palliative',
    title: 'Rehab & Pallative Care',
    description: 'Specialized medical care for people living with serious illnesses, focusing on comfort and quality of life.',
    icon: ShieldCheck,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Pallative',
    details: [
      'Advanced pain management',
      'Symptom relief protocols',
      'Emotional & spiritual support',
      'Family caregiver assistance'
    ],
    fullServices: [
      'WHO Pain Ladder implementation',
      'Interventional pain procedures',
      'Pallative sedation (when indicated)',
      'Subcutaneous medication delivery',
      'Wound care for pressure sores',
      'Nutrition support for advanced illness'
    ],
    customerRequirements: [
      'Diagnosis of life-limiting illness',
      'Current medication list',
      'Advanced directive/Living will (if any)',
      'Primary caregiver contact'
    ],
    successMetrics: '98% patient comfort satisfaction score in end-of-life care.',
    benefits: [
      'Effective pain and symptom control',
      'Enhanced quality of life',
      'Emotional and spiritual support',
      'Better communication with family and care teams'
    ],
    conditionsTreated: [
      { category: 'Chronic Illness', conditions: ['Advanced Cancer', 'End-stage Organ Failure'] },
      { category: 'Neurological', conditions: ['Advanced Dementia', 'ALS'] }
    ],
    acceptanceCriteria: [
      'Life-limiting illness',
      'Need for symptom management',
      'Focus on quality of life'
    ]
  },
  {
    id: 'onco',
    title: 'Onco Rehab',
    description: 'A comprehensive cancer rehabilitation program designed to help survivors regain physical function, manage symptoms, and achieve independence throughout their recovery journey.',
    icon: ShieldCheck,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Specialized',
    details: [
      'Cancer-related fatigue management',
      'Lymphedema therapy',
      'Post-surgical recovery',
      'Strength and endurance training'
    ],
    fullServices: [
      'Manual Lymphatic Drainage (MLD)',
      'Cancer-specific Exercise Prescription',
      'Nutritional Optimization for Recovery',
      'Advanced Pain Management Strategies',
      'Psychosocial Support & Counseling',
      'Functional Mobility Restoration',
      'Swallowing & Speech Therapy (for Head/Neck Cancer)',
      'Cognitive "Chemo-Brain" Support'
    ],
    whoCanBenefit: [
      'Breast Cancer Survivors',
      'Prostate Cancer Patients',
      'Lung Cancer Recovery',
      'Colorectal Cancer Patients',
      'Head and Neck Cancer Survivors',
      'Brain Cancer Recovery',
      'Leukemia & Lymphoma Patients'
    ],
    programComponents: [
      {
        title: 'Physical Therapy',
        description: 'Focuses on restoring strength, balance, and mobility while managing treatment-related physical limitations.'
      },
      {
        title: 'Occupational Therapy',
        description: 'Helps patients regain the ability to perform daily activities and implements energy conservation techniques.'
      },
      {
        title: 'Lymphedema Management',
        description: 'Specialized care including manual drainage and compression therapy to manage swelling after surgery or radiation.'
      },
      {
        title: 'Nutritional Counseling',
        description: 'Evidence-based dietary guidance to support the immune system and promote tissue healing during and after treatment.'
      },
      {
        title: 'Psychological Support',
        description: 'Dedicated counseling to help patients and families cope with the emotional challenges of a cancer diagnosis.'
      }
    ],
    customerRequirements: [
      'Oncologist clearance for physical activity',
      'Current treatment plan summary',
      'Recent blood count reports (CBC)',
      'List of current medications and supplements'
    ],
    successMetrics: '82% of patients report a significant reduction in cancer-related fatigue and improved quality of life scores.',
    benefits: [
      'Reduced cancer-related fatigue',
      'Improved physical strength and mobility',
      'Better management of treatment side effects',
      'Enhanced psychological resilience'
    ],
    conditionsTreated: [
      { category: 'Post-Treatment', conditions: ['Lymphedema', 'Cancer-related fatigue'] },
      { category: 'Physical', conditions: ['Muscle weakness', 'Joint stiffness'] }
    ],
    acceptanceCriteria: [
      'Cancer diagnosis or post-treatment status',
      'Functional deficits related to cancer or treatment',
      'Medical clearance for rehabilitation'
    ]
  },
  {
    id: 'cardiac',
    title: 'Cardiac Rehab',
    description: 'A medically supervised program designed to improve cardiovascular health and quality of life for individuals recovering from heart-related conditions or surgeries.',
    icon: Heart,
    imageUrl: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Modern',
    details: [
      'Post-cardiac surgery recovery',
      'Heart attack rehabilitation',
      'Heart disease management',
      'Cardiovascular health education'
    ],
    fullServices: [
      'Monitored Exercise Training',
      'Nutritional Counseling & Diet Planning',
      'Risk Factor Management',
      'Stress Management & Counseling',
      'Blood Pressure & Lipid Control',
      'Smoking Cessation Support',
      'Medication Adherence Education',
      'Emergency Response Training'
    ],
    whoCanBenefit: [
      'Post-Heart Attack (MI) Patients',
      'Post-CABG (Bypass) Surgery',
      'Heart Valve Repair/Replacement',
      'Stable Angina Patients',
      'Heart Failure Management',
      'Post-Angioplasty/Stenting',
      'Heart Transplant Recipients'
    ],
    programComponents: [
      {
        title: 'Monitored Exercise',
        description: 'ECG-monitored physical activity tailored to individual heart health and endurance levels.'
      },
      {
        title: 'Nutritional Support',
        description: 'Heart-healthy dietary guidance to manage cholesterol, blood pressure, and weight.'
      },
      {
        title: 'Education & Counseling',
        description: 'In-depth sessions on understanding heart disease, managing stress, and lifestyle modification.'
      },
      {
        title: 'Medical Supervision',
        description: 'Continuous oversight by cardiologists and specialized nurses to ensure safety during recovery.'
      }
    ],
    customerRequirements: [
      'Cardiologist referral',
      'Recent ECG/Stress test results',
      'Stable cardiac condition for exercise'
    ],
    successMetrics: '35% reduction in hospital readmission rates for cardiac patients.',
    benefits: [
      'Improved heart function and stamina',
      'Reduced risk of future heart events',
      'Better management of blood pressure',
      'Enhanced emotional well-being'
    ],
    conditionsTreated: [
      { category: 'Post-Event', conditions: ['Heart Attack', 'Angioplasty', 'Bypass Surgery'] },
      { category: 'Chronic', conditions: ['Heart Failure', 'Stable Angina'] }
    ],
    acceptanceCriteria: [
      'Recent cardiac event or diagnosis',
      'Physician referral',
      'Stable vital signs'
    ]
  },
  {
    id: 'neurological',
    title: 'Neurological Rehab',
    description: 'A specialized interdisciplinary program focused on optimizing recovery and quality of life for individuals with disorders of the nervous system.',
    icon: Zap,
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Specialized',
    details: [
      'Stroke recovery programs',
      'Spinal cord injury (SCI) rehab',
      'Parkinson\'s disease management',
      'Multiple Sclerosis (MS) support'
    ],
    fullServices: [
      'Neuroplasticity-based Physical Therapy',
      'Cognitive & Executive Function Training',
      'Spasticity & Tone Management',
      'Robotic-assisted Gait Training',
      'Vestibular & Balance Rehabilitation',
      'Constraint-Induced Movement Therapy (CIMT)',
      'Functional Electrical Stimulation (FES)',
      'Speech & Swallowing Therapy'
    ],
    whoCanBenefit: [
      'Stroke Survivors',
      'Spinal Cord Injury (SCI) Patients',
      'Parkinson\'s Disease Patients',
      'Traumatic Brain Injury (TBI) Survivors',
      'Multiple Sclerosis (MS) Patients',
      'Guillain-Barré Syndrome (GBS) Patients',
      'Cerebral Palsy (Adult & Pediatric)'
    ],
    programComponents: [
      {
        title: 'Neuro-Physiotherapy',
        description: 'Advanced movement therapy focused on re-training the brain and nervous system through neuroplasticity.'
      },
      {
        title: 'Cognitive Rehabilitation',
        description: 'Structured exercises to improve memory, attention, problem-solving, and executive functions.'
      },
      {
        title: 'Speech & Language Therapy',
        description: 'Addressing communication disorders and swallowing difficulties (dysphagia) common in neuro conditions.'
      },
      {
        title: 'Robotic Integration',
        description: 'Use of state-of-the-art robotic systems to provide high-repetition, precise movement training.'
      }
    ],
    customerRequirements: [
      'Neurologist referral',
      'Stable vital signs for intensive therapy',
      'Long-term commitment to recovery goals'
    ],
    successMetrics: '70% of stroke patients achieve independent walking within 6 months.',
    benefits: [
      'Improved motor function and coordination',
      'Enhanced cognitive and communication skills',
      'Increased independence in daily activities',
      'Better management of spasticity and pain'
    ],
    conditionsTreated: [
      { category: 'Brain & Spine', conditions: ['Stroke', 'Spinal Cord Injury', 'TBI'] },
      { category: 'Degenerative', conditions: ['Parkinson\'s', 'Multiple Sclerosis', 'ALS'] }
    ],
    acceptanceCriteria: [
      'Neurological diagnosis',
      'Stable medical condition',
      'Potential for functional improvement'
    ]
  },
  {
    id: 'pulmonary',
    title: 'Pulmonary Rehab',
    description: 'A comprehensive program designed to improve the well-being of people who have chronic breathing problems through exercise, education, and support.',
    icon: Wind,
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Modern',
    details: [
      'COPD management',
      'Pulmonary fibrosis support',
      'Post-COVID respiratory care',
      'Breathing exercise training'
    ],
    fullServices: [
      'Breathing Techniques (Pursed-lip, Diaphragmatic)',
      'Oxygen Therapy Management',
      'Endurance & Strength Training',
      'Airway Clearance Techniques',
      'Nutritional Support for Lung Health',
      'Energy Conservation Strategies',
      'Psychological Support for Chronic Illness',
      'Post-COVID Lung Restoration'
    ],
    whoCanBenefit: [
      'COPD (Emphysema, Chronic Bronchitis)',
      'Pulmonary Fibrosis Patients',
      'Post-COVID Respiratory Complications',
      'Asthma & Bronchiectasis',
      'Cystic Fibrosis Patients',
      'Pre & Post Lung Surgery',
      'Occupational Lung Diseases'
    ],
    programComponents: [
      {
        title: 'Exercise Training',
        description: 'Supervised physical activity to improve muscle strength and endurance, reducing the effort of breathing.'
      },
      {
        title: 'Breathing Retraining',
        description: 'Specialized techniques to help patients breathe more efficiently and manage shortness of breath.'
      },
      {
        title: 'Nutritional Support',
        description: 'Dietary guidance to maintain healthy weight and provide the energy needed for breathing and activity.'
      },
      {
        title: 'Education & Support',
        description: 'Sessions on managing medications, avoiding triggers, and coping with the emotional impact of lung disease.'
      }
    ],
    customerRequirements: [
      'Pulmonologist referral',
      'Pulmonary function test (PFT) results',
      'Oxygen saturation monitoring'
    ],
    successMetrics: '80% of patients report improved breathing and exercise tolerance.',
    benefits: [
      'Reduced shortness of breath',
      'Increased exercise tolerance',
      'Improved daily activity levels',
      'Better management of lung symptoms'
    ],
    conditionsTreated: [
      { category: 'Chronic Obstructive', conditions: ['COPD', 'Emphysema', 'Chronic Bronchitis'] },
      { category: 'Restrictive', conditions: ['Pulmonary Fibrosis', 'Sarcoidosis'] }
    ],
    acceptanceCriteria: [
      'Chronic respiratory disease',
      'Symptomatic despite medical therapy',
      'Non-smoker or in cessation program'
    ]
  },
  {
    id: 'occupational',
    title: 'Occupational Rehab',
    description: 'Regaining the ability to perform daily living activities and return to work or meaningful occupations.',
    icon: Accessibility,
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Core',
    details: [
      'Daily living activity (ADL) training',
      'Fine motor skill development',
      'Adaptive technique training',
      'Workplace accommodations'
    ],
    fullServices: [
      'Self-care training (dressing, feeding)',
      'Home modification consultation',
      'Splinting and orthotics fabrication',
      'Cognitive strategies for daily tasks',
      'Work hardening and conditioning',
      'Assistive technology training'
    ],
    customerRequirements: [
      'Assessment of home/work environment',
      'Identification of specific daily barriers',
      'Family/caregiver involvement for training'
    ],
    successMetrics: '85% return-to-work rate for industrial injury patients.',
    benefits: [
      'Increased independence in daily tasks',
      'Improved fine motor coordination',
      'Enhanced safety at home and work',
      'Better quality of life through self-reliance'
    ],
    conditionsTreated: [
      { category: 'Neurological', conditions: ['Stroke', 'Traumatic Brain Injury', 'Parkinson\'s'] },
      { category: 'Developmental', conditions: ['Autism Spectrum', 'Cerebral Palsy'] }
    ],
    acceptanceCriteria: [
      'Functional deficits in daily living',
      'Cognitive ability to follow instructions',
      'Stable medical condition'
    ]
  },
  {
    id: 'physical',
    title: 'Physical Rehab',
    description: 'A comprehensive orthopedic and musculoskeletal rehabilitation program focused on restoring mobility, strength, and functional independence through evidence-based physical therapy.',
    icon: Activity,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Core',
    details: [
      'Musculoskeletal injury recovery',
      'Post-surgical rehabilitation',
      'Neurological condition management',
      'Chronic pain treatment'
    ],
    fullServices: [
      'Manual Therapy & Joint Mobilization',
      'Therapeutic Exercise Prescription',
      'Gait and Balance Training',
      'Range of Motion Improvement',
      'Electrotherapy & Ultrasound',
      'Sports Injury Recovery',
      'Dry Needling & Taping',
      'Post-Surgical Protocols'
    ],
    whoCanBenefit: [
      'Post-Total Knee Replacement (TKR)',
      'Post-Total Hip Replacement (THR)',
      'Spinal Surgery Recovery',
      'Sports & Ligament Injuries',
      'Chronic Back & Neck Pain',
      'Arthritis & Degenerative Conditions',
      'Complex Bone Fractures'
    ],
    programComponents: [
      {
        title: 'Manual Therapy',
        description: 'Hands-on techniques including joint mobilization and soft tissue manipulation to reduce pain and improve movement.'
      },
      {
        title: 'Therapeutic Exercise',
        description: 'Customized exercise programs designed to strengthen specific muscle groups and improve overall physical capacity.'
      },
      {
        title: 'Gait Training',
        description: 'Specialized training to improve walking patterns, balance, and safety using advanced assistive devices.'
      },
      {
        title: 'Pain Management',
        description: 'Integration of physical modalities and movement-based strategies to manage acute and chronic pain conditions.'
      }
    ],
    customerRequirements: [
      'Doctor referral for specialized cases',
      'Recent imaging reports (X-ray/MRI)',
      'Comfortable athletic wear',
      'Willingness to follow home-exercise plans'
    ],
    successMetrics: '92% of patients report significant mobility improvement within 12 sessions.',
    benefits: [
      'Improved mobility and independence',
      'Reduced pain and inflammation',
      'Enhanced muscle strength and coordination',
      'Prevention of secondary complications'
    ],
    conditionsTreated: [
      { category: 'Neurological', conditions: ['Stroke', 'Spinal Cord Injury', 'Multiple Sclerosis'] },
      { category: 'Orthopedic', conditions: ['Joint Replacements', 'Fractures', 'Back Pain'] }
    ],
    acceptanceCriteria: [
      'Medically stable',
      'Able to participate in at least 1 hour of therapy daily',
      'Clear goals for physical improvement'
    ]
  },
  {
    id: 'geriatric',
    title: 'Geriatric Rehab',
    description: 'A specialized program addressing the complex needs of older adults to maintain independence, prevent falls, and manage age-related conditions.',
    icon: Users,
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Core',
    details: [
      'Fall prevention programs',
      'Osteoarthritis management',
      'Dementia-friendly therapy',
      'Mobility aid training'
    ],
    fullServices: [
      'Balance and Stability Exercises',
      'Strength Training for Seniors',
      'Home Safety Assessments',
      'Cognitive Stimulation Therapy',
      'Chronic Disease Management',
      'Caregiver Education and Support',
      'Osteoporosis Management',
      'Post-Fracture Rehabilitation'
    ],
    whoCanBenefit: [
      'Seniors with Fall Risk',
      'Osteoarthritis & Osteoporosis Patients',
      'Individuals with Dementia/Alzheimer\'s',
      'Post-Fracture (Hip, Wrist) Patients',
      'Seniors with Reduced Mobility',
      'Chronic Pain in Older Adults',
      'Post-Hospitalization Recovery'
    ],
    programComponents: [
      {
        title: 'Balance Training',
        description: 'Specific exercises to improve stability and reduce the risk of falls in daily life.'
      },
      {
        title: 'Strength & Conditioning',
        description: 'Gentle but effective resistance training to maintain muscle mass and bone density.'
      },
      {
        title: 'Cognitive Stimulation',
        description: 'Activities designed to maintain mental sharpness and slow cognitive decline.'
      },
      {
        title: 'Home Safety',
        description: 'Comprehensive evaluation of the living environment to identify and mitigate hazards.'
      }
    ],
    customerRequirements: [
      'Geriatrician assessment',
      'List of current medications',
      'History of falls or fractures'
    ],
    successMetrics: '65% reduction in fall incidents among participating seniors.',
    benefits: [
      'Reduced risk of falls and injuries',
      'Maintained independence in daily life',
      'Better management of chronic conditions',
      'Improved social engagement and mental health'
    ],
    conditionsTreated: [
      { category: 'Physical', conditions: ['Osteoarthritis', 'Osteoporosis', 'Balance issues'] },
      { category: 'Cognitive', conditions: ['Dementia', 'Alzheimer\'s'] }
    ],
    acceptanceCriteria: [
      'Age 65+ or age-related functional decline',
      'Stable medical condition',
      'Ability to participate in gentle therapy'
    ]
  },
  {
    id: 'post-op',
    title: 'Post OP Rehab',
    description: 'Accelerated recovery programs following orthopedic, cardiac, or general surgeries.',
    icon: Stethoscope,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Core',
    details: [
      'Joint replacement recovery',
      'Spinal surgery rehabilitation',
      'Incision site care',
      'Early mobilization protocols'
    ],
    fullServices: [
      'Post-operative pain management',
      'Progressive weight-bearing exercises',
      'Scar tissue mobilization',
      'Functional task retraining',
      'DVT prevention education',
      'Home exercise program titration'
    ],
    customerRequirements: [
      'Surgeon\'s post-op protocol',
      'Surgical discharge summary',
      'Wound healing status'
    ],
    successMetrics: '94% of patients achieve surgical recovery milestones ahead of schedule.',
    benefits: [
      'Faster recovery and return to activities',
      'Reduced post-operative pain and swelling',
      'Prevention of surgical complications',
      'Improved surgical outcomes'
    ],
    conditionsTreated: [
      { category: 'Orthopedic', conditions: ['Joint replacements', 'Spinal surgery'] },
      { category: 'General', conditions: ['Abdominal surgery', 'Cardiac surgery'] }
    ],
    acceptanceCriteria: [
      'Recent surgical procedure',
      'Surgeon referral and protocols',
      'Stable vital signs'
    ]
  }
];
