import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <main>{children}</main>
        <SanityLive />
        <Toaster />
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default Layout;
