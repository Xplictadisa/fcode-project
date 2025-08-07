// TAKES ITS SEGMENT PAGE AS CHILDREN PROPS
// ALSO WILL TAKES ANALYTICS, MISC  AND TRANSACTION

import AnalyticsMisc from "@/src/component/ui/analytics/analyticsMisc";
import Analytics from "@/src/component/ui/analytics/analyticsStat";
import Transactions from "@/src/component/ui/transaction/transaction";

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  misc: React.ReactNode;
  transactions: React.ReactNode;
}) {
  return (
    <div className="h-full overflow-hidden">
      <div style={{scrollbarWidth: "none"}} className="h-full overflow-auto p-3 *:mb-9">
        <div>{children}</div>
        <AnalyticsMisc />
        <Analytics />
        <Transactions />
      </div>
    </div>
  );
}

export default DashboardLayout;
