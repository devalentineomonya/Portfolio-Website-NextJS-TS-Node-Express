"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useCartStore } from "@/stores/cart-store";
import { SmilePlus } from "lucide-react";

import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect } from "react";

const formSchema = z.object({
  cartItems: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number(),
      price: z.number(),
      name: z.string(),
      image: z.string(),
      size: z.string(),
    })
  ),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
});

export default function CartPage() {
  const { items, total, removeItem, clearCart } = useCartStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cartItems: items,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    },
  });

  useEffect(() => {
    form.setValue("cartItems", items);
  }, [items]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit order");
      }

      if (data.success) {
        toast.success("Order submitted successfully!", {
          description: data.message,
        });
        clearCart();
        form.reset();
      } else {
        toast.error("Submission failed", {
          description: data.errors?.[0]?.message || "Unknown error occurred",
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        description:
          error instanceof Error ? error.message : "Failed to process request",
      });
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Your Shopping Cart"
        description="Review your selected items and submit your details to help us validate our marketplace idea. No real products will be sent unless we launch the business."
      />
      {/* Left Column - Cart Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 col-span-2">
              <SmilePlus className="h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button asChild variant="link">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <ul
                role="list"
                className="mt-6 text-sm font-medium text-muted-foreground border-t divide-y"
              >
                {items.map((item) => (
                  <li key={item.productId} className="flex py-3 space-x-6 px-2">
                    <Image
                      width={80}
                      height={80}
                      src={item.image}
                      alt={item.name}
                      className="flex-none w-16 h-16  rounded-md object-center object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-foreground hover:underline">
                        <Link href={`/shop/${item.productId}`}>
                          {item.name}
                        </Link>
                      </h3>

                      <p className="text-foreground">
                        <span className="text-muted-foreground">Size:</span>{" "}
                        {item.size}
                      </p>
                      <p className="text-foreground">
                        <span className="text-muted-foreground">Quantity:</span>{" "}
                        x{item.quantity}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="flex-none font-medium text-foreground">
                        Kes. {item.price}
                      </p>

                      <Button
                        onClick={() => removeItem(item.productId, item.size)}
                        variant="link"
                        size="sm"
                        className="px-0 text-destructive cursor-pointer"
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="text-sm font-medium text-foreground space-y-4 border-t pt-4 px-3">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-muted-foreground">Kes {total}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-muted-foreground">Kes 200.00</dd>
                </div>

                <div className="flex items-center justify-between border-t  pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base text-muted-foreground">
                    Kes {total + 200}.00
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-y-6 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="mb-0">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder="Enter a phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full p-2 min-h-[120px]"
                        placeholder="Enter your address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={form.formState.isSubmitting || items.length === 0}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit Order"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
