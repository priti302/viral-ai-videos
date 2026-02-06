import { X, Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeforeAfterSection = () => {
  


  return (
    <section className="py-12 px-4">
      
          <div className="text-center mt-8">
            <Link to="/checkout">
              <button className="btn-primary-glow text-primary-foreground font-semibold py-4 px-8 rounded-lg flex items-center gap-2 mx-auto">
                <ShoppingCart className="w-5 h-5" />
                Buy Now ₹999 <span className="line-through text-muted-foreground">₹99999</span>
              </button>
            </Link>
          </div>
     
  </section>
  )}


export default BeforeAfterSection;
