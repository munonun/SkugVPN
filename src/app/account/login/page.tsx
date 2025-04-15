import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-40">로딩 중...</div>}>
      <LoginForm />
    </Suspense>
  );
}
