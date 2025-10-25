
import Button from "./ui/Button";
interface CouponProps {
  coupon?: string;
}
const Coupon = ({ coupon }: CouponProps) => {
  return (
    <>
      <input
        className="w-full max-w-[400px]"
        type="text"
        placeholder="Coupon Code"
      />
      <Button
        onClick={() => {
          //handle coupon
        }}
        className="max-sm:w-fit"
        text="Apply Coupon"
      />
    </>
  );
};

export default Coupon;
