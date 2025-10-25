import { Link } from "react-router-dom";

interface BreadCrumbProps {
  label: string;
  segment?: string;
}
const BreadCrumb = ({ label, segment }: BreadCrumbProps) => {
  const breadcrumbMap: Record<string, { label: string; href?: string }[]> = {
    "/cart": [{ label: "Home", href: "/" }, { label: "Cart" }],
    "/checkout": [
      { label: "Account", href: "/account" },
      { label: "My Account", href: "/account/profile" },
      { label: "Product", href: "/product" },
      { label: "View Cart", href: "/cart" },
      { label: "CheckOut" },
    ],
    "/productDetails": [
      { label: "Account", href: "/" },
      { label: "Gaming", href: "/" },
      { label: segment ?? "" },
    ],
  };
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {breadcrumbMap?.[label]?.map((data, i) => (
          <div key={i} className="flex gap-3">
            {data.href ? (
              <Link className="text-gray-400" to={data?.href}>
                {data.label}
              </Link>
            ) : (
              <div className="">{data.label}</div>
            )}
            {data.href && <div className="text-gray-400">/</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default BreadCrumb;
