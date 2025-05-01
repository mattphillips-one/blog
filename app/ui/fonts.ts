import { Outfit, Ovo, Roboto_Mono, Cousine, Nunito_Sans, Lato, Space_Mono, Montserrat, Lora } from 'next/font/google';

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
  montserrat_body: `${montserrat.className} font-light text-base/7 tracking-wide`,
  roboto_body: `${roboto.className} font-light text-sm/6`,
  lato_body: `${lato.className} font-light text-lg`,
  section_header: `${roboto.className} text-2xl font-normal text-stone-800 text-right mr-10 mt-3 mb-6 tracking-tight`
}