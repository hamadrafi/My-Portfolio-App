export const CASE_STUDIES = [
    {
        slug: "moonfab-b2b-b2c-bundles",
        title: "Building B2B + B2C Bundles with Shopify, Fast Bundle & SparkLayer",
        description:
            "A bundles + inventory sync request that turned into a Fast Bundle and SparkLayer integration problem.",
        tags: ["Shopify", "Fast Bundle", "SparkLayer"],
        date: "July 2024",
        client: "Moonfab",
        role: "Shopify Developer",
        overview:
            "The ask started simple: bundles with inventory sync. Then we found SparkLayer was already running as the B2B channel, and the real work began.",
        clientRequirement:
            "They needed **bundles with inventory synchronization**. Once we saw SparkLayer in the mix, the real requirement became making **Fast Bundle, Shopify, and SparkLayer** work together without breaking B2C or B2B.",
        whatWasPossible:
            "We created dedicated Fast Bundle products with their own SKUs, enabled them on the SparkLayer sales channel, and used SparkLayer Customer Groups, Price Lists, and customer tags for wholesale pricing. For the search bar leak, we added **custom tag-based redirect logic** so customers only landed on the storefront experience they were supposed to see.",
        goingTheExtraMile:
            "Fast Bundle's default product cards conflicted with SparkLayer on B2B, and their support had no usable fix. We built a **metafield mapping system** so each bundle could show the right product card without relying on Fast Bundle's default display.",
        challenges:
            "SparkLayer's own cart and product components fought Fast Bundle's defaults, so we had to use the Single BAP Bundle Type. Separately, the **search app was showing SparkLayer-hidden products in the search bar**, which exposed B2B products to B2C users and the other way around, even though SparkLayer itself was handling catalog visibility correctly.",
        outcome:
            "Fast Bundle owns bundles and inventory. Shopify owns products and SKUs. SparkLayer owns B2B pricing and visibility. Redirects plus custom tag logic fixed the search app showing hidden products. Metafields fill the remaining gaps. Finding the app is easy. Making it coexist with what is already on the store is the real work.",
        results: [
            { label: "Bundles", value: "Fast Bundle", note: "SKU + inventory" },
            { label: "Wholesale", value: "SparkLayer", note: "B2B pricing" },
            { label: "Bridge", value: "Metafields", note: "custom logic" },
        ],
        project: {
            title: "Moonfab",
            description:
                "A Shopify storefront showcasing MoonShade setups and gear tailored for different vehicle types and outdoor adventures.",
            tech: ["Shopify", "Liquid", "Apps"],
            imgSrc: "/imgs/moonfab.png",
            videoSrc: "/imgs/vids/moonfab.webm",
            liveLink: "https://moonfab.com/",
        },
    },
    {
        slug: "callavan-webflow-supabase-sync",
        title: "Keeping Webflow and Supabase in Sync for Callavan",
        description:
            "Webflow for speed on the front, Supabase for the database, and edge functions to keep forms, drivers, and data flowing both ways.",
        tags: ["Webflow", "Supabase", "Edge Functions"],
        date: "March 2024",
        client: "Callavan",
        role: "Full-Stack Developer",
        overview:
            "Callavan wanted a fast Webflow frontend with Supabase as the backend and database. Forms, drivers, and related data had to move cleanly between both sides.",
        clientRequirement:
            "The client wanted **Webflow as the frontend for speed** and **Supabase as the backend and DB**. Form submissions, driver data, and other records had to follow a clear workflow from Webflow into Supabase, then back out to Webflow when needed. If something changed in either place, **both sides had to stay updated**.",
        whatWasPossible:
            "We kept Webflow for the UI and Supabase for storage and backend logic. Because the site used **Webflow forms**, we restricted Webflow's built-in form submission and routed submissions through our own flow instead. Data went out through **CORS-enabled calls** to a **Supabase Edge Function API endpoint**, which handled customer and driver event details.",
        goingTheExtraMile:
            "The hard part was two-way consistency plus form control. We used **Supabase Edge Functions** as the bridge: Webflow sent customer and driver event details to the edge endpoint, then functions pushed updates back so both systems stayed aligned when either side changed.",
        challenges:
            "Webflow and Supabase do not share one source of truth by default. Built-in Webflow form submission would have kept data stuck in Webflow, so we had to block that path and wire a custom submit flow with CORS and edge endpoints. Forms and driver data still had to stay consistent across both systems.",
        outcome:
            "Webflow stays the fast frontend. Supabase stays the backend and database. Webflow's native form submit is restricted. Edge Functions, CORS, and the edge API endpoint move customer and driver event details both ways so a change in one place updates the other.",
        results: [
            { label: "Frontend", value: "Webflow", note: "forms redirected" },
            { label: "Backend", value: "Supabase", note: "DB + logic" },
            { label: "Sync", value: "Edge Functions", note: "CORS + API" },
        ],
        project: {
            title: "Callavan",
            description:
                "Real-time driver tracking app using Webflow (frontend) and Supabase (backend) to connect users with nearby drivers.",
            tech: ["Webflow", "CMS", "Supabase"],
            imgSrc: "/imgs/callavan.jpg",
            videoSrc: "/imgs/vids/callavan.webm",
            liveLink: "https://www.callavan.live/",
        },
    },
    {
        slug: "optimizing-shopify-performance",
        title: "Fixing Kopilot's Shopify Speed Scores",
        description:
            "Mobile sat at 36 and desktop around 50 to 60. We fixed image sizing, fonts, hero media, and script loading to push scores much higher.",
        tags: ["Shopify", "Performance", "Liquid"],
        date: "May 2024",
        client: "Kopilot.ID",
        role: "Shopify Engineer",
        overview:
            "When we checked Kopilot's speed, mobile was around **36** and desktop sat in the **50 to 60** range. The store looked fine, but the browser was doing way more work than it needed to.",
        clientRequirement:
            "The site needed to feel fast, especially on mobile, without stripping the brand experience. The goal was simple: **raise PageSpeed** while keeping the storefront intact.",
        whatWasPossible:
            "We stayed on Shopify and Liquid. The first big issue was images: the browser was loading **full-size assets** for small UI pieces, like a logo served at around 2500px when it only needed about 200px. We switched to **Shopify image URL sizing** so each section only requested the dimensions it actually needed. Fonts were also loading late, so we loaded them properly in **theme.liquid**.",
        goingTheExtraMile:
            "The hero used a very high-definition video, so we added a **preloader image** instead of forcing the video upfront. We also converted heavy **PNG files to WebP**, and used **async and defer** on scripts so they stopped blocking render.",
        challenges:
            "Small assets were still being served at huge dimensions, fonts were competing with first paint, and the hero video was too heavy for a clean mobile load. Fixing one piece was not enough. The wins only stuck once image sizing, fonts, media, and script loading were handled together.",
        outcome:
            "After the changes, desktop landed at **90+** and mobile at **75+**. Same storefront, far less wasted work for the browser.",
        results: [
            { label: "Mobile", value: "75+", note: "from ~36" },
            { label: "Desktop", value: "90+", note: "from 50-60" },
            { label: "Images", value: "WebP", note: "sized URLs" },
        ],
        project: {
            title: "Kopilot.ID",
            description:
                "An NFC-powered emergency medical ID Shopify storefront for quick access to vital medical and emergency contact information.",
            tech: ["Shopify", "Liquid", "Apps"],
            imgSrc: "/imgs/kopilot.png",
            videoSrc: "/imgs/vids/kopilot.webm",
            liveLink: "https://www.kopilot.id/",
        },
    },
];

/** Find a case study linked to a project by its display title. */
export function getCaseStudyByProjectTitle(title) {
    if (!title) return null;
    const normalized = title.trim().toLowerCase();
    return (
        CASE_STUDIES.find(
            (study) => study.project?.title?.trim().toLowerCase() === normalized
        ) || null
    );
}
