import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, CreditCard, Building, Smartphone, Wallet } from 'lucide-react';

const Payment = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 52); // 14:52 in seconds
  const [selectedMethod, setSelectedMethod] = useState('upi');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const paymentMethods = [
    { id: 'credit', icon: CreditCard, name: 'Credit Card', subtext: '1 Offer Available', logos: ['RuPay', 'MC', 'VISA'] },
    { id: 'debit', icon: CreditCard, name: 'Debit Card', subtext: '', logos: ['RuPay', 'MC', 'VISA'] },
    { id: 'upi', icon: Smartphone, name: 'UPI', subtext: '2 Offer Available', logos: ['GPay', 'PhonePe', 'BHIM'] },
    { id: 'netbanking', icon: Building, name: 'NetBanking', subtext: '', logos: [] },
    { id: 'wallets', icon: Wallet, name: 'Wallets', subtext: '1 Offer Available', logos: ['Paytm', 'Mobikwik'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Modal Card */}
      <div className="max-w-md mx-auto pt-8 px-4">
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <Link to="/checkout" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
              <span className="text-sm">Cancel</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Powered By</span>
              <span className="font-bold text-primary">≡ Easebuzz</span>
            </div>
          </div>

          {/* Timer Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-center py-2">
            <p className="text-sm text-white">
              Payment Link valid For <span className="text-green-300 font-bold">{formatTime(timeLeft)}</span>
            </p>
          </div>

          {/* Merchant Info */}
          <div className="bg-blue-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">https://cosmofeed.com/</p>
                <p className="text-blue-200 text-xs">Tr ID order_twJzvEoy</p>
              </div>
            </div>
            <button className="flex items-center gap-1 text-white text-sm">
              English <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Offers Section */}
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-semibold">Offers</span>
              <button className="text-primary text-sm font-medium">View All &gt;</button>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xl">⬡</span>
              </div>
              <span className="text-sm flex-1">Use CRED UPI to scan the QR an...</span>
              <button className="text-primary font-medium text-sm">Apply</button>
            </div>
            <div className="flex justify-center gap-1 mt-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-2 h-2 rounded-full bg-muted" />
              <span className="w-2 h-2 rounded-full bg-muted" />
              <span className="w-2 h-2 rounded-full bg-muted" />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="px-4 pb-6">
            <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
            
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full p-4 rounded-lg border transition-all flex items-center gap-4 ${
                    selectedMethod === method.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <method.icon className="w-6 h-6 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{method.name}</span>
                      {method.logos.length > 0 && (
                        <div className="flex gap-1">
                          {method.logos.map((logo, i) => (
                            <span key={i} className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                              {logo}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {method.subtext && (
                      <span className="text-xs text-green-500">{method.subtext}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-border bg-muted/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <p>By proceeding with payment, you agree with our
                <br />
                <a href="#" className="text-primary">terms & conditions</a> and <a href="#" className="text-primary">privacy policy</a>
              </p>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold">PCI DSS</span>
                </div>
                <span className="text-xs">v 2.6.142</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
