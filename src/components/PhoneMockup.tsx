export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px]">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl p-3">
        {/* Screen */}
        <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/5 flex items-center justify-between px-6 text-xs">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 border border-gray-400 rounded-sm" />
            </div>
          </div>

          {/* App Content */}
          <div className="pt-12 px-6 h-full">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Budgy</h3>
              <p className="text-sm text-gray-600">Your Budget Manager</p>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 mb-6 shadow-lg">
              <p className="text-blue-100 text-sm mb-2">Total Balance</p>
              <p className="text-white text-3xl font-bold mb-4">$4,250.00</p>
              <div className="flex gap-3">
                <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-blue-100 text-xs">Income</p>
                  <p className="text-white font-semibold">$5,400</p>
                </div>
                <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-blue-100 text-xs">Expenses</p>
                  <p className="text-white font-semibold">$1,150</p>
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Transactions</h4>
              <div className="space-y-3">
                {[
                  { icon: '🛒', name: 'Grocery', amount: '-$85.00', color: 'bg-red-100' },
                  { icon: '💼', name: 'Salary', amount: '+$2,500', color: 'bg-green-100' },
                  { icon: '☕', name: 'Coffee', amount: '-$4.50', color: 'bg-red-100' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className={`w-10 h-10 ${tx.color} rounded-full flex items-center justify-center text-lg`}>
                      {tx.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{tx.name}</p>
                      <p className="text-xs text-gray-500">Today</p>
                    </div>
                    <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
    </div>
  );
}
