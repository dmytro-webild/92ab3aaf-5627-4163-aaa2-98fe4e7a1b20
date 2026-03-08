"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Palette,
  Star,
  Award,
  Zap,
  Lock,
  TrendingUp,
  Globe,
  Flame,
  Mail,
} from "lucide-react";

export default function HomePage() {
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
          navItems={[
            { name: "Home", id: "/" },
            { name: "Collection", id: "/collection" },
            { name: "About", id: "#about" },
            { name: "Shop", id: "#shop" },
            { name: "Contact", id: "#contact" },
          ]}
          button={{ text: "Explore", href: "#collection" }}
          brandName="ZARAVYA"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ZARAVYA"
          description="Wearable Art. Limited Pieces. Hyper Luxury."
          buttons={[
            { text: "Explore Collection", href: "/collection" },
            { text: "View Latest", href: "#shop" },
          ]}
          slides={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/abstract-liquid-marble-orange-background-diy-experimental-art_53876-103616.jpg",
              imageAlt: "Hand-painted luxury garment detail",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/gold-chain-pomegranate_23-2149836417.jpg",
              imageAlt: "Artistic wearable piece luxury fashion showcase",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/fashion-photo-young-magnificent-woman-blue-dress_158595-352.jpg",
              imageAlt: "Limited edition hand-painted luxury dress",
            },
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          ariaLabel="ZARAVYA luxury fashion hero section"
        />
      </div>

      <div id="collection" data-section="collection">
        <ProductCardFour
          products={[
            {
              id: "1",
              name: "Aurora Silk Shirt",
              price: "$2,450",
              variant: "Hand-painted Sunset  1 of 3",
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-couple-posing-together_23-2148546987.jpg",
              imageAlt: "Aurora Silk Shirt - hand-painted sunset tones",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Cosmic Sleeve Dress",
              price: "$3,200",
              variant: "Starfield Design  1 of 2",
              imageSrc:
                "http://img.b2bpic.net/free-vector/abstract-background-watercolor-stars_23-2147651165.jpg",
              imageAlt: "Cosmic Sleeve Dress - hand-painted galaxy design",
              isFavorited: false,
            },
            {
              id: "3",
              name: "Brushstroke Jacket",
              price: "$2,800",
              variant: "Abstract Earth Tones  1 of 1",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-ceramic-texture-background_23-2148383596.jpg",
              imageAlt: "Brushstroke Jacket - unique hand-painted abstract",
              isFavorited: false,
            },
            {
              id: "4",
              name: "Watercolor Pants",
              price: "$1,950",
              variant: "Ombre Gradient  1 of 4",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-bearded-tattooed-man-romantic-guy-white-shirt-cap-suspenders-walks-city-revolves-around-lamppost-peaky-blinders-old-fashioned-retro_1321-2039.jpg",
              imageAlt: "Watercolor Pants - hand-painted ombre effect",
              isFavorited: false,
            },
          ]}
          title="Featured Collection"
          description="Each piece is a unique work of art, hand-painted with meticulous attention to detail and limited to exclusive quantities."
          tag="Limited Edition"
          tagIcon={Sparkles}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Pieces", href: "/collection" }]}
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
          imageAlt="Master artisan hand-painting a garment"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Redefining luxury through artisanal excellence and creative vision"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Masterpieces Created",
              description: "Hand-painted works of wearable art",
              icon: Palette,
            },
            {
              id: "2",
              value: "95%",
              title: "Client Satisfaction",
              description: "Collectors worldwide cherish their pieces",
              icon: Star,
            },
            {
              id: "3",
              value: "15+",
              title: "Years Experience",
              description: "Master artisans with unparalleled expertise",
              icon: Award,
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
              id: "1",
              name: "Isabella Romano",
              handle: "@isabella_roma",
              testimonial:
                "Each piece from ZARAVYA is a conversation starter. The hand-painted details are absolutely mesmerizing—I feel like I'm wearing a gallery.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-handsome-stylish-brunette-man-with-coat-shoulders-intently-looking-camera-outdoor_574295-1313.jpg",
              imageAlt: "Isabella Romano",
            },
            {
              id: "2",
              name: "Marcus Chen",
              handle: "@luxe_collector",
              testimonial:
                "Finally, luxury that goes beyond logos. The craftsmanship and artistry in every stitch remind me why I invested in ZARAVYA.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-shirt-shop_1303-19866.jpg",
              imageAlt: "Marcus Chen",
            },
            {
              id: "3",
              name: "Sophie Beaumont",
              handle: "@sophie_style",
              testimonial:
                "ZARAVYA pieces are investment-grade wearable art. The exclusivity and creativity are unmatched in the luxury fashion world.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/elderly-business-woman-grey-suit-outdoors_1303-29564.jpg",
              imageAlt: "Sophie Beaumont",
            },
            {
              id: "4",
              name: "James Sterling",
              handle: "@art_collector_james",
              testimonial:
                "Owning a ZARAVYA garment is like owning a miniature art installation. The hand-painted details are breathtaking.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/transgender-person-wearing-yellow-jacket-make-up_23-2148827068.jpg",
              imageAlt: "James Sterling",
            },
            {
              id: "5",
              name: "Amara Okonkwo",
              handle: "@amara_luxe",
              testimonial:
                "The level of attention to detail is extraordinary. Every brushstroke tells a story. I'm a ZARAVYA collector for life.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-purple-bathrobe-bedroom_1303-11275.jpg",
              imageAlt: "Amara Okonkwo",
            },
            {
              id: "6",
              name: "Victoria Ashford",
              handle: "@vashford",
              testimonial:
                "ZARAVYA has redefined what luxury means to me. It's not about the brand—it's about the art, the soul, and the uniqueness.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-woman-posing-as-greek-goddess_23-2150099230.jpg",
              imageAlt: "Victoria Ashford",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={35}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="The ZARAVYA Promise"
          description="Every piece is a commitment to artistry, exclusivity, and timeless luxury"
          tag="Why Choose ZARAVYA"
          tagIcon={Zap}
          features={[
            {
              title: "Hand-Painted Excellence",
              description:
                "Each garment is individually created by master artisans using traditional techniques and premium materials.",
              bentoComponent: "icon-info-cards",
              items: [
                {
                  icon: Palette,
                  label: "Custom Artistry",
                  value: "100% Bespoke",
                },
                {
                  icon: Sparkles,
                  label: "Premium Quality",
                  value: "Uncompromised",
                },
                {
                  icon: Award,
                  label: "Certified",
                  value: "Authenticated",
                },
              ],
            },
            {
              title: "Ultimate Exclusivity",
              description: "Limited production runs ensure your piece remains rare and distinctive.",
              bentoComponent: "marquee",
              centerIcon: Lock,
              variant: "text",
              texts: [
                "Never Mass-Produced",
                "One-of-a-Kind Designs",
                "Numbered Certificates",
                "Exclusive Ownership",
              ],
            },
            {
              title: "Investment-Grade Pieces",
              description: "ZARAVYA garments appreciate in value and are recognized by luxury collectors globally.",
              bentoComponent: "3d-stack-cards",
              items: [
                {
                  icon: TrendingUp,
                  title: "Value Appreciation",
                  subtitle: "Growing Demand",
                  detail: "Collector items with increasing worth",
                },
                {
                  icon: Globe,
                  title: "Global Recognition",
                  subtitle: "Worldwide Collectors",
                  detail: "Sought after by luxury enthusiasts",
                },
                {
                  icon: Flame,
                  title: "Timeless Appeal",
                  subtitle: "Lasting Impact",
                  detail: "Pieces that transcend trends",
                },
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          tagIcon={Mail}
          title="Begin Your Luxury Journey"
          description="Discover the exclusive world of ZARAVYA. Connect with our team to explore custom commissions, limited releases, and become part of an elite circle of wearable art collectors."
          buttons={[
            { text: "Contact Us", href: "/contact" },
            { text: "Follow on Instagram", href: "https://instagram.com" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="ZARAVYA"
          columns={[
            {
              title: "Collection",
              items: [
                { label: "Featured Pieces", href: "#collection" },
                { label: "Shop All", href: "#shop" },
                { label: "Limited Drops", href: "#shop" },
                { label: "Custom Orders", href: "#contact" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "Our Story", href: "#about" },
                { label: "Craftsmanship", href: "#about" },
                { label: "Press", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Contact", href: "#contact" },
                { label: "Newsletter", href: "#" },
                { label: "Lookbook", href: "#" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "Care Guide", href: "#" },
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" },
                { label: "FAQ", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 ZARAVYA | Wearable Art. Limited Pieces. Hyper Luxury."
        />
      </div>
    </ThemeProvider>
  );
}