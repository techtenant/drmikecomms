'use client';
import { useState } from 'react';
import Link from 'next/link';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DownloadIcon from '@mui/icons-material/Download';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SpaIcon from '@mui/icons-material/Spa';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import ColorizeIcon from '@mui/icons-material/Colorize';
import ScaleIcon from '@mui/icons-material/Scale';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function PatientHubPage() {
  const [selectedTreatment, setSelectedTreatment] = useState('botox');
  const [openFaq, setOpenFaq] = useState(null);

  const treatments = [
    { id: 'botox', name: 'Anti-Wrinkle', icon: <VaccinesRoundedIcon/> },
    { id: 'fillers', name: 'Dermal Fillers', icon: <ColorizeIcon/> },
    { id: 'vaser', name: 'Vaser Lipo', icon: <SelfImprovementIcon/> },
    { id: 'fat', name: 'Fat Reduction', icon: <ScaleIcon/> }
  ];

  const treatmentJourneys = {
    botox: [
      { stage: 'Book', time: 'Day 0', desc: 'Schedule your consultation', icon: <CalendarTodayIcon /> },
      { stage: 'Consult', time: 'Day 1-7', desc: 'Medical assessment & treatment plan', icon: <QuestionAnswerIcon /> },
      { stage: 'Treatment', time: 'Day 8-14', desc: '15-30 min procedure', icon: <LocalHospitalIcon /> },
      { stage: 'Results', time: 'Day 3-7', desc: 'See visible improvements', icon: <CheckCircleIcon /> },
      { stage: 'Follow-up', time: '3-4 months', desc: 'Maintenance appointment', icon: <EventAvailableIcon /> }
    ],
    fillers: [
      { stage: 'Book', time: 'Day 0', desc: 'Schedule consultation', icon: <CalendarTodayIcon /> },
      { stage: 'Consult', time: 'Day 1-7', desc: 'Facial assessment & goals', icon: <QuestionAnswerIcon /> },
      { stage: 'Treatment', time: 'Day 8-14', desc: '30-60 min procedure', icon: <LocalHospitalIcon /> },
      { stage: 'Results', time: 'Immediate', desc: 'See instant volume', icon: <CheckCircleIcon /> },
      { stage: 'Follow-up', time: '6-12 months', desc: 'Touch-up if needed', icon: <EventAvailableIcon /> }
    ],
    vaser: [
      { stage: 'Book', time: 'Day 0', desc: 'Initial consultation', icon: <CalendarTodayIcon /> },
      { stage: 'Consult', time: 'Week 1-2', desc: 'Body assessment & planning', icon: <QuestionAnswerIcon /> },
      { stage: 'Treatment', time: 'Week 3-4', desc: '1-4 hour procedure', icon: <LocalHospitalIcon /> },
      { stage: 'Recovery', time: '1-2 weeks', desc: 'Rest & compression garment', icon: <SpaIcon /> },
      { stage: 'Results', time: '3-6 months', desc: 'Final sculpted appearance', icon: <CheckCircleIcon /> }
    ],
    fat: [
      { stage: 'Book', time: 'Day 0', desc: 'Schedule assessment', icon: <CalendarTodayIcon /> },
      { stage: 'Consult', time: 'Day 1-7', desc: 'Target area evaluation', icon: <QuestionAnswerIcon /> },
      { stage: 'Treatment', time: 'Day 8-14', desc: '30-90 min procedure', icon: <LocalHospitalIcon /> },
      { stage: 'Recovery', time: '3-7 days', desc: 'Minimal downtime', icon: <SpaIcon /> },
      { stage: 'Results', time: '2-4 weeks', desc: 'See definition improve', icon: <CheckCircleIcon /> }
    ]
  };

  const quickActions = [
    {
      title: 'Book Appointment',
      desc: 'Schedule your consultation or treatment',
      icon: <CalendarTodayIcon sx={{ fontSize: 40 }} />,
      color: 'from-clinic-blue to-clinic-dark',
      link: '/contact'
    },
    {
      title: 'Download Forms',
      desc: 'Consent forms & medical history',
      icon: <DownloadIcon sx={{ fontSize: 40 }} />,
      color: 'from-clinic-teal to-clinic-blue',
      link: '#forms'
    },
    {
      title: 'Ask Questions',
      desc: 'Get answers from our team',
      icon: <QuestionAnswerIcon sx={{ fontSize: 40 }} />,
      color: 'from-purple-500 to-pink-500',
      link: '/contact'
    },
    {
      title: 'Emergency Contact',
      desc: '24/7 post-treatment support',
      icon: <PhoneInTalkIcon sx={{ fontSize: 40 }} />,
      color: 'from-red-500 to-orange-500',
      link: '#emergency'
    }
  ];

  const faqs = [
    {
      q: 'How do I prepare for my treatment?',
      a: 'Avoid alcohol 24 hours before, no blood-thinning medications (aspirin, ibuprofen) for 48 hours unless prescribed. Arrive with clean skin, no makeup. Bring your medical history form completed.'
    },
    {
      q: 'Will my treatment hurt?',
      a: 'Most treatments involve minimal discomfort. We use fine needles and can apply numbing cream if needed. Anti-wrinkle injections feel like tiny pinpricks. Most patients describe it as very tolerable.'
    },
    {
      q: 'When can I return to work?',
      a: 'Anti-wrinkle & fillers: immediately. Vaser liposuction: 1-2 weeks. Facial fat reduction: 3-7 days. We provide detailed aftercare specific to your treatment.'
    },
    {
      q: 'What if I have side effects?',
      a: 'Mild redness and swelling are normal for 24-48 hours. Contact us immediately if you experience severe pain, infection signs, or unusual symptoms. Emergency line: 020 7584 1642.'
    },
    {
      q: 'Can I reschedule my appointment?',
      a: '48+ hours notice: free reschedule. 24-48 hours: 50% deposit forfeit. Less than 24 hours: full deposit forfeit. Call us: 020 7584 1642'
    }
  ];

  const downloads = [
    { name: 'Medical History Form', icon: <DescriptionIcon />, file: 'medical-history.pdf' },
    { name: 'Botox Consent Form', icon: <DescriptionIcon />, file: 'botox-consent.pdf' },
    { name: 'Filler Consent Form', icon: <DescriptionIcon />, file: 'filler-consent.pdf' },
    { name: 'Vaser Consent Form', icon: <DescriptionIcon />, file: 'vaser-consent.pdf' },
    { name: 'Aftercare Instructions', icon: <DescriptionIcon />, file: 'aftercare-guide.pdf' },
    { name: 'Pre-Treatment Guide', icon: <DescriptionIcon />, file: 'pre-treatment.pdf' }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <LocalHospitalIcon sx={{ fontSize: 60 }} className="mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Hub</h1>
            <p className="text-xl opacity-90">
              Everything you need before, during, and after your treatment
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.link}
                className={`bg-gradient-to-br ${action.color} text-white p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg group cursor-pointer`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <TipsAndUpdatesIcon sx={{ fontSize: 48 }} className="text-clinic-blue mb-4" />
              <h2 className="text-4xl font-bold text-clinic-dark mb-4">Your Treatment Journey</h2>
              <p className="text-xl text-gray-600">See what to expect step-by-step</p>
            </div>

            {/* Treatment Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {treatments.map((treatment) => (
                <button
                  key={treatment.id}
                  onClick={() => setSelectedTreatment(treatment.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedTreatment === treatment.id
                      ? 'bg-clinic-blue text-white scale-110'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{treatment.icon}</span>
                  {treatment.name}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-clinic-light hidden md:block"></div>
              
              <div className="grid md:grid-cols-5 gap-6">
                {treatmentJourneys[selectedTreatment].map((step, i) => (
                  <div key={i} className="relative">
                    {/* Icon Circle */}
                    <div className="bg-white border-4 border-clinic-blue rounded-full w-24 h-24 mx-auto flex items-center justify-center text-clinic-blue mb-4 relative z-10 shadow-lg">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-clinic-dark mb-1">{step.stage}</h4>
                      <div className="text-sm text-clinic-teal font-semibold mb-2">{step.time}</div>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section id="forms" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DownloadIcon sx={{ fontSize: 48 }} className="text-clinic-blue mb-4" />
              <h2 className="text-4xl font-bold text-clinic-dark mb-4">Download Forms</h2>
              <p className="text-xl text-gray-600">Complete before your appointment to save time</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {downloads.map((doc, i) => (
                <button
                  key={i}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-clinic-blue group"
                >
                  <div className="text-clinic-blue group-hover:scale-110 transition-transform">
                    {doc.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-clinic-dark">{doc.name}</div>
                    <div className="text-sm text-gray-500">PDF Download</div>
                  </div>
                  <DownloadIcon className="text-gray-400 group-hover:text-clinic-blue transition-colors" />
                </button>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>💡 Tip: Download and complete forms before your appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <QuestionAnswerIcon sx={{ fontSize: 48 }} className="text-clinic-blue mb-4" />
              <h2 className="text-4xl font-bold text-clinic-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common queries</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-clinic-dark pr-4">{faq.q}</span>
                    <span className={`text-2xl text-clinic-blue transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link href="/contact" className="inline-block bg-clinic-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section id="emergency" className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <WarningAmberIcon sx={{ fontSize: 60 }} className="mb-6" />
            <h2 className="text-4xl font-bold mb-4">24/7 Emergency Support</h2>
            <p className="text-xl mb-8 opacity-90">
              Experiencing severe pain, infection signs, or unusual symptoms after treatment?
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 inline-block">
              <div className="text-sm mb-2 opacity-90">Call immediately:</div>
              <a href="tel:02075841642" className="text-5xl font-bold hover:text-yellow-300 transition">
                020 7584 1642
              </a>
            </div>
            <div className="mt-8 space-y-3 text-sm opacity-90">
              <p>✓ Available 24/7 for post-treatment emergencies</p>
              <p>✓ Dr Comins or on-call physician will assist</p>
              <p>✓ Normal office hours: Mon-Fri 9am-6pm, Sat 9am-2pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-clinic-dark mb-8 text-center">Quick Tips for Patients</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <AccessTimeIcon className="text-clinic-blue mb-3" sx={{ fontSize: 40 }} />
                <h3 className="font-bold text-lg text-clinic-dark mb-2">Before Treatment</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• No alcohol 24hrs before</li>
                  <li>• Avoid blood thinners 48hrs</li>
                  <li>• Arrive with clean skin</li>
                  <li>• Complete medical forms</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <LocalHospitalIcon className="text-clinic-blue mb-3" sx={{ fontSize: 40 }} />
                <h3 className="font-bold text-lg text-clinic-dark mb-2">During Visit</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Ask all your questions</li>
                  <li>• Discuss realistic goals</li>
                  <li>• Understand aftercare</li>
                  <li>• Take notes if needed</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <SpaIcon className="text-clinic-blue mb-3" sx={{ fontSize: 40 }} />
                <h3 className="font-bold text-lg text-clinic-dark mb-2">After Treatment</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Follow aftercare instructions</li>
                  <li>• No exercise 24hrs</li>
                  <li>• Keep area clean</li>
                  <li>• Contact us with concerns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}