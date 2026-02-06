import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-4 relative">
        <h2 className="font-semibold mb-6 text-black">Digital Aura</h2>

        <nav className="space-y-2 text-sm">
          <NavLink to="purchases" className="block px-3 py-2 rounded  text-blue-600">
            Purchases
          </NavLink>
          <NavLink to="transactions" className="block px-3 py-2 rounded  text-blue-600">
            Transactions
          </NavLink>
          <NavLink to="settings" className="block px-3 py-2 rounded  text-blue-600">
            Settings
          </NavLink>
        </nav>

        <p className="absolute bottom-4 text-xs text-gray-400">
          Powered by SuperProfile
        </p>
      </aside>

      {/* CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
