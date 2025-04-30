import { Outfit, Ovo, Roboto_Mono, Cousine, Source_Code_Pro, Nunito_Sans } from 'next/font/google';

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400"]
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