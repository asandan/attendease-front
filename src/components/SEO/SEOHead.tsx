import { FC } from "react";
import Head from "next/head";
import { SEOHeadProps } from "@/shared";

export const SEOHead: FC<SEOHeadProps> = ({
  title,
  desc,
  url = "",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc as string} key="desc" />
      {/* <!-- Open Graph (OG) - Facebook and other platforms --> */}
      <meta property="og:title" content={title as string} />
      <meta property="og:description" content={desc as string} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.WEBSITE_URL + url} />{" "}
      {/* <!-- Make sure to replace URL_OF_YOUR_PAGE with the correct URL --> */}
      {/* <!-- Image to display; replace with a link to a relevant image if available --> */}
      <meta property="og:site_name" content="HRLib" />{" "}
      {/* <!-- e.g., "PDF Viewer" or your website's name --> */}
      {/* <!-- Twitter Cards --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title as string} />
      <meta name="twitter:description" content={desc as string} />
      {/* <!-- Same image link as the OG image or another suitable preview image --> */}
    </Head>
  );
};
