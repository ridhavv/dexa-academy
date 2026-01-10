import React, { useState } from 'react';
import { LeadFormData, Subject } from '../types';

const SALESFORCE_ORG_ID = "00DdM000000zoxZ";
const SALESFORCE_URL = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
const WHATSAPP_PHONE = "7976959913"; // India country code: +91

export const EnrollmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({
    interest: Subject.VEDIC_MATHS
  });

  const sendToSalesforce = async (data: Partial<LeadFormData>) => {
    try {
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append("oid", SALESFORCE_ORG_ID);
      formDataEncoded.append("retURL", window.location.href);
      formDataEncoded.append("first_name", data.parentName || "");
      formDataEncoded.append("last_name", ""); // Can be combined or left empty
      formDataEncoded.append("email", data.email || "");
      formDataEncoded.append("phone", data.phone || "");
      
      // Send to Salesforce
      await fetch(SALESFORCE_URL, {
        method: "POST",
        body: formDataEncoded,
        mode: "no-cors" // Salesforce requires no-cors mode
      });
    } catch (error) {
      console.error("Error sending to Salesforce:", error);
    }
  };

  const sendToWhatsApp = (data: Partial<LeadFormData>) => {
    // Create WhatsApp message
    const message = `Hi, this is ${data.parentName}. I am interested to enroll my student in this batch. My phone number is ${data.phone}. Looking forward to hear from you!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL (opens in new tab)
    const whatsappUrl = `https://wa.me/91${WHATSAPP_PHONE}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send to Salesforce
      await sendToSalesforce(formData);
      
      // Log for debugging
      console.log('Form submitted:', formData);
      
      // Redirect to WhatsApp immediately
      sendToWhatsApp(formData);
      
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-pulse">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Redirecting to WhatsApp...</h3>
        <p className="text-green-600 mb-2">
          Thank you for registering! Opening WhatsApp to connect with our team.
        </p>
        <p className="text-sm text-green-500 mb-4">
          If WhatsApp doesn't open automatically, please click the button below.
        </p>
        <button 
          onClick={() => sendToWhatsApp(formData)}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Open WhatsApp
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200 border border-slate-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Free Trial</h2>
        <p className="text-slate-500">Register your child in Dexa academy today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Parent's Name</label>
          <input 
            required
            type="text" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            placeholder="e.g. Rahul Sharma"
            value={formData.parentName || ''}
            onChange={(e) => setFormData({...formData, parentName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            placeholder="rahul@example.com"
            value={formData.email || ''}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input 
            required
            type="tel" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            placeholder="e.g. 9876543210"
            value={formData.phone || ''}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Child's Age</label>
          <select 
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none transition-all"
            value={formData.childAge || ''}
            onChange={(e) => setFormData({...formData, childAge: e.target.value})}
          >
            <option value="">Select Age</option>
            {[...Array(15)].map((_, i) => (
              <option key={i} value={i + 4}>{i + 4} years</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Subject Interest</label>
        <select 
          required
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none transition-all"
          value={formData.interest || Subject.VEDIC_MATHS}
          onChange={(e) => setFormData({...formData, interest: e.target.value as Subject})}
        >
          {Object.values(Subject).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-bold py-4 rounded-xl shadow-xl shadow-amber-200 transition-all transform hover:-translate-y-1 disabled:hover:translate-y-0"
      >
        {loading ? 'Processing...' : 'Request Free Session'}
      </button>

      <br></br>
    </form>
  );
};