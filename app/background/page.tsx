"use client";

const contextPoints = [
  {
    title: "विदुर की पहचान",
    detail:
      "विदुर व्यास के पुत्र और श्रीव्यास द्वारा उत्पन्न महाभारत कथा के एक प्रमुख पात्र हैं। वे हस्तिनापुर के राजदरबार में महामंत्री और धृतराष्ट्र के सलाहकार थे।"
  },
  {
    title: "धर्मनिष्ठ विचारक",
    detail:
      "विदुर नीति के प्रसिद्ध लेखक, विदुर ने हर परिस्थिति में धर्म और सत्य का पक्ष लिया। उन्होंने कौरवों के अन्याय से पांडवों को बचाने का पूरा प्रयास किया।"
  },
  {
    title: "कृष्ण से आत्मीय संबंध",
    detail:
      "विदुर ने कृष्ण को केवल भगवान नहीं, बल्कि आत्मीय मित्र माना। वे जानते थे कि कृष्ण का प्राकट्य धर्म की रक्षा के लिए हुआ है।"
  }
];

const conflict = [
  {
    issue: "कौरवों का अपमान",
    detail:
      "कौरव विदुर को साधारण जन्म का मानते थे और अक्सर अपमानित करते थे, पर विदुर ने कभी भी आत्मसम्मान से समझौता नहीं किया।"
  },
  {
    issue: "दुर्योधन की राजनीतिक चालें",
    detail:
      "दुर्योधन कृष्ण को मनाकर महाभारत की दिशा अपने पक्ष में करना चाहता था, जबकि कृष्ण पक्षपात रहित रहकर धर्म का मार्ग प्रशस्त करना चाहते थे।"
  },
  {
    issue: "धृतराष्ट्र की दुविधा",
    detail:
      "धृतराष्ट्र कृष्ण से अनुरोध करते हैं कि वे राजमहल में ठहरें, पर कृष्ण उन्हें बताते हैं कि स्नेह का सच्चा मंदिर विदुर का घर है।"
  }
];

export default function BackgroundPage() {
  return (
    <div className="sunrise">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="glass px-8 py-12">
          <h1 className="font-display text-3xl text-amber-100 md:text-4xl">
            प्रसंग की पृष्ठभूमि
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            महाभारत के समय में हस्तिनापुर युद्ध की विभीषिका से घिरा था। इस
            वातावरण में श्रीकृष्ण का आगमन केवल राजनैतिक नहीं बल्कि आध्यात्मिक
            घटना थी। कृष्ण के हर निर्णय का उद्देश्य धर्म की प्रतिष्ठा कराना था,
            और विदुर का घर इस सत्य का प्रतीक बन गया।
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {contextPoints.map((point) => (
            <article
              key={point.title}
              className="glass h-full px-6 py-8 text-slate-200"
            >
              <h2 className="text-lg font-semibold text-amber-300">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {point.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-14 glass px-8 py-12">
          <h2 className="font-display text-2xl text-amber-200 md:text-3xl">
            कौरव दरबार और कृष्ण का निर्णय
          </h2>
          <p className="mt-4 text-base leading-loose text-slate-300">
            दुर्योधन ने कृष्ण को अपने राजमहल में ठहराने का प्रस्ताव रखा, परंतु
            कृष्ण ने साफ कहा कि वे प्रेम और सत्य के अधिष्ठाता हैं। जिस घर में
            सच्ची श्रद्धा है वहीं उनका निवास है। यह निर्णय कौरवों की अहंकारपूर्ण
            मानसिकता को चुनौती देता है और विदुर के आदर्श चरित्र को उजागर करता
            है।
          </p>
          <ul className="mt-6 grid gap-4 text-sm text-slate-400 md:grid-cols-2">
            {conflict.map((item) => (
              <li
                key={item.issue}
                className="rounded-xl border border-amber-200/10 bg-slate-900/40 p-4"
              >
                <h3 className="text-amber-300">{item.issue}</h3>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
