import Card from "@/src/component/ui/card";

function Transactions() {
  return (
    <Card>
      <div>
        <p className="font-semibold mb-2">Transactions</p>
        {/*  */}
        <div className="border border-orange-500 flex justify-between items-center p-2 mb-2">
          <div className="w-30 border border-emerald-800">search</div>
          <div className="border border-emerald-800">filter</div>
        </div>
        {/* transaction table */}
        <div className="border border-amber-600 h-50 mb-2 text-center">
          <p>transactions table</p>
        </div>
        {/* pagination */}
        <div className="border border-t-green-700 h-9 flex justify-end">
          <p className="p-2">Pagination</p>
        </div>
      </div>
    </Card>
  );
}

export default Transactions;
