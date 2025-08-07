import Card from "@/src/component/ui/card";

function Analytics() {
  return (
    <Card>
      {/* title and date */}
      <div className="flex justify-between items-center mb-3">
        <p>Analytics</p>
        <p className="border border-black text-center w-30">date</p>
      </div>
      {/* total plot and transactios */}
      <div className="flex gap-3 *:border *: border-black *:p-3 mb-3">
        <div>total plots</div>
        <div>total transactions</div>
      </div>
      {/* chart */}
      <div className="h-60 border border-red-600 text-center p-2">CHART</div>
    </Card>
  );
}

export default Analytics;