import { groq } from "next-sanity";
import { Block, Builder, Types } from "@multiverse/shared-verse";

export const FOOTER_QUERY = groq`*[_type == '${Builder.FOOTER_BUILDER.type}'].${Block.FOOTER_CONTENT.type}[] {
    _key,
    _type,
    'title': basicTitle,
    'items': item,
    'platforms': platforms
}`;

export const HOME_QUERY = groq`*[_type == '${Builder.PAGE_BUILDER.type}' && title == 'Hjem'][0]`;

export const NAVBAR_QUERY = groq`
    *[_type == '${Types.MENU.name}']{
        items[]->{
            title,
            'urlSlug': urlSlug.current
        },
        cta {
            'title': page->title,
            'text': basicTitle,
            'urlSlug': page->urlSlug.current
        }
    }
`;

export const SLUG_QUERY = (slug: string) =>
  groq`*[_type == '${Builder.PAGE_BUILDER.type}' && ${Types.URL.type}.current == '${slug}'].${Types.CONTENT.type}`;

export const URL_SLUG_QUERY = groq`
    *[_id == $ref] {
        'urlSlug': urlSlug.current
    }
`;
