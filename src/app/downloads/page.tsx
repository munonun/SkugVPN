"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DownloadIcon } from "lucide-react"

const OS_LIST = ["windows", "macOS", "linux", "android", "iOS"] as const




export default function DownloadPage() {
  const [os, setOs] = useState<(typeof OS_LIST)[number]>("windows")

  return (
    <>
      {/* Hero Bar 상단 고정 헤더 */}
      <header className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 shadow z-10">
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold text-lg">SkugVPN</Link>
        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/account/login" className="hover:underline">시작하기</Link>
          <Link href="/downloads" className="hover:underline">다운로드</Link>
          <Link href="/prices" className="hover:underline">가격</Link>
          <Link href="/contact" className="hover:underline">문의</Link>
          <Link
            href="/account/login"
            className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            시작하기
          </Link>
        </nav>
      </header>

      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-black px-6 py-12 pt-40">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">SkugVPN 다운로드</h1>
          <p className="text-lg text-white mb-10">너구리처럼 은밀하게, Skug처럼 빠르게 🦝</p>

          <Tabs value={os} onValueChange={(val) => {
  if (OS_LIST.includes(val as typeof OS_LIST[number])) {
    setOs(val as typeof OS_LIST[number])
  }
}} className="mb-8">
            <TabsList className="flex justify-center gap-4 flex-wrap">
              {OS_LIST.map((platform) => (
                <TabsTrigger key={platform} value={platform} className="capitalize">
                  {platform}
                </TabsTrigger>
              ))}
            </TabsList>

            {OS_LIST.map((platform) => (
              <TabsContent key={platform} value={platform}>
                <DownloadCard os={platform} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}

function DownloadCard({ os }: { os: string }) {
  return (
    <Card className="border-white/20 text-left max-w-xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold capitalize mb-2">{os}용 SkugVPN</h2>
        <p className="text-sm text-black mb-4">최신 버전: 2025.4 — 64비트 전용</p>

        <div className="flex items-center gap-3">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <DownloadIcon className="mr-2 h-4 w-4" /> 다운로드
          </Button>
          <a href="#" className="text-sm underline text-black">
            설치 가이드 보기
          </a>
        </div>

        <p className="text-xs text-black mt-4">
          서명된 바이너리 제공 / 오픈소스 검증 완료
        </p>
      </CardContent>
    </Card>
  )
}