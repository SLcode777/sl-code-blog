"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";

const formSchema = z.object({
  contactName: z
    .string()
    .min(2, {
      message: "Le nom d'utilisateur doit avoir au moins 2 caractères",
    })
    .max(25, {
      message: "le nom d'utilisateur doit avoir maximum 25 caractères",
    }),
  contactMail: z.string().email({ message: "adresse mail invalide" }),
  contactMessage: z
    .string()
    .min(2, { message: "Le message doit avoir au moins 2 caractères" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      contactMail: "",
      contactMessage: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //gérer le on submit (envoi d'un mail vers ma boite mail + toast sonner)
  }

  return (
    <>
      <div className="flex flex-row shadow-2xl rounded-xl">
        <div
          id="form"
          className="flex flex-col bg-stone-900 rounded-l-xl w-96 p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-orange-200">
            J&apos;ai hâte d&apos;entendre vos idées !
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-white border-none rounded-full font-semibold text-md placeholder:text-stone-900 placeholder:text-lg placeholder:text-wrap -mb-3"
                        placeholder="Votre nom"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="contactMail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-white border-none rounded-full font-semibold text-md placeholder:text-stone-900 placeholder:text-lg placeholder:text-wrap -mb-3"
                        placeholder="Votre e-mail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="contactMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="textarea"
                        className="bg-white border-none rounded-2xl font-semibold h-48 text-md text-wrap placeholder:text-stone-900 placeholder:text-lg placeholder:text-wrap placeholder-top  p-4 leading-normal "
                        placeholder="Laissez-moi vos coordonnées et je vous recontacte rapidement pour discuter de votre projet !"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <button
                type="submit"
                className="bg-orange-200 text-stone-900 font-semibold tracking-wide py-2 rounded-full w-full hover:bg-orange-500"
              >
                Envoyer
              </button>
            </form>
          </Form>
        </div>
        <div className="rounded-r-xl overflow-hidden">
          <Image
            src="/img/lucy-call.webp"
            alt="contact"
            width={350}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
