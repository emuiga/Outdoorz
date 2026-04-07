"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "254768519115";

const features = [
  {
    iconSrc: "/icons/path.webp",
    title: "Any trail in Kenya",
    desc: "Choose from our 28+ routes or let us pick one based on your group's fitness and goals.",
  },
  {
    iconSrc: "/icons/diversity.webp",
    title: "Groups of 4 – 50+",
    desc: "Family outings, corporate team-builds, school trips, birthday adventures — we scale to you.",
  },
  {
    iconSrc: "/icons/calendar.webp",
    title: "Your schedule",
    desc: "Pick your own date and start time — weekday, weekend, dawn summit or sunset finish.",
  },
  {
    iconSrc: "/icons/people.webp",
    title: "Fully guided & insured",
    desc: "Certified guides, first-aid kits, and comprehensive trail insurance come standard.",
  },
];

const activityOptions = ["Hiking", "Walking", "Cycling", "Camping", "Multiple activities"];

interface FormState {
  name: string;
  phone: string;
  groupSize: string;
  activity: string;
  date: string;
  notes: string;
}

const empty: FormState = { name: "", phone: "", groupSize: "", activity: "", date: "", notes: "" };

export default function PrivateHikesClient() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!form.phone.match(/^(\+?254|0)(7|1)\d{8}$/))
      errs.phone = "Enter a valid Kenyan phone number";
    if (!form.groupSize) errs.groupSize = "Tell us your group size";
    if (!form.activity) errs.activity = "Select an activity";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "Hi NNTS! 👋 I'd like to organise a private hike.\n",
      `Organiser: ${form.name}`,
      `Phone: ${form.phone}`,
      `Group size: ${form.groupSize} people`,
      `Activity: ${form.activity}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.notes ? `\nNotes: ${form.notes}` : null,
      "\nPlease get in touch so we can start planning. Thanks!",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

        {/* Left — how it works */}
        <div>
          <h2 className="font-display font-700 text-dark text-3xl mb-2">How it works</h2>
          <p className="body-light text-dark/55 mb-10 text-lg leading-relaxed">
            Fill in the form, we respond on WhatsApp within 24 hours, and together we plan the
            perfect outing for your crew — trail, date, logistics, everything.
          </p>

          <div className="space-y-8">
            {features.map(({ iconSrc, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-forest/8 flex items-center justify-center">
                  <Image
                    src={iconSrc}
                    alt={title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-sans font-600 text-dark text-base mb-1">{title}</h3>
                  <p className="body-light text-dark/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing callout */}
          <div className="mt-12 p-7 rounded-2xl bg-forest text-mist">
            <p className="eyebrow text-malachite/70 mb-2">Pricing</p>
            <p className="font-display font-700 text-2xl mb-3">Custom quote per group</p>
            <p className="body-light text-mist/60 text-sm leading-relaxed">
              Cost depends on trail, group size, guide ratio, and add-ons like meals, transport or
              camping. We send a detailed quote after the initial conversation.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <div className="bg-cream border border-mist rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-700 text-dark text-2xl mb-1">Tell us about your group</h2>
            <p className="body-light text-dark/45 text-sm mb-8">
              We reply on WhatsApp within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Wanjiku"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                      errors.name ? "border-ember" : "border-mist focus:border-moss"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-ember mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                    WhatsApp number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0712 345 678"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                      errors.phone ? "border-ember" : "border-mist focus:border-moss"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-ember mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                    Group size
                  </label>
                  <input
                    type="number"
                    min={2}
                    value={form.groupSize}
                    onChange={(e) => setForm({ ...form, groupSize: e.target.value })}
                    placeholder="e.g. 15"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                      errors.groupSize ? "border-ember" : "border-mist focus:border-moss"
                    }`}
                  />
                  {errors.groupSize && (
                    <p className="text-xs text-ember mt-1">{errors.groupSize}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                    Preferred date <span className="text-dark/25">(optional)</span>
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-mist text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 focus:border-moss transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                  Activity type
                </label>
                <div className="relative">
                  <select
                    value={form.activity}
                    onChange={(e) => setForm({ ...form, activity: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 appearance-none transition ${
                      errors.activity ? "border-ember" : "border-mist focus:border-moss"
                    }`}
                  >
                    <option value="">Select an activity…</option>
                    {activityOptions.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-dark/35 pointer-events-none"
                  />
                </div>
                {errors.activity && <p className="text-xs text-ember mt-1">{errors.activity}</p>}
              </div>

              <div>
                <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                  Special requirements <span className="text-dark/25">(optional)</span>
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Dietary needs, accessibility, difficulty preference, team-building focus…"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-mist text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 focus:border-moss transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white font-sans font-600 py-4 rounded-full transition-all hover:-translate-y-px text-base"
              >
                <MessageCircle size={20} />
                Send Request via WhatsApp
              </button>
              <p className="text-center text-xs font-sans text-dark/30">
                Opens WhatsApp with your enquiry pre-filled. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
