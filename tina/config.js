import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "skills",
        label: "Skills",
        path: "/src/content/skills",
        fields: [
          {
            type: "string",
            name: "skill",
            label: "Skill",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "about",
            label: "About",
            isTitle: false,
            isBody: false,
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
            isTitle: false,
            isBody: false,
            required: true,
          },
          {
            type: "string",
            name: "textColor",
            label: "textColor",
            isTitle: false,
            isBody: false,
            required: true,
          },
          {
            type: "string",
            name: "bgColor",
            label: "bgColor",
            isTitle: false,
            isBody: false,
            required: true,
          },
        ],
      },
      {
        name: "personalInfo",
        label: "Personal Information",
        path: "/src/content/personalInfo",
        ui: {
          // Don't allow editors to create new items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "information",
            label: "Personal Info",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "profession",
                label: "Profession",
                required: true,
              },
              {
                type: "string",
                name: "email",
                label: "Email",
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                required: true,
              },
              {
                type: "string",
                name: "birthday",
                label: "Birthday",
                required: true,
              },
              {
                type: "object",
                name: "socialMedia",
                label: "Social Media",
                required: true,
                isList: true,
                fields: [
                  {
                    name: "instagram",
                    label: "Instagram",
                    type: "string",
                  },
                  {
                    name: "linkedin",
                    label: "LinkedIn",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "About Me",
            isBody: true,
            required: true,
          },
        ],
      },
      {
        name: "blogs",
        label: "Blogs",
        path: "/src/content/blogs",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            label: "Date",
            type: "datetime",
            required: true,
          },
          {
            name: "category",
            label: "Category",
            type: "string",
            required: true,
          },
          {
            name: "previewimg",
            label: "Preview image",
            type: "image",
            required: true,
          },
          {
            name: "img",
            label: "Image",
            type: "image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            required: true,
          },
          {
            name: "link",
            label: "Link",
            type: "string",
            required: true,
          },
        ],
      },
      {
        name: "education",
        label: "Education",
        path: "/src/content/education",
        fields: [
          {
            name: "year",
            label: "Year",
            type: "string",
          },
          {
            name: "title",
            label: "Course",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "subTitle",
            label: "University/School Name",
            type: "string",
          },
          {
            name: "bgColor",
            label: "Background Color",
            type: "string",
          },
        ],
      },
      {
        name: "experience",
        label: "Experience",
        path: "/src/content/experience",
        fields: [
          {
            name: "year",
            label: "Year",
            type: "string",
          },
          {
            name: "title",
            label: "Role",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "subTitle",
            label: "Company",
            type: "string",
          },
          {
            name: "bgColor",
            label: "Background Color",
            type: "string",
          },
        ],
      },
      {
        name: "menu",
        label: "Menu",
        path: "/src/content/menu",
        ui: {
          // Don't allow editors to create new items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            name: "name",
            label: "Name",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "link",
            label: "Link",
            type: "string",
            required: true,
          },
          {
            name: "icon",
            label: "Icon",
            type: "string",
            required: true,
          },
        ],
      },
      {
        name: "portfolioFilters",
        label: "Portfolio Filters",
        path: "/src/content/portfolioFilters",
        fields: [
          {
            name: "name",
            label: "Name",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "tag",
            label: "Tag",
            type: "string",
          },
        ],
      },
      {
        name: "works",
        label: "Portfolio",
        path: "/src/content/works",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "category",
            label: "Category",
            type: "string",
            required: true,
          },
          {
            name: "tag",
            label: "Tag",
            type: "string",
            required: true,
          },
          {
            name: "previewimg",
            label: "Preview image",
            type: "image",
            required: true,
          },
          {
            name: "img",
            label: "Image",
            type: "image",
          },
          {
            name: "client",
            label: "Client",
            type: "string",
            required: true,
          },
          {
            name: "outils",
            label: "Outils",
            type: "string",
          },
          {
            name: "apercu",
            label: "Aperçu",
            type: "string",
          },
          {
            name: "linkapercu",
            label: "Link aperçu",
            type: "string",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            required: true,
          },
          {
            name: "link",
            label: "Link",
            type: "string",
            required: true,
          },
        ],
      },
    ],
  },
});
