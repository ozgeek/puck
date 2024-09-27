/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@/core/types";
import { Section } from "../../components/Section";

export type HeroTailwindProps = {
  title: string;
  description: string;
  subtitle?: string;
  align?: string;
  padding: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    more?: { text: string }[];
  }[];
};

export const HeroTailwind: ComponentConfig<HeroTailwindProps> = {
  fields: {
    subtitle: { type: "text" },
    title: { type: "text" },
    description: { type: "textarea" },
    buttons: {
      type: "array",
      min: 1,
      max: 4,
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "primary", value: "primary" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: { type: "text" },
        mode: {
          type: "radio",
          options: [
            { label: "inline", value: "inline" },
            { label: "background", value: "background" },
          ],
        },
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    subtitle: 'Very proud to introduce',
    title: "Impress your clients here",
    align: "left",
    description: "Use message that triggers your clients to take action. You can use this space to introduce your product or service, and display the key benefits that your clients will get.",
    buttons: [{ label: "Book demo", href: "#", variant: "primary" }, { label: "Discover", href: "#", variant: "secondary" }],
    padding: "64px",
  },
  render: ({ align, title, description, buttons, padding, image, puck , subtitle}) => {
    // Empty state allows us to test that components support hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <Section
            padding={padding}
        >
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">{subtitle}</p>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{title}</h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">{description}</p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                {buttons.map((button, i) => (
                    <a
                        key={i}
                        href={button.href}
                        className={"inline-block rounded-lg md:text-base " + (button.variant == "primary" ? 'bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 ' : 'bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700')}>{button.label}</a>
                ))}
              </div>
            </div>

            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img src={image?.url || 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000'}
                   loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center"/>
            </div>
          </section>
        </Section>
    );
  },
};
