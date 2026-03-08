"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import {
  Sparkles,
  Palette,
  Award,
  Lock,
  TrendingUp,
  Globe,
  Flame,
  Mail,
  Zap,
} from "lucide-react";

export default function CollectionPage() {
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

      <div id="collection" data-section="collection">
        <ProductCardFour
          products={[
            {
              id: "1",
              name: "Aurora Silk Shirt",
              price: "$2,450",
              variant: "Hand-painted Sunset  1 of 3",
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-couple-posing-together_23-2148546987.jpg?_wi=2",
              imageAlt: "Aurora Silk Shirt - hand-painted sunset tones",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Cosmic Sleeve Dress",
              price: "$3,200",
              variant: "Starfield Design  1 of 2",
              imageSrc:
                "http://img.b2bpic.net/free-vector/abstract-background-watercolor-stars_23-2147651165.jpg?_wi=2",
              imageAlt: "Cosmic Sleeve Dress - hand-painted galaxy design",
              isFavorited: false,
            },
            {
              id: "3",
              name: "Brushstroke Jacket",
              price: "$2,800",
              variant: "Abstract Earth Tones  1 of 1",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-ceramic-texture-background_23-2148383596.jpg?_wi=2",
              imageAlt: "Brushstroke Jacket - unique hand-painted abstract",
              isFavorited: false,
            },
            {
              id: "4",
              name: "Watercolor Pants",
              price: "$1,950",
              variant: "Ombre Gradient  1 of 4",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-bearded-tattooed-man-romantic-guy-white-shirt-cap-suspenders-walks-city-revolves-around-lamppost-peaky-blinders-old-fashioned-retro_1321-2039.jpg?_wi=2",
              imageAlt: "Watercolor Pants - hand-painted ombre effect",
              isFavorited: false,
            },
            {
              id: "5",
              name: "Crimson Canvas Vest",
              price: "$2,100",
              variant: "Experimental Bold  1 of 2",
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-couple-posing-together_23-2148546987.jpg?_wi=3",
              imageAlt: "Crimson Canvas Vest - experimental bold design",
              isFavorited: false,
            },
            {
              id: "6",
              name: "Ethereal Flow Skirt",
              price: "$2,650",
              variant: "Gradient Elegance  1 of 1",
              imageSrc:
                "http://img.b2bpic.net/free-photo/fashion-photo-young-magnificent-woman-blue-dress_158595-352.jpg?_wi=2",
              imageAlt: "Ethereal Flow Skirt - gradient elegance design",
              isFavorited: false,
            },
          ]}
          title="Full Collection"
          description="Explore our complete range of hand-painted luxury pieces. Each garment is a unique masterpiece, meticulously crafted by master artisans with premium materials and artistic vision."
          tag="Limited Edition"
          tagIcon={Sparkles}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Custom Commission", href: "#contact" }]}
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