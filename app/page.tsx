"use client"
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Page(){
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // 检查当前路由是否为根目录
        if (pathname === '/') {
            // 如果是根目录，重定向到 /login
            router.push('/home');
        }
    }, [])

    return <></>
}
