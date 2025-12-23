"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

interface AdminDashboardProps {
  onLogout?: () => void;
}

interface EmailData {
  email: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState<EmailData[]>([]);
  const [emailsLoading, setEmailsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [copySuccess, setCopySuccess] = useState(false);
  const router = useRouter();

  // Fetch emails from API
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setEmailsLoading(true);
        const response = await fetch("/api/admin/emails");
        if (response.ok) {
          const data = await response.json();
          setEmails(data.emails || []);
        } else {
          console.error("Failed to fetch emails");
        }
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setEmailsLoading(false);
      }
    };

    fetchEmails();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(emails.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEmails = emails.slice(startIndex, endIndex);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
      if (onLogout) {
        onLogout();
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDownloadCSV = () => {
    // Create CSV content
    const csvHeader = "Email,Created At\n";
    const csvRows = emails.map((item) => `"${item.email}","${item.createdAt}"`).join("\n");
    const csvContent = csvHeader + csvRows;

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `emails_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyToClipboard = async () => {
    try {
      // Format emails as comma-separated with space (only emails, not dates)
      const emailsText = emails.map((item) => item.email).join(", ");

      // Use modern Clipboard API
      await navigator.clipboard.writeText(emailsText);

      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = emails.map((item) => item.email).join(", ");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy:", fallbackErr);
        alert("Failed to copy to clipboard");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <article className="mx-auto min-h-screen pt-10 lg:pt-10 mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]">
      <div className="pb-[20px] md:pb-[50px]">
        {/* Title Section */}
        <div className="mb-[60px] md:mb-[80px]">
          <h1 className="font-bold text-[36px] text-center md:text-[48px] lg:text-[56px] lg:leading-[69px] leading-[42px] md:leading-[56px] tracking-[-0.72px] md:tracking-[-1.44px] text-[#1d1d1b] mb-[16px]">
            Admin Panel
          </h1>
          <div className="flex justify-center">
            <Button onClick={handleLogout} disabled={loading} size="md" variant="ghost">
              {loading ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#C7C7C6]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="font-semibold text-[24px] md:text-[28px] text-[#1d1d1b]">
              Email List ({emails.length.toLocaleString()})
            </h2>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handleCopyToClipboard}
                className={`inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  copySuccess
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "border border-[#C7C7C6] bg-white text-[#1d1d1b] hover:bg-[#F4F4FF]"
                }`}
              >
                {copySuccess ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 2.66667H13.3333C13.6869 2.66667 14.0261 2.80714 14.2761 3.05719C14.5262 3.30724 14.6667 3.64638 14.6667 4V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.6869 14.6667 13.3333 14.6667H4C3.64638 14.6667 3.30724 14.5262 3.05719 14.2761C2.80714 14.0261 2.66667 13.687 2.66667 13.3333V10.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6667 1.33333H6C5.64638 1.33333 5.30724 1.47381 5.05719 1.72386C4.80714 1.97391 4.66667 2.31305 4.66667 2.66667V8C4.66667 8.35362 4.80714 8.69276 5.05719 8.94281C5.30724 9.19286 5.64638 9.33333 6 9.33333H11.3333C11.687 9.33333 12.0261 9.19286 12.2761 8.94281C12.5262 8.69276 12.6667 8.35362 12.6667 8V3.33333L10.6667 1.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleDownloadCSV}
                className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[#C7C7C6] bg-white text-[#1d1d1b] hover:bg-[#F4F4FF] transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33333 6.66667L8 9.33333L10.6667 6.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 9.33333V1.33333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download CSV
              </button>
            </div>
          </div>

          {emailsLoading ? (
            <div className="py-12 text-center text-[#1d1d1b]/70">Loading emails...</div>
          ) : emails.length === 0 ? (
            <div className="py-12 text-center text-[#1d1d1b]/70">No emails found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ tableLayout: "auto" }}>
                <colgroup>
                  <col style={{ width: "auto" }} />
                  <col style={{ width: "1fr" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr className="border-b border-[#C7C7C6]">
                    <th className="text-left py-3 px-3 font-semibold text-[14px] md:text-[16px] text-[#1d1d1b] whitespace-nowrap">
                      #
                    </th>
                    <th className="text-left py-3 px-3 font-semibold text-[14px] md:text-[16px] text-[#1d1d1b]">
                      Email
                    </th>
                    <th className="text-right py-3 px-3 font-semibold text-[14px] md:text-[16px] text-[#1d1d1b] whitespace-nowrap">
                      Created Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmails.map((item, index) => (
                    <tr
                      key={startIndex + index}
                      className="border-b border-[#C7C7C6]/50 hover:bg-[#F4F4FF]/30 transition-colors"
                    >
                      <td className="py-3 px-3 text-[14px] md:text-[16px] text-[#1d1d1b]/70 whitespace-nowrap">
                        {startIndex + index + 1}
                      </td>
                      <td className="py-3 px-3 text-[14px] md:text-[16px] text-[#1d1d1b]">
                        {item.email}
                      </td>
                      <td className="py-3 px-3 text-[14px] md:text-[16px] text-[#1d1d1b]/70 whitespace-nowrap text-right">
                        {formatDate(item.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {emails.length > ITEMS_PER_PAGE && (
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#1d1d1b]/70">
              <span className="text-center md:text-left">
                Showing {startIndex + 1}-{Math.min(endIndex, emails.length)} of{" "}
                {emails.length.toLocaleString()}
              </span>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-full border border-[#C7C7C6] hover:bg-[#F4F4FF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                >
                  Previous
                </button>
                <span className="px-2 md:px-3 py-1.5 whitespace-nowrap">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-full border border-[#C7C7C6] hover:bg-[#F4F4FF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
