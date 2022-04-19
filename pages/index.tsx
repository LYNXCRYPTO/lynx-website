import Head from "next/head";
import dynamic from 'next/dynamic';
import { useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MainSection from "../components/MainSection";
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const BrandsSection = dynamic(() => import("../components/BrandsSection"));
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"));
const ServicesProvidedSection = dynamic(() => import('../components/ServicesProvidedSection'));
const FooterSection = dynamic(() => import("../components/FooterSection"));
const SubfooterSection = dynamic(() => import("../components/SubfooterSection"));
import NavBar from '../components/NavBars/Navbar'



export default function Home() {
  const theme = useTheme();

  return (
    <Container disableGutters maxWidth={false}>
      <Head>
        <title key="title">Protocoding - Expert Full Service Website Delivery At A Fraction Of The Cost</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="description" key="description" content="Having a strong digital presence has become a must for every business. At Protocoding we provide a full service web development team at a fraction of the cost! Whether it's UI/UX, website development, content creation, or SEO we take care of it all. We collaborate closely with our clients to make sure our deliverables are exactly as specified. Don't be limited in what you can create with chunky website builders. Our custom website design process eliminates all functionally hindrances and allows your website to run at blazing fast speeds. Request a quote today from Protocoding." />
        <meta
          name="keywords"
          content="Code, Coding, Website, Creation, Design, Delivery, Creation, SEO, UI, UX, Content, Full Service, Coding, Web, Website, Protocoding, Proto, coding, proto, proto coding, lesson, ryan lesson, jordan lesson, home, home page"
        />
        <meta name="author" content="Protocoding" />
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
          content={"https://protocoding.com"}
          key="ogurl"
        />
        <meta property="og:image" content={"preview.jpg"} key="ogimage" />
        <meta
          property="og:site_name"
          content={"Protocoding"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"Protocoding - Expert Full Service Website Delivery At A Fraction Of The Cost"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={`Having a strong digital presence has become a must for every business. At Protocoding we provide a full service web development team at a fraction of the cost! Whether it's UI/UX, website development, content creation, or SEO we take care of it all. We collaborate closely with our clients to make sure our deliverables are exactly as specified. Don't be limited in what you can create with chunky website builders. Our custom website design process eliminates all functionally hindrances and allows your website to run at blazing fast speeds. Request a quote today from Protocoding.`}
          key="ogdesc"
        />
      </Head>
      <NavBar />
      <MainSection />
      <ServicesSection />
      <BrandsSection />
      <PortfolioSection />
      <ServicesProvidedSection />
      <FooterSection />
      <SubfooterSection />
    </Container>
  );
}
