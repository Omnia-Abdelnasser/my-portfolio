"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export const ToastProvider = ToastPrimitive.Provider;

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn("bg-white dark:bg-gray-800 rounded-md p-4 shadow-md border border-gray-200 dark:border-gray-700", className)}
    {...props}
  />
));

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn("font-bold", className)} {...props} />
));

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn("text-sm text-gray-600 dark:text-gray-400", className)} {...props} />
));

export const ToastViewport = (props: ToastPrimitive.ToastViewportProps) => (
  <ToastPrimitive.Viewport
    {...props}
    className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-full m-0 list-none z-[9999] outline-none"
  />
  

);
