import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import Head from "next/head";
import SectionBanner from "../organisms/banners/SectionBanner";
export default function BaseLayout({ site, page, children }) {
  const sections = page.sections || [];
  return (
    <div className="site-container">
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
      </Head>
      <Header
        mainNavigation={site.mainNavigation}
        headerPrimaryLinks={site.headerPrimaryLinks}
        headerLogo={site.headerLogo}
        headerSearch={site.headerSearch}
      />
      <main className="c-layout-main">
        <div className="takui-c-site-width">
        {sections.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => {
                            const Component = <SectionBanner 
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`sections.${index}`} />;
                        })}
                    </div>
                )}
                </div>
      </main>
      <Footer
        footerLogo={site.footerLogo}
        mainNavigation={site.mainNavigation}
        footerPrimaryLinks={site.footerPrimaryLinks}
        socialMediaLinks={site.socialMediaLinks}
        footerCopyrightText={site.footerCopyrightText}
      />
    </div>
  );
}
