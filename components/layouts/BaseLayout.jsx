import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import Head from "next/head";
export default function BaseLayout({ site, page, children }) {
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
        <div className="takui-c-site-width">{children}</div>
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
