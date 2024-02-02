interface ContentModelInput {
  name: string;
  title: string;
}

interface ContentModel {
  name: string;
  type: string;
  title: string;
}

type ContentCollection = {
  [key: string]: ContentModel;
};

const generateTypeWithName = ({
  name,
  title,
}: ContentModelInput): ContentModel => ({
  name,
  type: name,
  title,
});

// Shared Enums
export enum ImageAlignment {
  Left = "left",
  Right = "right",
}

export enum SoMePlatform {
  Facebook = "facebook",
  Instagram = "instagram",
  LinkedIn = "linkedin",
  YouTube = "youtube",
  Snapchat = "snapchat",
  Pinterest = "pinterest",
  Medium = "medium",
  TikTok = "tiktok",
}

// Builder Types
export const Builder: ContentCollection = {
  PAGE_BUILDER: generateTypeWithName({
    name: "pages",
    title: "Pages",
  }),
  SEGMENT_BUILDER: generateTypeWithName({
    name: "segmentBuilder",
    title: "Segment Builder",
  }),
  FOOTER_BUILDER: generateTypeWithName({
    name: "footer",
    title: "Footer",
  }),
};

// Shared Types
export const Types: ContentCollection = {
  ALIGNMENT: generateTypeWithName({ name: "alignment", title: "Alignment" }),
  BASIC_CONTENT: generateTypeWithName({
    name: "basicContent",
    title: "Content",
  }),
  BASIC_CONTENT_LIST: generateTypeWithName({
    name: "basicContentList",
    title: "Content",
  }),
  BASIC_IMAGE: generateTypeWithName({
    name: "basicImage",
    title: "Image",
  }),
  BASIC_TITLE: generateTypeWithName({ name: "basicTitle", title: "Title" }),
  CONTENT: generateTypeWithName({ name: "content", title: "Content" }),
  EXTENDED_EXTERNAL_LINK: generateTypeWithName({
    name: "extendedExternalLink",
    title: "External Link",
  }),
  EXTENDED_INTERNAL_LINK: generateTypeWithName({
    name: "extendedInternalLink",
    title: "Internal Link",
  }),
  EXTENDED_LINK: generateTypeWithName({
    name: "extendedLink",
    title: "Link title",
  }),
  EXTERNAL_LINK: generateTypeWithName({
    name: "externalLink",
    title: "External Link",
  }),
  FREE_TEXT: generateTypeWithName({ name: "freeText", title: "Free text" }),
  IMAGE: generateTypeWithName({ name: "basicImage", title: "Image" }),
  IMAGE_CONTENT: generateTypeWithName({
    name: "imageContent",
    title: "Content",
  }),
  IMAGE_LINK_CONTENT: generateTypeWithName({
    name: "imageLinkContent",
    title: "Content",
  }),
  INTERNAL_LINK: generateTypeWithName({
    name: "internalLink",
    title: "Internal Link",
  }),
  ITEM: generateTypeWithName({ name: "item", title: "Item" }),
  ITEMS: generateTypeWithName({ name: "items", title: "Items" }),
  LIST: generateTypeWithName({ name: "list", title: "List" }),
  LIST_OF_LINKS: generateTypeWithName({ name: "listOfLinks", title: "Links" }),
  LINK: generateTypeWithName({ name: "link", title: "Add link" }),
  LINK_TITLE: generateTypeWithName({ name: "linkTitle", title: "Title" }),
  MENU: generateTypeWithName({ name: "menu", title: "Menu" }),
  OPTIONAL_SUBTITLE: generateTypeWithName({
    name: "subtitle",
    title: "Subtitle",
  }),
  OPTIONAL_TITLE: generateTypeWithName({
    name: "optionalTitle",
    title: "Title",
  }),
  PATHS: generateTypeWithName({ name: "paths", title: "Paths" }),
  PLATFORMS: generateTypeWithName({ name: "platforms", title: "Platforms" }),
  PORTABLE_TEXT: generateTypeWithName({
    name: "portableText",
    title: "Text",
  }),
  SOCIAL_MEDIA: generateTypeWithName({
    name: "socialMedia",
    title: "Social Media",
  }),
  TAGLINE: generateTypeWithName({ name: "tagline", title: "Tagline" }),
  TEXT: generateTypeWithName({ name: "text", title: "Text" }),
  THEME: generateTypeWithName({ name: "theme", title: "Theme" }),
  TITLE: generateTypeWithName({ name: "basicTitle", title: "Title" }),
  URL: generateTypeWithName({ name: "urlSlug", title: "Link to" }),
};

// Block Types
export const Block: ContentCollection = {
  ARTICLE: generateTypeWithName({ name: "articleBlock", title: "Article" }),
  BLOG_POSTS: generateTypeWithName({
    name: "blogPostBlock",
    title: "Blog Posts",
  }),
  CALL_TO_ACTION: generateTypeWithName({
    name: "callToActionBlock",
    title: "Call to Action",
  }),
  FEATURES: generateTypeWithName({ name: "featuresBlock", title: "Features" }),
  FOOTER_CONTENT: generateTypeWithName({
    name: "footerContent",
    title: "Content",
  }),
  HERO: generateTypeWithName({ name: "heroBlock", title: "Hero" }),
  LIST: generateTypeWithName({ name: "listBlock", title: "List of links" }),
  SNIPPET: generateTypeWithName({ name: "snippetBlock", title: "Snippet" }),
};

// Extract Types
type ExtractType<T extends Record<string, { type: string }>> = {
  [K in keyof T]: T[K]["type"];
};

// List of TYPES
export type BlockType = ExtractType<typeof Block>;
export type BuilderType = ExtractType<typeof Builder>;

// List of Keys
export type BuilderKeys = keyof typeof Block;
export type SharedKeys = keyof typeof Types;
export type BlockKeys = keyof typeof Block;
