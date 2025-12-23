"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        if (onSuccess) {
          onSuccess();
        } else {
          router.push("/admin");
          router.refresh();
        }
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-[#1d1d1b] mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full border border-[#C7C7C6] bg-white focus:outline-none focus:border-[#0c3ddf] transition-colors text-[#1d1d1b]"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#1d1d1b] mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full border border-[#C7C7C6] bg-white focus:outline-none focus:border-[#0c3ddf] transition-colors text-[#1d1d1b]"
            placeholder="Enter password"
          />
        </div>

        {error && <div className="text-[#d92d20] text-sm text-center">{error}</div>}

        <Button type="submit" disabled={loading} fullWidth className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}
