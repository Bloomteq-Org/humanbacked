"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";
import AdminDashboard from "./AdminDashboard";

interface AdminPageClientProps {
  isAuthenticated: boolean;
}

export default function AdminPageClient({ isAuthenticated: initialAuth }: AdminPageClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth);
  const [showLoginModal, setShowLoginModal] = useState(!initialAuth);
  const router = useRouter();

  // Check auth status on mount and when modal closes
  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/check");
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        setShowLoginModal(false);
      }
    } catch (error) {
      console.error("Auth check error:", error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
    router.refresh();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => {
          // Don't allow closing modal if not authenticated
          if (!isAuthenticated) {
            return;
          }
          setShowLoginModal(false);
        }}
        onLoginSuccess={handleLoginSuccess}
      />
      {isAuthenticated ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <article className="mx-auto min-h-screen pt-10 lg:pt-10 mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]">
          <div className="py-[60px] md:py-[80px]">
            <div className="text-center">
              <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1d1d1b]/70">
                Please log in to access the admin panel.
              </p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
