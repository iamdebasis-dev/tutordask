"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, BookOpen, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/sign-in"); // ✅ important
  }

  return (
    <nav className="w-full border-b border-zinc-800 bg-zinc-950 px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <Link href="/student/dashboard" className="flex items-center gap-2">
        <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
          <span className="text-black font-bold text-sm">T</span>
        </div>
        <span className="text-white font-semibold">TutorDesk</span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link href="/student/dashboard" className="text-zinc-400 hover:text-white">
          Dashboard
        </Link>
        <Link href="/student/courses" className="text-zinc-400 hover:text-white">
          Courses
        </Link>
        <Link href="/student/profile" className="text-zinc-400 hover:text-white">
          Profile
        </Link>
      </div>

      {/* Logout */}
      <Button
        onClick={handleLogout}
        variant="outline"
        className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
      >
        <LogOut size={16} className="mr-2" />
        Logout
      </Button>
    </nav>
  );
}