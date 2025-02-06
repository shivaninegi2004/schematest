import Image from "next/image";
import Script from "next/script";

// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: "Your Business Name",
//   image: "https://yourwebsite.com/images/logo.png",
//   telephone: "+1-800-555-5555",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "123 Main Street",
//     addressLocality: "Your City",
//     addressRegion: "State",
//     postalCode: "12345",
//     addressCountry: "US",
//   },
//   url: "https://yourwebsite.com",
//   sameAs: [
//     "https://www.facebook.com/yourpage",
//     "https://www.instagram.com/yourpage",
//   ],
// };

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WTiCabs",
  url: "https://www.wticabs.com/",
  logo: "https://www.wticabs.com/images/logo.png",
  sameAs: [
    "https://twitter.com/wticabs",
    "https://www.instagram.com/wti.cabs/",
    "https://www.youtube.com/@wti_cabs",
    "https://www.linkedin.com/company/wti-cabs",
    "https://www.wticabs.com/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "09250057902",
      contactType: "customer service",
      email: "info@wticabs.com",
      areaServed: "IN",
      availableLanguage: "en",
    },
  ],
};


export default function Home() {
  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.js
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
