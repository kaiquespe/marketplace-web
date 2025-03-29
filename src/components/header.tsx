import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { NavLink } from "./nav-link";
import { User } from "./user";
import { ROUTES } from "../config";

export function Header() {
  const navigate = useNavigate();

  function handleNewProduct() {
    navigate(ROUTES.PRODUCT_CREATE);
  }

  return (
    <header className="flex justify-between items-center shadow-sm min-h-20 max-h-20">
      <div className="flex items-center gap-4">
        <Link to={ROUTES.HOME}>
          <img src="/logo.svg" height={40} width={56} alt="Logo" />
        </Link>
      </div>
      <nav className="flex flex-1 justify-center gap-4">
        <NavLink icon="ChartHistogramIcon" to={ROUTES.HOME}>
          Dashboard
        </NavLink>
        <NavLink icon="PackageIcon" to={ROUTES.PRODUCTS}>
          Products
        </NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          label="New product"
          icon="PlusSignIcon"
          iconPosition="left"
          size="sm"
          variant="solid"
          onClick={handleNewProduct}
        />
        <User />
      </div>
    </header>
  );
} 