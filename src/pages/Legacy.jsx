import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const items = [
  { href: '/autostralis/index.html', label: 'Full Site Home' },
  { href: '/autostralis/contact.html', label: 'Contact' },
  { href: '/autostralis/manufacturers.html', label: 'For Manufacturers' },
  { href: '/autostralis/investors.html', label: 'For Investors' },
  { href: '/autostralis/founder.html', label: 'Founder' },
  { href: '/autostralis/core-strengths.html', label: 'Core Strengths' },
  { href: '/autostralis/case-studies.html', label: 'Case Studies' },
  { href: '/autostralis/process.html', label: 'Process' },
  { href: '/autostralis/faqs.html', label: 'FAQs' },
  { href: '/autostralis/credibility.html', label: 'Credibility' },
];

export default function Legacy() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Legacy Pages</h1>
        <p className="text-slate-400 mb-8">
          Original Autostralis HTML pages shipped inside this build.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map(item => (
            <Card key={item.href} className="bg-slate-800 border-slate-700">
              <CardHeader><CardTitle>{item.label}</CardTitle></CardHeader>
              <CardContent>
                <a className="text-orange-400 hover:underline" href={item.href} target="_blank" rel="noreferrer">Open</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}