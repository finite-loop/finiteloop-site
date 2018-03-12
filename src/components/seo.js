import React, { Component } from "react";
import Helmet from "react-helmet";
import config from '../../config/SiteConfig';

class SEO extends Component {
    render() {
        const { postNode, postPath, postSEO } = this.props;
        let title;
        let description;
        let image;
        let postURL;
        if (postSEO) {
            const postMeta = postNode.frontmatter;
            title = postMeta.title;
            description = postMeta.excerpt;
            image = postMeta.image;
            postURL = config.siteUrl + config.pathPrefix + postPath;
        } else {
            title = config.siteTitle;
            description = config.siteDescription;
            image = config.siteLogo;
        }
        const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
        image = config.siteUrl + realPrefix + image;
        const blogURL = config.siteUrl + config.pathPrefix;
        const schemaOrgJSONLD = [
            {
                "@context": "http://schema.org",
                "@type": "WebSite",
                url: blogURL,
                name: title,
                alternateName: title ? config.siteTitleAlt : "",
            }
        ];
        if (postSEO) {
            schemaOrgJSONLD.push(
                {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            item: {
                                "@id": postURL,
                                name: title,
                                image
                            }
                        }
                    ]
                },
                {
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "url": config.siteUrl,
                    logo: {
                        "@type": "ImageObject",
                        name: title,
                        url: image,
                        contentUrl: image,
                    },
                },
                {
                    "@context": "http://schema.org",
                    "@type": "Article",
                    url: postURL,
                    name: title,
                    alternateName: title ? config.siteTitleAlt : "",
                    headline: title,
                    image: {
                        "@type": "ImageObject",
                        url: image
                    },
                    description,
                    author: {
                        "@type": "Organization",
                        name: config.siteTitleAlt
                    },
                    datePublished: new Date(),
                    publisher: {
                        "@type": "Organization",
                        name: config.siteTitleAlt,
                        logo: {
                            "@type": "ImageObject",
                            name: title + "logo",
                            url: image,
                            contentUrl: image,
                        },
                    },
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": blogURL
                    },
                }
            );
        }
        return (
            <Helmet>
                {/* General tags */}
                <meta name="description" content={description} />
                <meta name="image" content={image} />

                {/* Schema.org tags */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgJSONLD)}
                </script>

                {/* OpenGraph tags */}
                <meta property="og:url" content={postSEO ? postURL : blogURL} />
                {postSEO ? <meta property="og:type" content="article" /> : null}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta
                    property="fb:app_id"
                    content={config.siteFBAppID ? config.siteFBAppID : ""}
                />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:creator"
                    content={config.userTwitter ? config.userTwitter : ""}
                />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        );
    }
}

export default SEO;