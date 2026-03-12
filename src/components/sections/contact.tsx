"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2, Send } from "lucide-react";
import { MotionView } from "../ui/motion-view";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
    } else if (state?.message && !state.success) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <MotionView>
          <h2 className="font-headline text-center text-4xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl">
            Have a question or a project in mind? Let's talk.
          </p>
        </MotionView>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <MotionView delay={0.2}>
            <div className="flex h-full flex-col justify-center text-left">
              <h3 className="text-3xl font-bold">Contact Information</h3>
              <p className="mt-4 text-muted-foreground">
                You can reach out to us via email or through the contact form. We're always excited to hear about new ideas.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a
                    href="mailto:contact@doubledairy.digital"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    contact@doubledairy.digital
                  </a>
                </div>
              </div>
            </div>
          </MotionView>
          <MotionView delay={0.4}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form action={formAction} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your project..." {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <SubmitButton />
                  </form>
                </Form>
              </CardContent>
            </Card>
          </MotionView>
        </div>
      </div>
    </section>
  );
}
