import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import Footer from '@/components/Footer';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({
                                            children
                                        }: PropsWithChildren<{
    breadcrumbs?: BreadcrumbItem[];
}>) {
    return (
        <AppShell>
            <AppHeader />
            <AppContent>{children}</AppContent>
            <div className="mt-36"></div>
            <Footer />
        </AppShell>
    );
}
