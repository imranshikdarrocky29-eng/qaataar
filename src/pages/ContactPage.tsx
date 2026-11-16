import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import {
  COMPANY_INFO,
  PLUMBING_SERVICES,
  SERVICE_AREAS,
  getWhatsAppUrl,
} from '../data/plumbingData';

interface ContactPageProps {
  preselectedService?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  area: string;
  service: string;
  propertyType: 'Residential' | 'Commercial';
  urgency: 'Urgent Today' | 'Scheduled Visit' | 'Quotation Only';
  details: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  details?: string;
}

export function ContactPage({ preselectedService }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    area: SERVICE_AREAS[0].name,
    service: preselectedService || PLUMBING_SERVICES[0].title,
    propertyType: 'Residential',
    urgency: 'Urgent Today',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone || !/^\+?\d{7,15}$/.test(cleanPhone)) {
      nextErrors.phone =
        'Please enter a valid Qatar or international phone number (e.g. +974 3103 6428).';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address or leave blank.';
    }
    if (!form.details.trim() || form.details.trim().length < 10) {
      nextErrors.details =
        'Please briefly describe the plumbing issue or installation needed.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const refCode = `FHQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const whatsappSummary = `Hello Fix Hub Qatar,
Name: ${form.name || 'Customer'}
Phone: ${form.phone || 'N/A'}
Area: ${form.area}
Property: ${form.propertyType}
Service: ${form.service}
Priority: ${form.urgency}
Details: ${form.details || 'Requesting plumbing service / quote.'}`;

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#F5B700]">Contact Fix Hub Qatar</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Request a Plumber or Free Quotation in Qatar
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Call our 24/7 dispatch line for immediate assistance, message us on WhatsApp with photos of your plumbing issue, or submit your service request below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-xl font-bold text-[#041E42]">
                  Direct Call &amp; WhatsApp Dispatch
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  For burst pipes, active leaks, or blocked drains requiring urgent dispatch across Doha, calling or messaging on WhatsApp is fastest.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#041E42]" aria-hidden="true" />
                    <span className="tabular-nums">Call Now · {COMPANY_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span className="tabular-nums">WhatsApp · {COMPANY_INFO.whatsappDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-7 space-y-4 text-sm text-slate-600">
                <h2 className="font-display text-lg font-bold text-[#041E42]">
                  Doha Office &amp; Hours
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-700 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-[#041E42]">Operations Base</div>
                    <div>{COMPANY_INFO.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-700 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-[#041E42]">Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="hover:text-[#041E42] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-700 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-[#041E42]">Service Hours</div>
                    <div>{COMPANY_INFO.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Booking Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-xl p-7 sm:p-9">
                {submittedRef ? (
                  <div className="py-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold text-[#041E42]">
                      Service Request Received
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#041E42]">{form.name}</span>. Your request reference is{' '}
                      <span className="font-mono font-semibold text-amber-700 tabular-nums">
                        {submittedRef}
                      </span>
                      . Our Doha coordinator will contact you on{' '}
                      <span className="font-mono tabular-nums text-[#041E42]">{form.phone}</span>{' '}
                      shortly to confirm technician arrival.
                    </p>

                    <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-1">
                      <div>
                        <span className="font-medium">Service:</span> {form.service}
                      </div>
                      <div>
                        <span className="font-medium">Area:</span> {form.area} ({form.propertyType})
                      </div>
                      <div>
                        <span className="font-medium">Priority:</span> {form.urgency}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={getWhatsAppUrl(whatsappSummary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Send Details via WhatsApp Now</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmittedRef(null);
                          setForm((prev) => ({ ...prev, details: '' }));
                        }}
                        className="px-5 py-3 text-sm font-medium text-slate-700 border border-slate-300 hover:border-slate-400 rounded-lg cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#041E42]">
                        Book a Plumbing Visit or Quote
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        Complete the form below or send your inquiry directly via WhatsApp.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="e.g. Tariq Al-Mansoori"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#041E42] focus:outline-none focus:ring-2 focus:ring-[#041E42] ${
                            errors.name ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Mobile / WhatsApp Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="+974 3103 6428"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#041E42] font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-[#041E42] ${
                            errors.phone ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="name@example.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#041E42] focus:outline-none focus:ring-2 focus:ring-[#041E42] ${
                            errors.email ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-area"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          District / Area in Qatar
                        </label>
                        <select
                          id="contact-area"
                          value={form.area}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, area: e.target.value }))
                          }
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#041E42] focus:outline-none focus:ring-2 focus:ring-[#041E42]"
                        >
                          {SERVICE_AREAS.map((area) => (
                            <option key={area.name} value={area.name}>
                              {area.name}
                            </option>
                          ))}
                          <option value="Other Qatar Location">Other Qatar Location</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Plumbing Service Needed
                        </label>
                        <select
                          id="contact-service"
                          value={form.service}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, service: e.target.value }))
                          }
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#041E42] focus:outline-none focus:ring-2 focus:ring-[#041E42]"
                        >
                          {PLUMBING_SERVICES.map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <span className="block text-sm font-medium text-slate-800 mb-1.5">
                          Property Type
                        </span>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                          {(['Residential', 'Commercial'] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({ ...prev, propertyType: type }))
                              }
                              className={`py-2 text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer ${
                                form.propertyType === type
                                  ? 'bg-[#041E42] text-white shadow-xs'
                                  : 'text-slate-600 hover:text-[#041E42]'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-slate-800 mb-1.5">
                        Urgency
                      </span>
                      <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                        {(
                          ['Urgent Today', 'Scheduled Visit', 'Quotation Only'] as const
                        ).map((urgency) => (
                          <button
                            key={urgency}
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({ ...prev, urgency }))
                            }
                            className={`py-2 px-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                              form.urgency === urgency
                                ? 'bg-[#041E42] text-white shadow-xs'
                                : 'text-slate-600 hover:text-[#041E42]'
                            }`}
                          >
                            {urgency}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-details"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Describe the Issue or Project <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="contact-details"
                        rows={4}
                        value={form.details}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, details: e.target.value }))
                        }
                        placeholder="e.g. Leaking concealed toilet cistern in guest bathroom, or requesting water tank cleaning for a 5-bedroom villa in Al Waab."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#041E42] focus:outline-none focus:ring-2 focus:ring-[#041E42] ${
                          errors.details ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.details && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.details}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="submit"
                        className="px-6 py-3.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors cursor-pointer"
                      >
                        Submit Service Request
                      </button>

                      <a
                        href={getWhatsAppUrl(whatsappSummary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Send via WhatsApp Instead</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
