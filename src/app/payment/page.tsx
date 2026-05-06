"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Copy, Check, Send } from "lucide-react";

export default function PaymentDashboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const wallets = [
    { name: "USDT (TRC20)", address: "TRiFMfBoHSvX84LSux5wJCHSYXMRizkGer" },
    { name: "Bitcoin", address: "1BD71itt7ezjKjZm2WckiMSETTen8tpFRD" },
    { name: "Solana", address: "3j9s9hE9zxBTswF7Cmok1PPUjxBxy3UXaZtrPFtf9bBr" }
  ];

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <main className="min-h-screen p-8 flex flex-col items-center gap-12">
        <div className="max-w-4xl w-full flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Payment Dashboard</h1>
          <p className="text-lg opacity-80">Please send payment to one of the following addresses and submit your transaction details below.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wallets.map((wallet) => (
              <div key={wallet.name} className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-3">
                <h3 className="font-bold">{wallet.name}</h3>
                <div className="text-xs font-mono break-all opacity-70">{wallet.address}</div>
                <button 
                    onClick={() => copyToClipboard(wallet.address)}
                    className="flex items-center gap-2 text-sm text-primary"
                >
                    {copied === wallet.address ? <Check size={16} /> : <Copy size={16} />}
                    {copied === wallet.address ? "Copied!" : "Copy Address"}
                </button>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-white/5 mt-8">
            <h2 className="text-2xl font-bold mb-6">Submit Payment Details</h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Submission received!"); }}>
                <input placeholder="Your Email" className="p-3 rounded border bg-transparent" required />
                <input placeholder="Transaction Hash" className="p-3 rounded border bg-transparent" required />
                <textarea placeholder="Notes (Optional)" className="p-3 rounded border bg-transparent min-h-[100px]" />
                <button type="submit" className="w-full py-3 bg-primary text-white rounded font-bold flex items-center justify-center gap-2">
                    <Send size={18} /> Submit Payment Details
                </button>
            </form>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}