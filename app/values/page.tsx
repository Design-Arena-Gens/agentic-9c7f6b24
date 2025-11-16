"use client";

const lessons = [
  {
    title: "भावना > बाहरी वैभव",
    description:
      "श्रीकृष्ण ने दिखाया कि प्रेम और भक्ति से भरा छोटा-सा घर भी राजमहलों से अधिक महत्त्वपूर्ण है।"
  },
  {
    title: "धर्म की पहचान",
    description:
      "भगवान अपने भक्तों का साथ देते हैं क्योंकि वे धर्म के पथ पर अडिग रहते हैं। विदुर इसका जीवंत उदाहरण हैं।"
  },
  {
    title: "अहंकार का त्याग",
    description:
      "दुर्योधन का राजसी वैभव अहंकार से भरा था, जिसे कृष्ण ने अस्वीकार करके विनम्रता का संदेश दिया।"
  }
];

const modernRefs = [
  {
    question: "हम आज विदुर-भाव कैसे अपनाएँ?",
    answer:
      "स्वार्थरहित सेवा, सत्यानुकूल जीवनशैली और ईश्वर पर अटूट विश्वास से हम विदुर की भक्ति को जीवन में उतार सकते हैं।"
  },
  {
    question: "अतिथि सत्कार की सीख क्या है?",
    answer:
      "अतिथि से साधारण भोजन ही क्यों न हो, अगर मन श्रद्धा से भरा है तो वह भी दिव्य अनुभव बन जाता है।"
  },
  {
    question: "आध्यात्मिक दृष्टिकोण से क्या महत्व?",
    answer:
      "यह घटना हमें याद दिलाती है कि भगवान का आगमन बाहरी संपन्नता से नहीं, बल्कि अंतर की शुद्धता से होता है।"
  }
];

export default function ValuesPage() {
  return (
    <div className="sunrise">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="glass px-8 py-12">
          <h1 className="font-display text-3xl text-amber-100 md:text-4xl">
            कथा से मिलने वाली जीवन-शिक्षाएँ
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            विदुर के घर भोजन करना केवल एक ऐतिहासिक प्रसंग नहीं, बल्कि आध्यात्मिक
            और नैतिक दर्शन का प्रतीक है। इस घटना से वर्तमान जीवन में अपनाने लायक
            कई मूल्यों की प्रेरणा मिलती है।
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {lessons.map((lesson) => (
            <article
              key={lesson.title}
              className="glass flex h-full flex-col gap-3 px-6 py-8 text-slate-200"
            >
              <h2 className="text-lg font-semibold text-amber-300">
                {lesson.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                {lesson.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-14 glass px-8 py-12">
          <h2 className="font-display text-2xl text-amber-200 md:text-3xl">
            आधुनिक जीवन में अनुप्रयोग
          </h2>
          <div className="mt-8 space-y-6">
            {modernRefs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-amber-100/10 bg-slate-900/40 p-6"
              >
                <h3 className="text-base font-semibold uppercase tracking-widest text-amber-300">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
