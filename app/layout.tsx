import "./globals.css";
import ThirdWebProvide from "./thirdwebprovide";

export const metadata = {
  title: "Shingby Lottery Dapp",
  description: "Play Lotto with Crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#091B18] min-h-screen flex flex-col">
        <ThirdWebProvide> {children} </ThirdWebProvide>
      </body>
    </html>
  );
}
