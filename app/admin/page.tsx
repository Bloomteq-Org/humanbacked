import type { Metadata } from "next";
import { cookies } from "next/headers";
import SimpleHeader from "../components/SimpleHeader";
import Footer from "../components/Footer";
import AdminPageClient from "./components/AdminPageClient";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin panel",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  return !!session;
}

export default async function AdminPage() {
  const isAuthenticated = await checkAuth();

  return (
    <main className="min-h-screen bg-[radial-gradient(118.69%_85.24%_at_50%_25.2%,_#FFF_0%,_#F4F4FF_58.08%,_#FFF_84.05%)]">
      <SimpleHeader />
      <AdminPageClient isAuthenticated={isAuthenticated} />
      <Footer />
    </main>
  );
}
