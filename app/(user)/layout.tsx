import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import BannerNavbar from "@/components/navbar/BannerNavbar";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import "@/app/globals.css";
import { inter, suwannaphum } from "@/app/(user)/fonts";
import StoreProvider from "@/app/StoreProvider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "@/app/error";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <title>ISTAD LMS</title>
        </head>
        <body
            className={cn(
                "min-h-screen bg-lms-background font-sans antialiased",
                suwannaphum.variable, inter.variable
            )}
        >
        <StoreProvider>
            <ErrorBoundary errorComponent={Error}>
                <header className="sticky top-0 z-50">
                    <BannerNavbar/>
                    <div className="pt-12 z-50">
                        <NavbarComponent/>
                    </div>
                </header>
                <main className="bg-whiteSmoke">{children}</main>
                <Toaster position={"top-center"}/>
                <footer>
                    <FooterComponent/>
                </footer>
                <GoogleAnalytics />
            </ErrorBoundary>
        </StoreProvider>
        </body>
        </html>
    );
}
