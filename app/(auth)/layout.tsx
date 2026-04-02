
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
          <div className="max-w-sm h-screen flex items-center mx-auto ">
          {children}
          </div>
        
    );
  }