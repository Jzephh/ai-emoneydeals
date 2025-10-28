export function gaEvent(name: string, params: Record<string, any> = {}) {
    const extra = process.env.NODE_ENV !== "production" ? { debug_mode: true } : {};

    console.log(extra);

    (window as any).gtag?.("event", name, { ...params, ...extra });
}

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useGaPageview(measurementId?: string) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        if (!(window as any).gtag || !measurementId) return;
        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
        (window as any).gtag("config", measurementId, { page_path: url });
    }, [pathname, searchParams, measurementId]);
}