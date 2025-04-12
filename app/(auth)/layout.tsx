import Logo from '@/components/Logo';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <Logo />

      {children}
    </div>
  );
};

export default AuthLayout;