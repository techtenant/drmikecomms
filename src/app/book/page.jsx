'use client';
import { useState } from 'react';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import InfoIcon from '@mui/icons-material/Info';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    treatment: '',
    treatmentType: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    message: '',
    consent: false
  });

  const treatments = [
    {
      id: 'botox',
      name: 'Anti-Wrinkle Injections',
      duration: '30 min',
      price: 'From £250',
      icon: <MedicalServicesIcon sx={{ fontSize: 48 }} className="text-clinic-blue" />,
      popular: true,
      types: ['Forehead', 'Frown lines', 'Crow\'s feet', 'Full face']
    },
    {
      id: 'fillers',
      name: 'Dermal Fillers',
      duration: '45 min',
      price: 'From £350',
      icon: <WaterDropIcon sx={{ fontSize: 48 }} className="text-clinic-teal" />,
      popular: true,
      types: ['Lips', 'Cheeks', 'Jawline', 'Nose', 'Chin']
    },
    {
      id: 'vaser',
      name: 'Vaser Liposuction',
      duration: '2-4 hours',
      price: 'From £3,500',
      icon: <AutoAwesomeIcon sx={{ fontSize: 48 }} className="text-purple-500" />,
      popular: false,
      types: ['Abdomen', 'Thighs', 'Arms', 'Full consultation required']
    },
    {
      id: 'fat-reduction',
      name: 'Facial Fat Reduction',
      duration: '60 min',
      price: 'From £500',
      icon: <GpsFixedIcon sx={{ fontSize: 48 }} className="text-orange-500" />,
      popular: false,
      types: ['Jowels', 'Double chin', 'Buccal fat', 'Jaw slimming']
    },
    {
      id: 'consultation',
      name: 'General Consultation',
      duration: '30 min',
      price: '£75',
      icon: <LocalHospitalIcon sx={{ fontSize: 48 }} className="text-green-500" />,
      popular: false,
      types: ['Treatment advice', 'Assessment', 'Questions']
    }
  ];

  const generateTimeSlots = () => {
    const slots = [];
    // Morning slots
    for (let h = 9; h <= 11; h++) {
      slots.push(`${h}:00 AM`, `${h}:30 AM`);
    }
    slots.push('12:00 PM');
    // Afternoon slots
    for (let h = 1; h <= 5; h++) {
      slots.push(`${h}:00 PM`, `${h}:30 PM`);
    }
    return slots;
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
      full: date.toISOString().split('T')[0]
    };
  };

  const handleChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Here you would integrate with your backend/calendar API
    console.log('Booking submitted:', bookingData);
    setStep(5); // Show success
  };

  const canProceed = () => {
    switch(step) {
      case 1: return bookingData.treatment && bookingData.treatmentType;
      case 2: return bookingData.date;
      case 3: return bookingData.time;
      case 4: return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone && bookingData.dob && bookingData.consent;
      default: return false;
    }
  };

  const steps = [
    { number: 1, label: 'Treatment', icon: <LocalHospitalIcon /> },
    { number: 2, label: 'Date', icon: <CalendarTodayIcon /> },
    { number: 3, label: 'Time', icon: <AccessTimeIcon /> },
    { number: 4, label: 'Details', icon: <PersonIcon /> },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <EventAvailableIcon sx={{ fontSize: 60 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-xl opacity-90">
              Schedule your consultation with Dr Mike Comins in just a few steps
            </p>
          </div>
        </div>
      </section>

      {step !== 5 && (
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      step >= s.number 
                        ? 'bg-clinic-blue text-white scale-110' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step > s.number ? <CheckCircleIcon /> : s.icon}
                    </div>
                    <div className={`text-sm font-semibold ${step >= s.number ? 'text-clinic-blue' : 'text-gray-500'}`}>
                      {s.label}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 transition-all ${
                      step > s.number ? 'bg-clinic-blue' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            
            {/* Step 1: Treatment Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-clinic-dark mb-6">Select Your Treatment</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {treatments.map((treatment) => (
                    <button
                      key={treatment.id}
                      onClick={() => handleChange('treatment', treatment.id)}
                      className={`relative p-6 rounded-xl border-2 transition-all text-left ${
                        bookingData.treatment === treatment.id
                          ? 'border-clinic-blue bg-clinic-light/20 scale-105'
                          : 'border-gray-200 hover:border-clinic-light hover:bg-gray-50'
                      }`}
                    >
                      {treatment.popular && (
                        <span className="absolute top-3 right-3 bg-clinic-teal text-white text-xs px-3 py-1 rounded-full font-semibold">
                          Popular
                        </span>
                      )}
                      <div className="mb-3">{treatment.icon}</div>
                      <h3 className="text-xl font-bold text-clinic-dark mb-2">{treatment.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <AccessTimeIcon sx={{ fontSize: 16 }} />
                          {treatment.duration}
                        </span>
                        <span className="font-semibold text-clinic-blue">{treatment.price}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {bookingData.treatment && (
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-4">Select Treatment Area</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {treatments.find(t => t.id === bookingData.treatment)?.types.map((type, i) => (
                        <button
                          key={i}
                          onClick={() => handleChange('treatmentType', type)}
                          className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                            bookingData.treatmentType === type
                              ? 'border-clinic-blue bg-clinic-blue text-white'
                              : 'border-gray-200 text-gray-700 hover:border-clinic-blue'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date Selection */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-clinic-dark mb-6">Choose Your Date</h2>
                <p className="text-gray-600 mb-6">We're open Monday-Saturday. Select your preferred date.</p>
                
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {generateDates().map((date, i) => {
                    const formatted = formatDate(date);
                    return (
                      <button
                        key={i}
                        onClick={() => handleChange('date', formatted.full)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          bookingData.date === formatted.full
                            ? 'border-clinic-blue bg-clinic-blue text-white scale-110'
                            : 'border-gray-200 hover:border-clinic-blue hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs opacity-70 mb-1">{formatted.day}</div>
                        <div className="text-2xl font-bold">{formatted.date}</div>
                        <div className="text-xs opacity-70 mt-1">{formatted.month}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-clinic-dark mb-6">Choose Your Time</h2>
                <p className="text-gray-600 mb-6">
                  Available slots for {bookingData.date && new Date(bookingData.date).toLocaleDateString('en-GB', { 
                    weekday: 'long', day: 'numeric', month: 'long' 
                  })}
                </p>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {generateTimeSlots().map((time, i) => (
                    <button
                      key={i}
                      onClick={() => handleChange('time', time)}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                        bookingData.time === time
                          ? 'border-clinic-blue bg-clinic-blue text-white scale-110'
                          : 'border-gray-200 hover:border-clinic-blue hover:bg-gray-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <InfoIcon className="text-clinic-blue flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                    <span><strong>Note:</strong> Appointment times are subject to availability. 
                    We'll confirm your exact time within 24 hours.</span>
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Personal Details */}
            {step === 4 && (
              <div>
                <h2 className="text-3xl font-bold text-clinic-dark mb-6">Your Details</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={bookingData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={bookingData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={bookingData.dob}
                      onChange={(e) => handleChange('dob', e.target.value)}
                      max={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">You must be 18 or older</p>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      value={bookingData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none resize-none"
                      placeholder="Any specific concerns or questions?"
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingData.consent}
                        onChange={(e) => handleChange('consent', e.target.checked)}
                        required
                        className="mt-1 w-5 h-5 text-clinic-blue border-2 border-gray-300 rounded focus:ring-2 focus:ring-clinic-blue"
                      />
                      <span className="text-sm text-gray-700">
                        I consent to Dr Mike Comins Clinic processing my data and contacting me regarding 
                        my appointment. I understand the{' '}
                        <Link href="/terms" className="text-clinic-blue underline">Terms & Conditions</Link> and{' '}
                        <Link href="/privacy" className="text-clinic-blue underline">Privacy Policy</Link>.
                        <span className="text-red-500"> *</span>
                      </span>
                    </label>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="opacity-80">Treatment:</span>
                        <span className="font-semibold">
                          {treatments.find(t => t.id === bookingData.treatment)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Area:</span>
                        <span className="font-semibold">{bookingData.treatmentType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Date:</span>
                        <span className="font-semibold">
                          {bookingData.date && new Date(bookingData.date).toLocaleDateString('en-GB', { 
                            weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Time:</span>
                        <span className="font-semibold">{bookingData.time}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-white/30">
                        <span className="opacity-80">Price:</span>
                        <span className="font-bold text-lg">
                          {treatments.find(t => t.id === bookingData.treatment)?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-clinic-blue hover:text-clinic-blue transition"
                >
                  <ArrowBackIcon />
                  Back
                </button>
              )}
              
              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`ml-auto flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition ${
                    canProceed()
                      ? 'bg-clinic-blue text-white hover:bg-opacity-90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Continue
                  <ArrowForwardIcon />
                </button>
              )}

              {step === 4 && (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`ml-auto flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition ${
                    canProceed()
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <CheckCircleIcon />
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Success Screen */}
      {step === 5 && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
            <CelebrationIcon sx={{ fontSize: 80 }} className="text-green-500 mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for booking with Dr Mike Comins Clinic
            </p>

            <div className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Your Appointment Details</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <LocalHospitalIcon />
                  <div>
                    <div className="text-sm opacity-80">Treatment</div>
                    <div className="font-semibold text-lg">
                      {treatments.find(t => t.id === bookingData.treatment)?.name} - {bookingData.treatmentType}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarTodayIcon />
                  <div>
                    <div className="text-sm opacity-80">Date</div>
                    <div className="font-semibold text-lg">
                      {bookingData.date && new Date(bookingData.date).toLocaleDateString('en-GB', { 
                        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AccessTimeIcon />
                  <div>
                    <div className="text-sm opacity-80">Time</div>
                    <div className="font-semibold text-lg">{bookingData.time}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-clinic-dark mb-3">What Happens Next?</h4>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                  <span>Confirmation email sent to {bookingData.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                  <span>We'll call you within 24 hours to confirm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                  <span>Pre-treatment guide will be emailed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                  <span>Reminder sent 48 hours before appointment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link 
                href="/"
                className="block w-full bg-clinic-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-opacity-90 transition"
              >
                Return to Homepage
              </Link>
              <Link 
                href="/patient-hub"
                className="block w-full border-2 border-clinic-blue text-clinic-blue font-bold px-8 py-4 rounded-xl hover:bg-clinic-blue hover:text-white transition"
              >
                Visit Patient Hub
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Need to change your appointment?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:02075841642" className="flex items-center justify-center gap-2 text-clinic-blue font-semibold">
                  <PhoneIcon />
                  020 7584 1642
                </a>
                <a href="mailto:appointments@hansplace.com" className="flex items-center justify-center gap-2 text-clinic-blue font-semibold">
                  <EmailIcon />
                  appointments@hansplace.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-16"></div>
    </main>
  );
}