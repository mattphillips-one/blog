import {
    Outfit,
    Ovo,
    Roboto_Mono,
    Cousine,
    Nunito_Sans,
    Lato,
    Space_Mono,
    Montserrat,
    Lora,
    Cutive_Mono,
    Source_Code_Pro,
    Radley,
    Castoro,
    Lusitana,
} from 'next/font/google';

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400"]
});

export const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500"]
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"]
});

export const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: "400"
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"]
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400"]
});

export const cutive_mono = Cutive_Mono({
    subsets: ["latin"],
    weight: ['400']
});

export const source_code_pro = Source_Code_Pro({
    subsets: ["latin"],
    weight: ["300"]
});

export const radley = Radley({
    subsets: ["latin"],
    weight: ["400"]
});

export const castoro = Castoro({
    subsets: ["latin"],
    weight: ["400"]
});

const lusitana = Lusitana({
    subsets: ["latin"],
    weight: ["400"]
})

export const fonts = {
  outfit: lato.className,
  ovo: ovo.className,
  roboto: roboto.className,
  cousine: cousine.className,
  nunito_sans: nunito_sans.className,
  lato: lato.className,
  space_mono: space_mono.className,
  montserrat: montserrat.className,
  lora: lora.className,
  cutive_mono: cutive_mono.className,
  source_code_pro: source_code_pro.className,
  radley: radley.className,
  castoro: castoro.className,
  lusitana: lusitana.className,
  montserrat_body: `${montserrat.className} font-light text-base/7 tracking-wide`,
  roboto_body: `${roboto.className} font-light text-sm/6`,
  lato_body: `${lato.className} font-light text-lg`,
  section_header: `${roboto.className} text-2xl font-base dark:text-stone-50 text-right mr-6 md:mr-10 mt-3 mb-6 tracking-tight`,
  header_text: `${nunito_sans.className} text-3xl tracking-wide`
}