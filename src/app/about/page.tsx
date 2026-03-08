"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import { Heart, Palette, Star, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Collection", id: "/shop" },
    { name: "About", id: "/about" },
    { name: "Shop", id: "/shop" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Collection",      items: [
        { label: "Featured Pieces", href: "/shop" },
        { label: "Shop All", href: "/shop" },
        { label: "Limited Drops", href: "/shop" },
        { label: "Custom Orders", href: "/contact" },
      ],
    },
    {
      title: "Company",      items: [
        { label: "Our Story", href: "/about" },
        { label: "Craftsmanship", href: "/about" },
        { label: "Press", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Connect",      items: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Contact", href: "/contact" },
        { label: "Newsletter", href: "#" },
        { label: "Lookbook", href: "#" },
      ],
    },
    {
      title: "Resources",      items: [
        { label: "Care Guide", href: "#" },
        { label: "Shipping", href: "#" },
        { label: "Returns", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  const handleNavClick = (id: string) => {
    if (id === "/") {
      window.location.href = "/";
    } else if (id.startsWith("/")) {
      window.location.href = id;
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={{ text: "Explore", href: "collection", onClick: () => handleNavClick("/shop") }}
          brandName="ZARAVYA"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={Heart}
          title="Artisan Craftsmanship Meets High Fashion"
          description="ZARAVYA was born from a vision to elevate fashion into fine art. Each garment is meticulously hand-painted by master artisans, creating truly unique pieces that celebrate individuality and artistic expression. We believe luxury is about owning something that exists nowhere else in the world—a personal work of wearable art."
          metrics={[
            { value: "100%", title: "Hand-Painted by Master Artisans" },
            { value: "Limited", title: "Ultra-Exclusive Production Runs" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-woman-with-brush-painting_23-2148263488.jpg"
          imageAlt="Master artisan hand-painting luxury garment"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Redefining luxury through artisanal excellence and creative vision"
          metrics={[
            {
              id: "1",              value: "500+",              title: "Masterpieces Created",              description: "Hand-painted works of wearable art",              icon: Palette,
            },
            {
              id: "2",              value: "95%",              title: "Client Satisfaction",              description: "Collectors worldwide cherish their pieces",              icon: Star,
            },
            {
              id: "3",              value: "15+",              title: "Years Experience",              description: "Master artisans with unparalleled expertise",              icon: Award,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Loved by Collectors Worldwide"
          description="Hear from those who wear ZARAVYA's wearable art"
          tag="Client Stories"
          tagIcon={Sparkles}
          testimonials={[
            {
              id: "1",              name: "Isabella Romano",              handle: "@isabella_roma",              testimonial: "Each piece from ZARAVYA is a conversation starter. The hand-painted details are absolutely mesmerizing—I feel like I'm wearing a gallery.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-stylish-brunette-man-with-coat-shoulders-intently-looking-camera-outdoor_574295-1313.jpg",              imageAlt: "Isabella Romano"},
            {
              id: "2",              name: "Marcus Chen",              handle: "@luxe_collector",              testimonial: "Finally, luxury that goes beyond logos. The craftsmanship and artistry in every stitch remind me why I invested in ZARAVYA.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-shirt-shop_1303-19866.jpg",              imageAlt: "Marcus Chen"},
            {
              id: "3",              name: "Sophie Beaumont",              handle: "@sophie_style",              testimonial: "ZARAVYA pieces are investment-grade wearable art. The exclusivity and creativity are unmatched in the luxury fashion world.",              imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-grey-suit-outdoors_1303-29564.jpg",              imageAlt: "Sophie Beaumont"},
            {
              id: "4",              name: "James Sterling",              handle: "@art_collector_james",              testimonial: "Owning a ZARAVYA garment is like owning a miniature art installation. The hand-painted details are breathtaking.",              imageSrc: "http://img.b2bpic.net/free-photo/transgender-person-wearing-yellow-jacket-make-up_23-2148827068.jpg",              imageAlt: "James Sterling"},
            {
              id: "5",              name: "Amara Okonkwo",              handle: "@amara_luxe",              testimonial: "The level of attention to detail is extraordinary. Every brushstroke tells a story. I'm a ZARAVYA collector for life.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-purple-bathrobe-bedroom_1303-11275.jpg",              imageAlt: "Amara Okonkwo"},
            {
              id: "6",              name: "Victoria Ashford",              handle: "@vashford",              testimonial: "ZARAVYA has redefined what luxury means to me. It's not about the brand—it's about the art, the soul, and the uniqueness.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-as-greek-goddess_23-2150099230.jpg",              imageAlt: "Victoria Ashford"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={35}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="ZARAVYA"
          columns={footerColumns}
          copyrightText="© 2025 ZARAVYA | Wearable Art. Limited Pieces. Hyper Luxury."
        />
      </div>
    </ThemeProvider>
  );
}