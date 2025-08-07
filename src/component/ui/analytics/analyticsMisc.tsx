// THE MISCELLANEOUS ->
// TOTAL PLOT
// TOTAL INVESTORS
// TOTAL TRANSACTIONS
// TOTAL AGENT
import Card from "@/src/component/ui/card";

function AnalyticsMisc() {
  return (
    <div className="grid grid-cols-[repeat(4,1fr)] gap-5 *:p-5 border-2 p-2 border-black">
      <Card>TOTAL PLOT</Card>
      <Card>TOTAL INVESTORS</Card>
      <Card>TOTAL TRANSACTIONS</Card>
      <Card>TOTAL AGENT</Card>
    </div>
  );
}

export default AnalyticsMisc;
