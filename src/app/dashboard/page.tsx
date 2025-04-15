'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [key, setKey] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedKey = localStorage.getItem('skug-key');
    if (storedKey) {
      setKey(storedKey);
    } else {
      router.push('/account/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('skug-key');
    router.push('/');
  };

  return (
    <>
      {/* Hero Bar */}
      <header className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 shadow z-10">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">SkugVPN</span>
        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="hover:underline">홈</Link>
          <Link href="/downloads" className="hover:underline">다운로드</Link>
          <Link href="/contact" className="hover:underline">문의</Link>
          <button
            onClick={handleLogout}
            className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            로그아웃
          </button>
        </nav>
      </header>

      {/* 본문 */}
      <main className="bg-white text-blue-900 px-6 pt-40 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold">SkugVPN 대시보드</h1>

          {/* 키 확인 */}
          <div>
            <h2 className="text-xl font-bold mb-2">내 키</h2>
            <p className="font-mono bg-gray-100 px-4 py-2 rounded border inline-block">
              {key.match(/.{1,4}/g)?.join('-')}
            </p>
          </div>

          {/* 연결 상태 */}
          <div>
            <h2 className="text-xl font-bold mb-2">연결 상태</h2>
            <p className="text-green-600">앱 연결됨 (표시용)</p>
          </div>

          {/* 라이선스 상태 및 결제 */}
          <div>
            <h2 className="text-xl font-bold mb-2">라이선스 등록</h2>
            <p className="mb-4">SkugVPN은 월 ₩6,000의 고정 요금제로 운영됩니다.</p>

            <p className="text-sm text-gray-600 mb-2">
              현재 상태: <span className="text-green-600 font-semibold">활성화됨</span>
            </p>

            <button
              onClick={() => alert('결제 시스템은 아직 연결되지 않았습니다.')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              ₩6,000 라이선스 등록하기
            </button>
          </div>

          {/* 앱 다운로드 */}
          <div>
            <h2 className="text-xl font-bold mb-2">앱 다운로드</h2>
            <Link
              href="/downloads"
              className="bg-blue-100 px-4 py-2 rounded text-blue-900 font-semibold hover:bg-blue-200"
            >
              다운로드 페이지로 가기
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}