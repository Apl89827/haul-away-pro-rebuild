
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useMeta } from '@/hooks/useMeta';

const BlogPost = () => {
  const { slug } = useParams();

  // For now, we'll show the estate cleanout post content
  // In a real implementation, this would fetch based on the slug
  const post = {
    title: "Navigating an Estate Cleanout in Cincinnati: A Compassionate Guide for Families",
    excerpt: "Losing a loved one is profound and deeply personal. In the midst of grief, managing their estate can feel overwhelming. This compassionate guide offers support and a clear path forward for Cincinnati families.",
    author: "Haul Away Pro Team",
    date: "December 16, 2024",
    category: "Estate Services",
    image: "/lovable-uploads/50fa9c69-620f-460b-97e8-abcd9a3853b5.png",
    seoTitle: "Estate Cleanout Cincinnati: Compassionate Guide for Families | Haul Away Pro",
    seoDescription: "Professional estate cleanout services in Cincinnati. Compassionate support for families during difficult times. Free consultation and respectful handling of belongings."
  };

  useMeta({
    title: post.seoTitle,
    description: post.seoDescription,
  });

  return (
    <>
      <Header />
      <main>
        <article className="section bg-white">
          <div className="container-custom max-w-4xl">
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              
              <div className="text-sm text-brand-blue font-medium mb-4">
                {post.category}
              </div>
              
              <h1 className="heading-lg mb-6 text-brand-darkBlue">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Losing a loved one is a profound and deeply personal experience. In the midst of grief, managing their estate can feel overwhelming. Sorting through a lifetime of possessions is not just a physical task; it's an emotional journey through memories and milestones.
              </p>
              
              <p className="mb-6">
                At Haul Away Pro, we have assisted many Cincinnati families during this challenging time. We understand that you're not just clearing a house; you're going through a sensitive transition. This guide offers support and a clear path forward, allowing you to focus on what truly matters: honoring your loved one and supporting your family.
              </p>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">Acknowledging the Emotional Journey</h2>
              
              <p className="mb-6">
                Before packing a single box, it's essential to recognize the emotional reality of an estate cleanout. You will handle items that spark vivid memories. It's normal to feel a mix of sadness, guilt about letting items go, and stress from the number of decisions to make.
              </p>
              
              <p className="mb-6">
                Be kind to yourself and your family. There is no "right" way to feel. Take breaks, share stories, and process emotions as they arise. This journey is a marathon, not a sprint.
              </p>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">The First Practical Steps: Where to Begin</h2>
              
              <p className="mb-4">
                Once you're ready to start, a structured approach can make the task more manageable.
              </p>
              
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li><strong>Confirm Legal Authority:</strong> Before you start, know who has the legal right to manage the belongings. In Ohio, this is usually the Executor named in the will or an administrator appointed by the Hamilton County Probate Court. If you're unsure, consulting an estate attorney is a good first step.</li>
                <li><strong>Locate Vital Documents:</strong> As you begin sorting, keep a secure file for important paperwork. Look for wills, trust documents, insurance policies, property deeds, financial statements, and personal identification like birth certificates.</li>
                <li><strong>Assemble Your Support Team:</strong> You don't have to do this alone. Rely on family members and trusted friends. Don't hesitate to bring in professionals when necessary, like appraisers for valuable items and an estate cleanout service.</li>
              </ol>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">A Gentle Strategy for Sorting Memories</h2>
              
              <p className="mb-4">
                Tackling an entire home at once can be overwhelming. Instead, use a room-by-room approach. Start with less emotionally charged spaces like a guest room or basement before moving to personal areas like a bedroom or office.
              </p>
              
              <p className="mb-4">
                As you sort, use a simple five-category system to stay organized:
              </p>
              
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Keep:</strong> Items for family members that hold deep sentimental value or practical use. Consider creating "memory boxes" for each person.</li>
                <li><strong>Sell:</strong> Valuable items like antiques, collectibles, or jewelry that could help offset expenses. Consider getting a professional appraisal for these.</li>
                <li><strong>Donate:</strong> Items in good, usable condition that can benefit others in the community.</li>
                <li><strong>Recycle:</strong> Materials like paper, metal, and certain plastics that can be processed responsibly.</li>
                <li><strong>Dispose:</strong> Anything that is broken, expired, or unsanitary.</li>
              </ul>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">Giving Items a New Life: Donation and Disposal in Cincinnati</h2>
              
              <p className="mb-4">
                Letting go of belongings can feel easier when you know they are being handled responsibly or will help someone else.
              </p>
              
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Donation Options:</strong> Cincinnati has great organizations ready to give your items a second life. <strong>Goodwill</strong>, the <strong>Salvation Army</strong>, and <strong>Habitat for Humanity ReStore</strong> are excellent choices for furniture and household goods. For specific items, consider the <strong>Furniture Bank of Greater Cincinnati</strong> or local shelters.</li>
                <li><strong>Special Disposal:</strong> Some items can't go in the regular trash. This includes hazardous materials like paint and chemicals, electronics, and large appliances. Refrigerators and air conditioners, for example, contain refrigerants that need certified removal by law. <strong>Hamilton County</strong> offers resources and events for the safe disposal of these materials.</li>
              </ul>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">When the Task Feels Too Big: The Value of Professional Help</h2>
              
              <p className="mb-6">
                Sometimes, the scope of an estate cleanout is too much to manage alone. This can be especially true if you live out of town, face a tight deadline for a property sale, or find the emotional toll too great.
              </p>
              
              <p className="mb-6">
                This is where a professional estate cleanout service becomes a vital part of your support team. A professional crew offers more than just physical help; they bring a structured, efficient, and respectful process. They understand the complexities of sorting, donation logistics, and the legal requirements for disposing of items, from heavy furniture to hazardous waste.
              </p>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">Our Compassionate Approach at Haul Away Pro</h2>
              
              <p className="mb-4">
                At Haul Away Pro, we see our role as taking a burden off your shoulders. Our experienced team approaches every estate cleanout in Cincinnati with the dignity and sensitivity it deserves.
              </p>
              
              <p className="mb-4">We offer:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Complete, Respectful Service:</strong> We handle everything from sorting and bagging to heavy lifting and removal, treating your loved one's home and belongings with care.</li>
                <li><strong>Donation & Recycling Coordination:</strong> We have strong relationships with local Cincinnati charities and recycling centers to ensure as many items as possible are kept out of the landfill.</li>
                <li><strong>Stress-Free Process:</strong> We take care of all logistics for removal and disposal, so you can focus on being with your family.</li>
                <li><strong>Transparent and Clear Communication:</strong> We keep you informed every step of the way, ensuring our process fits your family's needs and timeline.</li>
              </ul>
              
              <h2 className="heading-md mb-4 text-brand-darkBlue">Let Us Help You Through This Transition</h2>
              
              <p className="mb-6">
                Navigating an estate cleanout is a profound act of love and remembrance. It's a process of honoring a life while making space for the future. You don't have to face the physical and logistical challenges alone.
              </p>
              
              <p className="mb-4">
                <strong>Feeling overwhelmed by an estate cleanout in the Cincinnati area?</strong> Contact Haul Away Pro for a no-obligation consultation. Let our compassionate team handle the heavy lifting, so you can focus on what matters most.
              </p>
              
              <p className="text-lg font-semibold text-brand-blue">
                <strong>Call us today at (513) 712-8077. We're here to help.</strong>
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
