import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#0013FF] w-full px-5 py-10 md:px-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 rounded-sm">
      
      <div className="flex flex-col justify-between md:h-full gap-5 md:gap-10">
        <div>
          <Image
            src="/images/footer/footer-logo-1.png"
            alt="footer image"
            width={283}
            height={65}
          />
        </div>
        <div className="text-[18px] text-gray-400">Resprk</div>
        <div className="text-[16px] text-gray-400 max-w-xs">
          © 2025 Resprk. All rights reserved.
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center text-white gap-10 md:gap-16 flex-wrap">
        
        <div>
          <div className="text-[18px] mb-2">Quick Links</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Home</li>
            <li>Explore Products</li>
            <li>Tech for Business</li>
            <li>Sell to Resprk</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="text-[18px] mb-2">Product Categories</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Smartphones</li>
            <li>Tablets</li>
            <li>Laptops</li>
            <li>Accessories</li>
            <li>Gaming Consoles</li>
          </ul>
        </div>

        <div>
          <div className="text-[18px] mb-2">Support</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="self-center md:self-auto">
        <Image
          src="/images/footer/footer-logo-2.png"
          alt="footer image"
          width={158}
          height={142}
        />
      </div>
    </div>
  );
}
