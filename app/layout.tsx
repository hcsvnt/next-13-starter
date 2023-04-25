import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'next 13 starter',
    description: 'by hcsvnt',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
