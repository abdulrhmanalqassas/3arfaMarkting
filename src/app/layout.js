import "@/shared/styles/utilities.css";
import "@/shared/styles/theme.css";
import "@/shared/styles/materialdesignicons.min.css";
import "@/shared/styles/marketing.css";
import "@/features/home/video-modal.css";
import "tiny-slider/dist/tiny-slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const metadata = {
  title: "Arafa Agency",
  description: "Arafa Agency creates, leads and manages brands in Egypt.",
  manifest: "/3arfaMarkting/manifest.json",
  icons: {
    icon: "/3arfaMarkting/favicon.ico",
    apple: "/3arfaMarkting/logo192.png",
  },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <body className="font-libre_franklin text-base text-black dark:text-white bg-white dark:bg-slate-900">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
