"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Collection", id: "collection" },
    { name: "About", id: "about" },
    { name: "Shop", id: "shop" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
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
  ];

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
          button={{ text: "Explore", href: "collection" }}
          brandName="ZARAVYA"
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