"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  const handlePurchase = (price: string) => {
    window.location.href = "/payment";
  };

  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="medium"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Dashboard", id: "/payment" },
        { name: "Marketplace", id: "/#products" },
        { name: "Pricing", id: "/#pricing" },
        { name: "Contact", id: "/#contact" },
      ]}
      brandName="APIMarket"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "plain" }}
      title="Build Smarter with Professional API Tools"
      description="Unlock growth with our enterprise-grade social media APIs. Analytics, automation, and scheduling tools designed for developers and marketing teams."
      tag="Trusted API Marketplace"
      buttons={[
        { text: "View Market", href: "/#products" },
        { text: "Contact Support", href: "/#contact" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/company-analyst-studying-business-activity-progress-achieving-strategic-goals_482257-91239.jpg", imageAlt: "api marketplace dashboard ui" },
        { imageSrc: "http://img.b2bpic.net/free-photo/3d-astronaut-falling-down-flat-circle-line-art-design-illustration_460848-7983.jpg", imageAlt: "api marketplace dashboard ui" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Loved by 2,000+ developers"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About APIMarket"
      title="A professional-grade marketplace for powerful social media APIs, enabling automation, intelligence, and scalable growth."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Analytics Engine", price: "$50", imageSrc: "http://img.b2bpic.net/free-photo/woman-property-engineer-searching-layout-details-laptop-office_482257-130146.jpg", onProductClick: () => handlePurchase("$50") },
        { id: "p2", name: "Automation Bot", price: "$100", imageSrc: "http://img.b2bpic.net/free-photo/empty-medical-cabinet-private-clinic-with-laptop-diagnostics_482257-122738.jpg", onProductClick: () => handlePurchase("$100") },
        { id: "p3", name: "Security Vault", price: "$200", imageSrc: "http://img.b2bpic.net/free-photo/data-center-computer-systems-controlling-network-resources-closeup_482257-126065.jpg", onProductClick: () => handlePurchase("$200") },
        { id: "p4", name: "Sentiment AI", price: "$300", imageSrc: "http://img.b2bpic.net/free-photo/ai-powered-device-concept_23-2151924168.jpg", onProductClick: () => handlePurchase("$300") },
        { id: "p5", name: "Schedule Planner", price: "$1,000", imageSrc: "http://img.b2bpic.net/free-photo/web-icon-set-drawn-chalkboard-with-white-chalk_23-2147841254.jpg", onProductClick: () => handlePurchase("$1,000") },
        { id: "p6", name: "API Console", price: "$1,000", imageSrc: "http://img.b2bpic.net/free-photo/multicultural-team-women-leaders-hold-online-conference-call_482257-123708.jpg", onProductClick: () => handlePurchase("$1,000") },
      ]}
      title="Featured API Tools"
      description="Click on any product to purchase instantly."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "tier1", badge: "Essential", price: "$50", subtitle: "Social API Entry", buttons: [{ text: "Buy Now", onClick: () => handlePurchase("$50") }], features: ["Weibo", "VK", "LINE", "KakaoTalk", "ShareChat"] },
        { id: "tier2", badge: "Professional", price: "$150", subtitle: "Community Tools", buttons: [{ text: "Buy Now", onClick: () => handlePurchase("$150") }], features: ["Reddit", "Quora", "Discord", "Threads", "Google+"] },
        { id: "tier3", badge: "Advanced", price: "$250", subtitle: "Messaging & Media", buttons: [{ text: "Buy Now", onClick: () => handlePurchase("$250") }], features: ["WhatsApp", "Facebook Messenger", "Telegram", "WeChat", "Signal", "Pinterest"] },
        { id: "tier4", badge: "Enterprise", price: "$350", subtitle: "Total Coverage", buttons: [{ text: "Buy Now", onClick: () => handlePurchase("$350") }], features: ["Facebook", "Instagram", "X", "LinkedIn", "Snapchat", "Onlyfans"] },
      ]}
      title="API Pricing Tiers"
      description="Select the tier that best fits your platform requirements."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "10M+", title: "API Calls Processed", items: ["Robust infrastructure", "Sub-50ms latency"] },
        { id: "m2", value: "2.5K+", title: "Active Users", items: ["Developer community", "Growing ecosystem"] },
        { id: "m3", value: "99.9%", title: "Uptime Guarantee", items: ["Always-on reliability", "Automated scaling"] },
      ]}
      title="Our Platform Impact"
      description="Proven performance for thousands of API calls."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "@sarahm", testimonial: "The best API marketplace for social analytics. Incredible support.", imageSrc: "http://img.b2bpic.net/free-photo/inclusivity-workspace_52683-90479.jpg" },
        { id: "t2", name: "James Chen", handle: "@jchen", testimonial: "Solid documentation and fast response times on integration.", imageSrc: "http://img.b2bpic.net/free-photo/man-black-working-laptop-cafe_23-2147962625.jpg" },
        { id: "t3", name: "Elena Rodriguez", handle: "@elena_r", testimonial: "Simplified my entire marketing workflow in just a few days.", imageSrc: "http://img.b2bpic.net/free-photo/happy-girl-is-working-laptop-girl-with-laptop-emotion-concept_169016-66562.jpg" },
        { id: "t4", name: "David Park", handle: "@dpark", testimonial: "The lifetime access deal was a complete game changer for us.", imageSrc: "http://img.b2bpic.net/free-photo/law-enforcement-professional-studying-csi-report-detective-office_482257-79438.jpg" },
        { id: "t5", name: "Marcus Thorne", handle: "@mthorne", testimonial: "Reliable performance and constant feature updates.", imageSrc: "http://img.b2bpic.net/free-photo/man-portrait_1296-491.jpg" },
      ]}
      title="What Developers Say"
      description="Trusted by teams building modern social tools."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How can I pay?", content: "Visit the Payment Dashboard to view our supported crypto addresses (USDT, BTC, Solana)." },
        { id: "f2", title: "How do I get my API key?", content: "Keys are generated instantly in your user dashboard after payment confirmation." },
        { id: "f3", title: "Is there a support team?", content: "Yes, our support is available through email at wishingcoming6460@gmail.com and our in-dashboard chat." },
      ]}
      title="Common Questions"
      description="Everything you need to know about purchasing and usage."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in Touch"
      title="Ready to integrate?"
      description="Have questions about our APIs or need custom solutions? Reach out today."
      buttons={[{ text: "Contact Support", href: "mailto:wishingcoming6460@gmail.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="APIMarket"
      copyrightText="© 2025 APIMarket. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}