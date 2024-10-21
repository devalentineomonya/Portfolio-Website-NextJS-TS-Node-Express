"use client"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginBackground from "@/assets/images/loginBg.png"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

// Define Zod schema for form validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        toast.error("Login Failed")
        console.error('Login failed');
      }
    } catch (error: any) {
      console.error(error)
      toast.error("Login Failed")
    } finally {
      setIsLoading(false)
    }

  };

  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="flex shadow-lg rounded-lg overflow-hidden h-fit max-w-8xl min-h-screen w-full bg-white">
        {/* Left Side: Image */}
        <div className="hidden lg:flex w-2/3 bg-cover" style={{ backgroundImage: `url("${loginBackground.src}")` }} />

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/3 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h2>

          {/* Form starts here */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a strong password, at least 6 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button disabled={isLoading} type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-red-400 disabled:bg-red-400">
                {
                  isLoading ? <>
                  <div className="border-2 border-y-transparent border-white animate-spin h-6 rounded-full aspect-square"></div>
                  </> : "Sign In"
}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
