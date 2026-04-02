"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Password strength helper
function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: "Weak", color: "bg-red-500" };
  if (score <= 3) return { score, label: "Fair", color: "bg-yellow-500" };
  if (score === 4) return { score, label: "Good", color: "bg-blue-500" };
  return { score, label: "Strong", color: "bg-emerald-500" };
}

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const strength = getPasswordStrength(password);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
      setLoading(false);
    } else {
      router.push("/student/dashboard");
    }
  }

  return (
 
         <div className="w-full max-w-md">
         <Card className="border-zinc-800 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl tracking-tight">Create an account</CardTitle>
              <CardDescription className="text-zinc-500 text-[13px]">
                Already have one?{" "}
                <a
                  href="/sign-in"
                  className="text-foreground font-medium underline underline-offset-4 hover:text-zinc-400 transition-colors"
                >
                  Sign in
                </a>
              </CardDescription>
            </CardHeader>

            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-5 py-3 border-red-900 bg-red-950/40">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-medium text-zinc-400">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-600 focus-visible:ring-zinc-600 h-9 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-medium text-zinc-400">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-600 focus-visible:ring-zinc-600 h-9 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-xs font-medium text-zinc-400">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      required
                      minLength={8}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-600 focus-visible:ring-zinc-600 h-9 text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {password.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                              i <= strength.score
                                ? strength.color
                                : "bg-zinc-800"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-[11px] text-zinc-500">
                        Strength:{" "}
                        <span
                          className={
                            strength.score <= 1
                              ? "text-red-400"
                              : strength.score <= 3
                              ? "text-yellow-400"
                              : strength.score === 4
                              ? "text-blue-400"
                              : "text-emerald-400"
                          }
                        >
                          {strength.label}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-zinc-600 leading-relaxed pt-1">
                  By creating an account you agree to our{" "}
                  <a href="/terms" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-9 text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Creating account…
                    </>
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex-col gap-4 pt-0">
              <div className="flex items-center gap-3 w-full">
                <Separator className="flex-1 bg-zinc-800" />
                <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
                  or
                </span>
                <Separator className="flex-1 bg-zinc-800" />
              </div>

              <Button
                variant="outline"
                className="w-full h-9 text-sm border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors gap-2"
                type="button"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </CardFooter>
          </Card>

          {/* Footer */}
          <p className="text-center text-[11px] text-zinc-600">
            © {new Date().getFullYear()} shadcn/studio. All rights reserved.
          </p>
        </div>

  );
}