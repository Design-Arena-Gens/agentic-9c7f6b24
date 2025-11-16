"use client";

import Image from "next/image";

const timeline = [
  {
    title: "हस्तिनापुर आगमन",
    text: "राजसूय यज्ञ के बाद श्रीकृष्ण पांडवों से मिलने हस्तिनापुर पहुँचे। दरबार में धृतराष्ट्र, दुर्योधन और कौरव उनका भव्य स्वागत करना चाहते थे।"
  },
  {
    title: "राजसी निमंत्रणों का त्याग",
    text: "दुर्योधन ने दिव्य भोज का निमंत्रण दिया, किन्तु कृष्ण ने कहा—'मुझे केवल प्रेम चाहिए, राजसी ऐश्वर्य नहीं।' उन्होंने विदुर के स्नेह को चुना।"
  },
  {
    title: "विदुर गृह का सत्कार",
    text: "विदुर और उनकी पत्नी विदुराणी ने सरल भोजन—केले, साग, और श्रम से पकाई रोटी—से उनका स्वागत किया। भक्ति और प्रेम के रस से वह भोजन अमृत समान हुआ।"
  }
];

const reasons = [
  {
    heading: "निष्काम भक्ति का आकर्षण",
    detail:
      "विदुर श्रीकृष्ण के प्रति निष्काम, निरपेक्ष भक्ति रखते थे। उनका प्रेम केवल कृष्ण के दर्शन की चाहत था, किसी प्रकार का स्वार्थ या लाभ की अपेक्षा नहीं थी।"
  },
  {
    heading: "धर्म की स्थापना",
    detail:
      "विदुर ने महाभारत भर में धर्म के पक्ष को अपनाया। कृष्ण के लिए यह संदेश था कि धर्म और सत्य के साथ खड़े होने वाले के घर स्वयं भगवान आते हैं।"
  },
  {
    heading: "राज्य की असत्यता का निषेध",
    detail:
      "दुर्योधन का राजभवन बाहरी चमक दिखाता था, परंतु भीतर छल था। कृष्ण ने विदुर के घर भोजन करके दिखाया कि सत्य और प्रेम वाली साधारण कुटिया भी राजभवन से श्रेष्ठ है।"
  }
];

const quotes = [
  {
    text: "जहां भक्ति और प्रेम हैं, वही मेरा वास्तविक निवास है।",
    source: "— श्रीकृष्ण"
  },
  {
    text: "विदुर का घर स्वल्प भोजन से भरा था, परंतु वहां स्नेह का अतुल धन था।",
    source: "— महाभारत कथा परंपरा"
  }
];

export default function HomePage() {
  return (
    <div className="sunrise">
      <section className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-5xl flex-col gap-12 px-6 py-16">
        <div className="glass px-8 py-12 md:px-16 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:gap-16">
            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-[0.4em] text-amber-400">
                हस्तिनापुर · महाभारत
              </span>
              <h1 className="font-display text-4xl leading-snug text-amber-50 md:text-5xl">
                श्रीकृष्ण ने केवल विदुर के घर ही भोजन क्यों किया?
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                कथा बताती है कि जब श्रीकृष्ण हस्तिनापुर आए तो उन्होंने
                दुर्योधन का राजसी निमंत्रण अस्वीकार किया और धर्मनिष्ठ विदुर के
                साधारण घर में प्रेमपूर्वक भोजन किया। यह निर्णय केवल
                संवेदनशीलता का उदाहरण नहीं था बल्कि भक्ति, धर्म और निष्काम भाव
                की सर्वोच्चता का सन्देश था।
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {quotes.map((quote) => (
                  <figure
                    key={quote.text}
                    className="rounded-2xl border border-amber-200/10 bg-amber-50/5 p-4 text-sm text-slate-200 shadow-lg shadow-amber-500/5 backdrop-blur"
                  >
                    <blockquote className="leading-relaxed text-amber-100">
                      “{quote.text}”
                    </blockquote>
                    <figcaption className="pt-2 text-xs uppercase tracking-wide text-amber-400/80">
                      {quote.source}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="relative hidden min-h-[280px] md:block">
              <Image
                src="https://images.unsplash.com/photo-1593697972812-d0c9d0fbf43d?auto=format&fit=crop&w=900&q=80"
                alt="श्रीकृष्ण और भक्त विदुर"
                fill
                className="rounded-3xl object-cover brightness-[0.8]"
                priority
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-slate-950/80" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="glass flex flex-col gap-4 px-6 py-8 text-slate-200"
            >
              <h3 className="font-display text-xl text-amber-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <section className="glass px-6 py-10 md:px-10 md:py-12">
          <h2 className="font-display text-3xl text-amber-100">
            निर्णय के पीछे के आध्यात्मिक कारण
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.heading}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6"
              >
                <h3 className="text-lg font-semibold text-amber-300">
                  {reason.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {reason.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
