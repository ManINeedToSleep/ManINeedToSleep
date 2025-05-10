import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from "next";
import { Poppins, Zen_Kurenaido, Sarina } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const zenKurenaido = Zen_Kurenaido({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-kurenaido",
});

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sarina",
});

// Luminous Dusk Ant Design Theme Configuration
const luminousDuskAntdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#85C5FF',       // luminous-glow-blue (Glowing Petals for buttons/highlights)
    colorInfo: '#A3A9E6',          // luminous-lilac-tint (Secondary accents)
    colorTextBase: '#BDC7DA',      // luminous-mist-gray (Text on dark backgrounds)
    colorBgLayout: '#2C3E66',      // luminous-primary-blue (Twilight Mist base background)
    colorBgContainer: '#141D2B',   // luminous-deep-navy (Dark cards/footer)
    
    // For text on lighter elements (if any) or primary headings on dark cards:
    // colorTextHeading: '#F0F6FF', // luminous-ghost-white

    fontFamily: poppins.style.fontFamily, 
    borderRadius: 6, // A standard border radius
  },
  components: {
    Card: {
      colorBgContainer: '#141D2B', // luminous-deep-navy for Card specific background
      colorTextHeading: '#F0F6FF', // Ghost white for card titles
      colorTextDescription: '#BDC7DA', // Mist gray for card paragraph text
    },
    Button: {
      colorPrimary: '#85C5FF',        // Glow Blue for primary buttons
      colorText: '#141D2B',           // Deep Navy text on primary buttons for contrast
      colorPrimaryHover: '#A3A9E6',   // Lilac Tint for hover
      // For default buttons (non-primary)
      colorBorder: '#85C5FF',        // Glow blue border for default buttons
      colorTextSecondary: '#85C5FF',  // Glow blue text for default buttons
    },
    Tabs: {
      colorText: '#BDC7DA',          // luminous-mist-gray (Mist Gray for tab text)
      colorPrimary: '#85C5FF',        // luminous-glow-blue (Glow Blue for ink bar and active tab text via inheritance)
    },
    Timeline: {
      colorText: '#BDC7DA',
      // controlItemBg: '#141D2B', // If react-chrono uses these, for its controls
      // tailColor: '#85C5FF', // For the line in AntD timeline (if we revert)
    },
    Typography: {
      colorTextHeading: '#F0F6FF',   // Ghost white for h1, h2, etc.
      colorText: '#BDC7DA',           // Mist gray for general paragraph text
      colorTextSecondary: '#A3A9E6', // Lilac for secondary text or links
      // Link colors can also be set here if needed
    }
    // ... other component-specific overrides if needed
  },
};

export const metadata: Metadata = {
  title: "ManINeedToSleep | Luminous Dusk Portfolio",
  description: "Bryan Willson Gunawan's personal portfolio. A Foxcore Developer, themed with Luminous Dusk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${zenKurenaido.variable} ${sarina.variable}`}>
      <body
        className={`font-sans antialiased flex flex-col min-h-screen bg-luminous-primary-blue text-luminous-mist-gray`}
      >
        <AntdRegistry>
          <ConfigProvider theme={luminousDuskAntdTheme}>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
