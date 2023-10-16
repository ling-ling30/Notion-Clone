export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body className="bg-red-500 text-red-100">{children}</body>;
}
