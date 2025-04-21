import React, { useState } from 'react';
import { transactions } from '../../data/mockData';
import { Wallet, ArrowUpRight, ArrowDownLeft, Copy, Check } from 'lucide-react';

const Account: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = '8xn45...7Gh3p';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Account</h1>
        <p className="text-gray-500">Manage your Solana wallet and transactions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-md p-5 text-white lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-white/80 text-sm">Current Balance</p>
              <h2 className="text-3xl font-bold">12.45 SOL</h2>
              <p className="text-white/90 text-sm">≈ $780.23 USD</p>
            </div>
            <Wallet className="h-8 w-8" />
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="text-white/80 text-sm mr-2">Wallet Address:</div>
            <div className="bg-white/10 rounded-lg px-3 py-1.5 text-sm flex items-center">
              <span>{walletAddress}</span>
              <button 
                onClick={handleCopy}
                className="ml-2 text-white/80 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Quick Actions</h3>
            <p className="text-sm text-gray-500 mb-4">Manage your Solana tokens</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-1.5 hover:bg-blue-600 transition-colors">
              <ArrowUpRight className="h-4 w-4" />
              <span>Send</span>
            </button>
            <button className="bg-indigo-500 text-white py-2 rounded-lg flex items-center justify-center gap-1.5 hover:bg-indigo-600 transition-colors">
              <ArrowDownLeft className="h-4 w-4" />
              <span>Receive</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-grow">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-medium text-gray-900">Recent Transactions</h3>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(100%-60px)]">
          {transactions.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {transactions.map(transaction => (
                <div key={transaction.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-4 ${
                      transaction.type === 'incoming' 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'incoming' 
                        ? <ArrowDownLeft className="h-5 w-5" /> 
                        : <ArrowUpRight className="h-5 w-5" />
                      }
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                    </div>
                    
                    <div className={`text-right ${
                      transaction.type === 'incoming' 
                        ? 'text-emerald-600' 
                        : 'text-red-600'
                    }`}>
                      <p className="text-sm font-medium">
                        {transaction.type === 'incoming' ? '+' : '-'} {transaction.amount} SOL
                      </p>
                      <p className="text-xs text-gray-500">
                        ≈ ${(transaction.amount * 62.67).toFixed(2)} USD
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500">No transactions yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;