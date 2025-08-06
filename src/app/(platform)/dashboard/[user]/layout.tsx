// TAKES ITS SEGMENT PAGE AS CHILDREN PROPS
// ALSO WILL TAKES ANALYTICS, MISC  AND TRANSACTION

function DashboardLayout({
  children,
  analytics,
  misc,
  transactions,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  misc: React.ReactNode;
  transactions: React.ReactNode;
}) {
  return (
    <div className="border-2 border-blue-700 h-full">
      <div>{children}</div>
      <div>{analytics}</div>
      <div>{misc}</div>
      <div>{transactions}</div>
    </div>
  );
}

export default DashboardLayout;
