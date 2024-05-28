import useAuthStore from "../features/auth/auth.store";

const DashboardPage = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      DashboardPage
      <button type="button" className="btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default DashboardPage;
