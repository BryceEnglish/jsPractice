import '@/app/ui/global.css';
import {inter, fira} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} antialiased`}>{children}</body>
    </html>
  );
}
