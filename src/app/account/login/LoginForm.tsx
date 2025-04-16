'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const prefill = searchParams.get('key');
    if (prefill) setKey(prefill);
  }, [searchParams]);

  const handleLogin = () => {
    const cleanKey = key.replace(/-/g, '');
    if (cleanKey.length === 14 && /^[a-z0-9]+$/.test(cleanKey)) {
      localStorage.setItem('skug-key', cleanKey);
      router.push('/dashboard');
    } else {
      setError('잘못된 키입니다. 14자리 소문자+숫자 조합이어야 합니다.');
    }
  };

  return (
    <>
      <title>SkugVPN 로그인</title>
      <header className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 shadow z-10">
        <div className="flex items-center space-x-2">
        <Link href="/" className="font-bold text-lg">SkugVPN</Link>
        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="hover:underline">홈</Link>
          <Link href="/downloads" className="hover:underline">다운로드</Link>
          <Link href="/contact" className="hover:underline">문의</Link>
          <Link href="/account/signup" className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
            시작하기
          </Link>
        </nav>
      </header>

      <main className="bg-white text-blue-900 px-6 pt-40 pb-24 min-h-screen">
        <div className="max-w-xl mx-auto space-y-6 text-center">
          <h1 className="text-3xl font-bold">SkugVPN 로그인</h1>
          <p className="text-gray-600 text-sm">생성한 키를 입력하세요. 계정 없이 로그인됩니다.</p>
          <input
            type="text"
            placeholder="예: skug-2l93zj1f0vnbd4"
            className="border px-4 py-2 rounded w-full text-center font-mono"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button onClick={handleLogin} className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">
            로그인
          </button>
        </div>
        <br />
        <p className="text-sm text-gray-600 text-center bold xl">
          아직 키가 없으신가요?{' '}
          <Link href="/account/signup" className="text-blue-700 hover:underline font-medium">키 생성하러 가기</Link>
        </p>
      </main>
    </>
  );
}
