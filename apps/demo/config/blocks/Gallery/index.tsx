/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@/core/types";
import { Section } from "../../components/Section";

export type GalleryProps = {
  title: string;
  description: string;
  padding: string;
  images?: [{
    url?: string;
    title?: string;
  }];
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    more?: { text: string }[];
  }[];
};

export const Gallery: ComponentConfig<GalleryProps> = {
  fields: {
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
    images: {
      type: "array",
      arrayFields: {
          url: { type: "text" },
          title: { type: "text" },
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    title: "Impress your clients here",
    description: "Use message that triggers your clients to take action. You can use this space to introduce your product or service, and display the key benefits that your clients will get.",
    buttons: [{ label: "Book demo", href: "#", variant: "primary" }, { label: "Discover", href: "#", variant: "secondary" }],
    padding: "64px",
    images: [{url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600'}]
  },
  render: ({ title, description, buttons, padding, images, puck}) => {
    // Empty state allows us to test that components support hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <Section
            padding={padding}
        >
          <div className="mx-autopx-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 mb-10 md:mb-16">
              {images && images.map((image, i) => (
                  <a
                      key={i}
                      href="#"
                     className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                    <img
                        src={image.url || 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000'}
                        loading="lazy" alt="Photo by Minh Pham"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    {image.title && <span
                        className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">{image.title}</span>}
                  </a>
              ))}
            </div>
            {buttons && <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center items-center">
              {buttons.map((button, i) => (
                  <a
                      key={i}
                      href={button.href}
                      className={"inline-block rounded-lg md:text-base " + (button.variant == "primary" ? 'bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 ' : 'bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700')}>{button.label}</a>
              ))}
            </div>}
          </div>
        </Section>
    );
  },
};
