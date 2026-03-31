"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signIn } from "@/lib/auth-client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const SignInPage=()=>{
    const route=useRouter()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        
        const res=await signIn.email({
            email:formData.get("email") as string,
            password:formData.get("password") as string,
        })
        if(res.error){
            alert("Invalid Credentials")
            return
        }
        const me =await fetch("/pi/me").then(res => res.json())

        if(me.role === "TUTOR"){
            route.push("/tutor/dashboard")
        }else{
            route.push("/student/dashboard")
        }
    }
    return(
<div className="min-h-screen flex items-center justify-center">

<form onSubmit={handleSubmit}>

    <h2 className="text-xl font-semibold mb-4">SignIn</h2>

    <FieldSet className="w-full max-w-xs">
        <FieldGroup>

            <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <FieldDescription>
                    Enter Your User Id(Email).
                </FieldDescription>
            </Field>

            <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                    Enter Your Password.
                </FieldDescription>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                />
            </Field>

        </FieldGroup>
    </FieldSet>

    <Button type="submit" className="mt-4 w-full">
        Login
    </Button>

    <p className="mt-3 text-sm">
        Don’t have an account?{" "}
        <Link href="/register" className="underline">
            SignUp
        </Link>
    </p>

</form>
</div>
    )
}
export default SignInPage