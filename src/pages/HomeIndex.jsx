import { Link, Outlet } from 'react-router-dom';

export default function HomeIndex() {
  return (
    <div className="text-center">
      <h1>Rikkei Academy</h1>
      <div className="actions">
        <Link to={'/invoices'} className="text-blue-600">
          Invoices
        </Link>{' '}
        |{' '}
        <Link to={'expenses'} className="text-blue-600">
          Expenses
        </Link>
      </div>
      <div className="h-[2px] bg-black mt-5 mb-5" />
      <Outlet />
    </div>
  );
}
