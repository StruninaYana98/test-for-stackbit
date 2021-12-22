import { getPageData } from "../utils/get-page-data";
import { getPagesPaths } from "../utils/get-pages-paths";
import BaseLayout from "../components/layouts/BaseLayout";
import SectionBanner from "../components/organisms/banners/SectionBanner";

export default function Page({ site, page }) {
  return (
    <BaseLayout site={site} page={page}>

      <SectionBanner
       backgroundImagePath={"/images/hero-bg.jpg"}
        title={"[Lorem Ipsum]"}
        subtitle={
          "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim. Curabitur lobortis id."
        }
        bannerButton={{
          text: "R&D Approach",
          icon:"chevron"
        }}
      />
    </BaseLayout>
  );
}
export async function getStaticPaths() {
  const paths = getPagesPaths();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const pageData = getPageData(params.slug);
  return {
    props: pageData,
  };
}
