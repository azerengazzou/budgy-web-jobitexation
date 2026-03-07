import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../i18n/translations';
import SectionBackground from '../components/SectionBackground';

export default function Blog() {
  const { t, language } = useLanguage();
  const posts = blogPosts[language];

  const floatingIcons = [
    { Icon: Calendar, position: 'top-[15%] left-[8%]', size: 'w-24 h-24' },
    { Icon: Clock, position: 'bottom-[20%] right-[12%]', size: 'w-28 h-28' },
  ];

  return (
    <section id="blog" className="relative py-20 px-4 overflow-hidden">
      <SectionBackground icons={floatingIcons} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(language)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} {t.blog.minRead}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t.blog.readMore}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
