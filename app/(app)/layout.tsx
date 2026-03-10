import { CartSheet } from "@/components/app/home/CartSheet";
import { Header } from "@/components/app/home/Header";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <Header />

        <main>{children}</main>
        <CartSheet />
        <SanityLive />
        <Toaster />
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default Layout;
