import Head from "next/head";
import dynamic from 'next/dynamic';
import { useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection"
import BrandsSection from "../components/TeamSection"
import InnovationsSection from "../components/InnovationsSection"
import ServicesProvidedSection from '../components/ServicesProvidedSection'
import FooterSection from "../components/FooterSection"
import SubfooterSection from "../components/SubfooterSection"
import NavBar from '../components/NavBars/Navbar'



export default function Home() {
  const theme = useTheme();

  return (
    <Container style={{ maxWidth: 1440 }} disableGutters>
      <Head>
        <title key="title">Home | lynxprotocol.org</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="description" key="description" content="Lynx is a scalable and high throughput network for peer to peer transactions, dApps, and digital assets." />
        <meta
          name="keywords"
          content="blockchain, cryptocurrency, crypto, blockchain-technology, bitcoin, ethereum, decentralization, peer-to-peer, network, p2p, P2P, mining, consensus, jordan lesson, Jordan, Lesson, whitepaper"
        />
        <meta name="author" content="Lynx Protocol" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content={"https://lynxprotocol.org"}
          key="ogurl"
        />
        <meta property="og:image" content={"preview.jpg"} key="ogimage" />
        <meta
          property="og:site_name"
          content={"Lynx Protocol"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"Lynx - A Truly Open and Decentralized Internet"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={`Lynx is a scalable and high throughput network for peer to peer transactions, dApps, and digital assets.`}
          key="ogdesc"
        />
      </Head>
      <NavBar />
      <MainSection />
      <ServicesSection />
      <BrandsSection />
      <InnovationsSection />
      <ServicesProvidedSection />
      <FooterSection />
      <SubfooterSection />
    </Container>
  );
}
