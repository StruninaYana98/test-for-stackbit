import OutlineButtonIcon from "../../atoms/buttons/OutlineButtonIcon";
import Link from "../../atoms/links/Link";

export default function SectionBanner({
  backgroundImagePath,
  coverLink,
  title,
  subtitle,
  bannerButton,
}) {
  return (
    <div
      className="takui-c-section-banner"
      style={{
        backgroundImage: `url('` + backgroundImagePath + `');`,
      }}
    >
      {coverLink ? (
        <Link
          className="takui-c-banner-link"
          href={coverLink.href}
          target={coverLink.target}
        ></Link>
      ) : null}

      <div className="takui-c-site-width">
        <article className="takui-c-section-content">
          <div className="takui-c-section-text">
            <h3 className="takui-c-section-title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="takui-c-section-button">
            {bannerButton ? (
              <OutlineButtonIcon
                href={bannerButton.href}
                target={bannerButton.target}
                text={bannerButton.text}
                icon={bannerButton.icon}
              />
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
