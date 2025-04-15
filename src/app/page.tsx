// app/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'SkugVPN - 검열 해방, 로그 없는 VPN',
  description: 'SkugVPN은 감시와 추적으로부터 당신을 지킵니다. 최고의 난독화 기술과 무로그 정책으로 프라이버시를 보호하세요.',
  openGraph: {
    title: 'SkugVPN',
    description: '감시 없는 자유로운 인터넷',
    url: 'https://skugvpn.com',
    siteName: 'SkugVPN',
    images: [
      {
        url: 'https://skugvpn.com/',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkugVPN',
    description: '감시 없는 자유로운 인터넷',
    images: ['https://skugvpn.com/'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 shadow z-10">
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.svg" alt="SkugVPN Logo" className="h-8 w-8" /> */}
          <span className="font-bold text-lg">SkugVPN</span>
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

      <main>
        {/* Hero */}
        <section className="bg-teal-400 text-black px-8 py-24 pt-40">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

            <div>
              <h1 className="text-5xl font-extrabold mb-6">검열 해방</h1>
              <p className="text-xl mb-8 leading-relaxed">
                SkugVPN은 감시, 추적, 빅데이터 수집에서 당신을 해방시킵니다.<br />
                당신의 온라인 활동은 상품이 아닙니다.<br />
                프라이버시는 선택이 아닌, 기본권입니다.
              </p>
              <Link href="/start" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">
                지금 시작하기
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-teal-400 text-black px-8 py-24 ">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">SkugVPN을 선택할 이유</h3>
              <p className="leading-relaxed mb-6">
                당신의 IP는 당신의 신분증입니다.<br />
                SkugVPN은 그것을 완전히 숨깁니다.<br />
                단순한 VPN이 아닌, 진짜 프라이버시 솔루션입니다.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">프라이버시는 선택이 아닙니다</h3>
              <p className="leading-relaxed">
                모든 온라인 행동은 추적되고 저장됩니다.<br />
                SkugVPN은 기록되지 않는 자유를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white text-blue-900 px-8 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-10">SkugVPN을 시작하는 건 진짜 쉽습니다</h2>

            <div className="space-y-10 text-left">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-yellow-400">1</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">계정 없이 시작</h3>
                  <p>SkugVPN은 이메일, 전화번호 없이 시작합니다. 키 하나로 접속하고 끝.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-yellow-400">2</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">정가 7,000원 (약 6 CHF)</h3>
                  <p>환율 상관없이 월 7,000원.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-yellow-400">3</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">앱 설치하고 바로 사용</h3>
                  <p>다운로드 후 즉시 접속 가능. 설정 없이 바로 익명성 확보.</p>
                </div>
              </div>
            </div>

            <Link href="/start" className="inline-block mt-12 bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">
              지금 시작하기
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}