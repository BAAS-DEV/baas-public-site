export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto ">{children}</div>
    </div>
  );
}
