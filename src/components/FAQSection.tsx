import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShoppingCart } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What Exactly Is Included In The AI Viral Videos Bundle?",
      answer:
        "You’ll get access to a massive collection of AI-generated viral videos across multiple trending categories, all ready-to-post in HD quality.",
    },
    {
      question: "Do I Need Editing Skills To Use These Reels?",
      answer:
        "No, all reels are ready to post. Simply download and upload directly to your social media platforms.",
    },
    {
      question: "On Which Platforms Can I Post These Reels?",
      answer:
        "You can post on Instagram, TikTok, YouTube Shorts, Facebook Reels, Pinterest, Snapchat, and more.",
    },
    {
      question: "Can I Really Make Money With These Reels?",
      answer:
        "Yes! You can monetize through YouTube, TikTok, brand deals, shoutouts, and affiliate marketing.",
    },
    {
      question: "Is This A One-Time Payment Or Subscription?",
      answer: "It’s a one-time payment with lifetime access.",
    },
    {
      question: "Will I Get Future Updates?",
      answer:
        "Yes, you’ll receive free future updates if we add new reels.",
    },
    {
      question: "How Do I Receive The Bundle After Purchase?",
      answer:
        "You’ll get instant download access via email after payment.",
    },
    {
      question: "Is There Any Guarantee?",
      answer:
        "Yes, we offer a 100% Satisfaction Guarantee – risk-free purchase.",
    },
    {
      question: "What If I Don't Receive My Product?",
      answer:
        "We have never faced this issue till now, just send us an email at theviralaivideosteam@gmail.com with your order details and we will send you a new one",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="text-left text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* ✅ FIXED COMPACT BUTTON */}
        <div className="text-center mt-8">
          <a
            href="https://superprofile.bio/vp/ultimate-viral-50000videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2
            px-5 py-2 text-sm font-semibold rounded-lg
            bg-gradient-to-r from-purple-600 to-pink-600
            text-white hover:opacity-90 mx-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy All ₹999{" "}
            <span className="line-through text-xs opacity-70 ml-1">
              ₹99999
            </span>
          </a>

          <p className="text-sm text-muted-foreground mt-4">
            Register before{" "}
            <span className="text-primary underline">28 FEB</span>{" "}
            to unlock bonuses worth{" "}
            <span className="text-accent">₹50,000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
