
export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      book: 'Book Now'
    },
    hero: {
      title: 'Define Your Natural Beauty',
      subtitle: 'Premium medical and aesthetic treatments in the heart of Riyadh. Expert care tailored to your unique features.',
      cta: 'Our Services'
    },
    about: {
      title: 'About Define Clinics',
      description1: 'At Define Clinics, we combine medical precision with aesthetic artistry. Our mission is to provide a sanctuary where your beauty goals are achieved with the highest standards of safety and care.',
      description2: 'We utilize state-of-the-art international technology and a team of specialized practitioners to ensure results that are both effective and naturally stunning.',
      successRate: 'Success Rate',
      stats: [
        { label: 'Years of Excellence', value: '10+' },
        { label: 'Specialized Doctors', value: '15+' },
        { label: 'Happy Clients', value: '12k+' }
      ],
      definition: {
        word: 'DEFINE',
        phonetic: '[dih-fah-yn]',
        type: 'verb',
        quote: '"DEFINE Your Beauty Journey: Where Confidence Meets Perfection."',
        subquote: 'Where Attention to Detail Defines You.'
      }
    },
    services: {
      title: 'Specialized Treatments',
      subtitle: 'A comprehensive range of services for skin, hair, and body contouring.',
      items: [
        { title: 'Fillers & Botox', desc: 'Define your features and smooth fine lines with our expert injection treatments.' },
        { title: 'Laser Hair Removal', desc: 'Permanent smoothness using the advanced Deca laser technology.' },
        { title: 'Skin Rejuvenation', desc: 'Cold peeling and hydration treatments for a glowing, even complexion.' },
        { title: 'Hair Restoration', desc: 'PRP and Plasma therapy to stimulate healthy, natural hair growth.' }
      ]
    },
    contact: {
      title: 'Visit Us',
      address: 'Uthman Ibn Affan Rd, Al Falah, Riyadh 13314',
      phone: '9200 13818',
      socials: 'Follow @DefineClinics',
      locationLabel: 'Location',
      callLabel: 'Call Us'
    },
    footer: {
      slogan: 'Attention to detail.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن العيادة',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      book: 'احجز الآن'
    },
    hero: {
      title: 'حددي ملامح جمالك الطبيعي',
      subtitle: 'علاجات طبية وتجميلية متميزة في قلب الرياض. رعاية خبراء مصممة خصيصاً لملامحك الفريدة.',
      cta: 'خدماتنا'
    },
    about: {
      title: 'عن عيادات ديفاين',
      description1: 'في عيادات ديفاين، نجمع بين الدقة الطبية والفن الجمالي. مهمتنا هي توفير ملاذ حيث تتحقق أهداف جمالك بأعلى معايير السلامة والرعاية.',
      description2: 'نحن نستخدم أحدث التقنيات العالمية وفريقاً من الممارسين المتخصصين لضمان نتائج فعالة ومذهلة بشكل طبيعي.',
      successRate: 'نسبة النجاح',
      stats: [
        { label: 'سنوات من التميز', value: '10+' },
        { label: 'أطباء متخصصون', value: '15+' },
        { label: 'عملاء سعداء', value: '12k+' }
      ],
      definition: {
        word: 'ديفاين',
        phonetic: '[dih-fah-yn]',
        type: 'فعل',
        quote: '"ديفاين لجمالك: حيث تلتقي الثقة بالكمال."',
        subquote: 'حيث الاهتمام بالتفاصيل يحدد ملامحك.'
      }
    },
    services: {
      title: 'علاجات متخصصة',
      subtitle: 'مجموعة شاملة من الخدمات للعناية بالبشرة والشعر وتنسيق القوام.',
      items: [
        { title: 'الفيلر والبوتوكس', desc: 'حددي ملامحك ونعمي الخطوط الدقيقة من خلال علاجات الحقن الاحترافية لدينا.' },
        { title: 'إزالة الشعر بالليزر', desc: 'نعومة دائمة باستخدام تقنية ليزر ديكا الإيطالية المتقدمة.' },
        { title: 'نضارة البشرة', desc: 'علاجات التقشير البارد والترطيب للحصول على بشرة متوهجة وموحدة.' },
        { title: 'ترميم الشعر', desc: 'علاجات البلازما وPRP لتحفيز نمو الشعر الصحي والطبيعي.' }
      ]
    },
    contact: {
      title: 'تفضل بزيارتنا',
      address: 'طريق عثمان بن عفان، الفلاح، الرياض 13314',
      phone: '9200 13818',
      socials: 'تابعونا @DefineClinics',
      locationLabel: 'الموقع',
      callLabel: 'اتصل بنا'
    },
    footer: {
      slogan: 'الاهتمام بالتفاصيل'
    }
  }
};