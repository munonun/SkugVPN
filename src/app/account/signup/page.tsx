'use client';
import { useState } from 'react';
import Link from 'next/link';

function generateKey(): string {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 14; i++) {
    key += charset[Math.floor(Math.random() * charset.length)];
  }
  return key;
}

function formatKey(key: string): string {
  return key.match(/.{1,4}/g)?.join('-') ?? key;
}

export default function SignupPage() {
  const [key, setKey] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const newKey = generateKey();
    setKey(newKey);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
  };

  const hasKey = key.length > 0;

  return (
    <>
    <title>SkugVPN 회원가입</title>

      {/* Hero Bar */}
      <header className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 shadow z-10">
        <div className="flex items-center space-x-2">
        <Link href="/" className="font-bold text-lg">SkugVPN</Link>
        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="hover:underline">홈</Link>
          <Link href="/downloads" className="hover:underline">다운로드</Link>
          <Link href="/contact" className="hover:underline">문의</Link>
          <Link
            href="/account/signup"
            className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            시작하기
          </Link>
        </nav>
      </header>

      <main className="bg-white text-blue-900 px-6 pt-40 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">SkugVPN 시작하기</h1>
          <p className="text-center text-gray-600 text-sm">
            키 하나로 시작할 수 있는 SkugVPN. 다음 단계를 따라 시작해보세요!
          </p>

          {/* 1단계: 키 생성 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">1. 키 생성</h2>
            <p className="mb-4 text-gray-700">SkugVPN을 사용하기 위한 임의의 키를 생성합니다.</p>
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={handleGenerate}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                키 생성하기
              </button>
              {hasKey && (
                <>
                  <span className="font-mono text-lg bg-gray-100 px-4 py-2 rounded border">
                    {formatKey(key)}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {copied ? '복사됨!' : '복사'}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* 키가 생성된 후만 보여짐 */}
          {hasKey && (
            <>
              {/* 2단계 */}
              <div>
                <h2 className="text-2xl font-bold mb-2">2. 요금제 추가</h2>
                <p className="mb-4 text-gray-700">
                  SkugVPN은 월 6,000원(세금 포함) 정액제로 운영됩니다. 키를 입력 후 요금제 결제를 진행하세요.
                </p>
                <Link
                  href="/account/login"
                  className="bg-blue-100 px-4 py-2 rounded text-blue-900 font-semibold hover:bg-blue-200"
                >
                  라이선스 등록
                </Link>
              </div>

              {/* 3단계 */}
              <div>
                <h2 className="text-2xl font-bold mb-2">3. 앱 다운로드</h2>
                <p className="mb-4 text-gray-700">
                  모든 플랫폼에서 사용할 수 있는 SkugVPN 앱을 설치하세요.
                </p>
                <Link
                  href="/downloads"
                  className="bg-blue-100 px-4 py-2 rounded text-blue-900 font-semibold hover:bg-blue-200"
                >
                  앱 다운로드
                </Link>
              </div>

              {/* 4단계 */}
              <div>
                <h2 className="text-2xl font-bold mb-2">4. 앱에서 연결</h2>
                <p className="text-gray-700">
                  앱 실행 → 키 입력 → 연결 버튼 클릭!<br />
                  자세한 가이드는 앱 내에서 확인할 수 있어요.
                </p>
              </div>
            </>
          )}
        </div>
        <p className="text-sm text-gray-600 text-center bold lg">
  이미 키가 있으신가요?{' '}
  <Link href="/account/login" className="text-blue-700 hover:underline font-medium">
    로그인하러 가기
  </Link>
</p>
      </main>
    </>
  );
}
