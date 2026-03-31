"use client"

import { useRouter } from "next/navigation"
import { signUp } from "@/lib/auth-client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignUpPage = () => {

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        await signUp.email({
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        })

        router.push("/student/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">

                <h2 className="text-xl font-semibold text-center">Sign Up</h2>

                {/* Name */}
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter your name" />
                </div>

                {/* Email */}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" />
                </div>

                {/* Password */}
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" placeholder="••••••••" />
                </div>

                <Button type="submit" className="w-full">
                    Sign Up
                </Button>

            </form>
        </div>
    )
}

export default SignUpPage