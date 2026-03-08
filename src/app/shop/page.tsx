"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";

export default function ShopPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Collection", id: "/shop" },
    { name: "About", id: "/about" },
    { name: "Shop", id: "/shop" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Collection",
      items: [
        { label: "Featured Pieces", href: "/shop" },
        { label: "Shop All", href: "/shop" },
        { label: "Limited Drops", href: "/shop" },
        { label: "Custom Orders", href: "/contact" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "Our Story", href: "/about" },
        { label: "Craftsmanship", href: "/about" },
        { label: "Press", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Contact", href: "/contact" },
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

      <div id="collection" data-section="collection">
        <ProductCardFour
          title="Featured Collection"
          description="Each piece is a unique work of art, hand-painted with meticulous attention to detail and limited to exclusive quantities."
          tag="Limited Edition"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Aurora Silk Shirt",
              price: "$2,450",
              variant: "Hand-painted Sunset  1 of 3",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-couple-posing-together_23-2148546987.jpg",
              imageAlt: "Aurora Silk Shirt - hand-painted sunset tones",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Cosmic Sleeve Dress",
              price: "$3,200",
              variant: "Starfield Design  1 of 2",
              imageSrc: "http://img.b2bpic.net/free-vector/abstract-background-watercolor-stars_23-2147651165.jpg",
              imageAlt: "Cosmic Sleeve Dress - hand-painted galaxy design",
              isFavorited: false,
            },
            {
              id: "3",
              name: "Brushstroke Jacket",
              price: "$2,800",
              variant: "Abstract Earth Tones  1 of 1",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-ceramic-texture-background_23-2148383596.jpg",
              imageAlt: "Brushstroke Jacket - unique hand-painted abstract",
              isFavorited: false,
            },
            {
              id: "4",
              name: "Watercolor Pants",
              price: "$1,950",
              variant: "Ombre Gradient  1 of 4",
              imageSrc: "http://img.b2bpic.net/free-photo/young-bearded-tattooed-man-romantic-guy-white-shirt-cap-suspenders-walks-city-revolves-around-lamppost-peaky-blinders-old-fashioned-retro_1321-2039.jpg",
              imageAlt: "Watercolor Pants - hand-painted ombre effect",
              isFavorited: false,
            },
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Pieces", href: "/shop" }]}
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
          columns={footerColumns}
          copyrightText="© 2025 ZARAVYA | Wearable Art. Limited Pieces. Hyper Luxury."
        />
      </div>
    </ThemeProvider>
  );
}