/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@/core/types";
import { Section } from "../../components/Section";

export type FeaturesProps = {
  title: string;
  description: string;
  padding: string;
  features: {
    title?: string;
    text?: string;
    href?: string;
    variant?: "primary" | "secondary";
  }[];
};

export const Features: ComponentConfig<FeaturesProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    features: {
      type: "array",
      min: 1,
      max: 6,
      getItemSummary: (item) => item.title || "Feature",
      arrayFields: {
        title: { type: "text" },
        text: { type: "textarea" },
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
        title: "Feature title",
        text: "Filler text is dummy text which has no meaning however looks very similar to real text.",
        href: "#",
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    title: "Impress your clients here",
    description: "Use message that triggers your clients to take action. You can use this space to introduce your product or service, and display the key benefits that your clients will get.",
    features: [{ title: "Book demo", text: "text", href: "#", variant: "primary" }, { title: "Discover", text: "text", href: "#", variant: "secondary" }],
    padding: "64px",
  },
  render: ({title, description, features, padding, puck}) => {
    // Empty state allows us to test that components support hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <Section
            padding={padding}
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              {features && features.map((feature, i) => (
                  <div key={i} className="flex flex-col rounded-lg border p-4 md:p-6">
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">{feature.title}</h3>
                    <p className="mb-4 text-gray-500">{feature.text}</p>
                    <a href={feature.href ?? '#'}
                       className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Voir plus</a>
                  </div>
              ))}
            </div>
          </div>
        </Section>
    );
  },
};
