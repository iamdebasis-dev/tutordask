"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react"

import { signIn } from "@/lib/auth-client";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LogInPage(){
    const router = useRouter()
    const[error , setError] = useState<string | null>(null);
    const[loading , setLoading] = useState(false)
    const[showPassword , setShowPassword] = useState(false);

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setError(null);
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const res = await signIn.email({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });
    
        if (res?.error) {
          setError(res.error.message || "Invalid credentials. Please try again.");
          setLoading(false);
        } else {
          router.push("/student/dashboard");
        }
    }
    return(
        <div className="mx-auto w-full max-w-4xl">
          <Card className="bg-zinc-900 border-zinc-800 shadow-2xl shadow-black/40">
            <CardHeader className="space-y-1 pb-5">
              <CardTitle className="text-xl font-semibold text-zinc-100 tracking-tight">
                Sign in to your account
              </CardTitle>
              <CardDescription className="text-zinc-500 text-[13px]">
                Enter your credentials to access your workspace
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
             

              <div className="relative">
                <Separator className="bg-zinc-800" />
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
                  <span className="bg-zinc-900 px-3 text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
                  continue with email
                  </span>
                </span>
              </div>

              {error && (
                <Alert className="bg-red-500/8 border-red-500/20 py-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 text-red-400 mt-0.5" />
                  <AlertDescription className="text-red-400 text-[13px] ml-1">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} method="POST" className="space-y-4" id="signin-form">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-[12px] font-medium text-zinc-400"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="bg-zinc-800/60 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 h-9 text-[13.5px] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-[12px] font-medium text-zinc-400"
                    >
                      Password
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-[11.5px] text-zinc-500 hover:text-indigo-400 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      className="bg-zinc-800/60 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 h-9 text-[13.5px] pr-10 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                      tabIndex={-1}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-0">
              <Button
                type="submit"
                form="signin-form"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-9 text-[13.5px] font-medium tracking-tight transition-all shadow-lg shadow-indigo-900/30 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </>
                )}
              </Button>

              <p className="text-center text-[12.5px] text-zinc-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                >
                  Create one
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>

     
    )
}