import { Outfit, Ovo, Roboto_Mono, Cousine, Source_Code_Pro, Nunito_Sans, Lato } from 'next/font/google';

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

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"]
});

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500"]
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300"]
})

export const themes = {
  roboto_body: `${roboto.className} font-light text-sm/6`,
  lato_body: `${lato.className} font-light text-lg`
}