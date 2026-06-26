import type { Metadata } from "next";
import { Noto_Sans_JP, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blue-beat.co"),
  title: {
    default: "ブルービート株式会社 | AI経理・AI顧問サービス",
    template: "%s | ブルービート株式会社",
  },
  description: "ブルービート株式会社はAI経理・AI顧問サービスで中小企業の財務課題を解決します。初回1時間無料相談実施中。静岡県沼津市大岡。",
  keywords: ["AI経理", "AI顧問", "中小企業", "経理代行", "税務顧問", "法人設立", "海外進出支援", "沼津", "静岡", "ブルービート"],
  authors: [{ name: "ブルービート株式会社" }],
  creator: "ブルービート株式会社",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://blue-beat.co",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://blue-beat.co",
    siteName: "ブルービート株式会社",
    title: "ブルービート株式会社 | AI経理・AI顧問サービス",
    description: "ブルービート株式会社はAI経理・AI顧問サービスで中小企業の財務課題を解決します。初回1時間無料相談実施中。",
  },
  twitter: {
    card: "summary_large_image",
    title: "ブルービート株式会社 | AI経理・AI顧問サービス",
    description: "ブルービート株式会社はAI経理・AI顧問サービスで中小企業の財務課題を解決します。初回1時間無料相談実施中。",
  },
  verification: {
    google: "eDHpPyW9exlf07XT7t1DoD6kHqG5N6JztDboQR9DV1c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
