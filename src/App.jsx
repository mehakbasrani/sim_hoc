import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorPage from "./Pages/error-page";
import Party2, { loader as partyLoader } from "./Pages/Master/Party2";
import PartyView, { loader as viewLoader } from "./Pages/Master/Party-View";
import PartyEdit, { loader as editLoader } from "./Pages/Master/Party-Edit";
import { action as editAction } from "./Pages/Master/Partyformm";
import Master from "./Pages/Master/Master";
import Dashboard from "./Pages/Dashboard";
import MasterIndex from "./Pages/Master/Master-Index";
import LoginForm from "./Pages/Login";

import Money from "./Pages/Money/Money";
import MoneyNav from "./Pages/Money/MoneyNav";
import Payment, {
  loader as paymentLoader,
  action as paymentAction,
} from "./Pages/Money/Payment";
import Reciept, {
  loader as recieptLoader,
  action as recieptAction,
} from "./Pages/Money/Reciept";
import Purchase, {
  loader as purchaseLoader,
  action as purchaseAction,
} from "./Pages/Money/Purchase";
import Society from "./Pages/Society/Society";
import SocietyNav from "./Pages/Society/SocietyNav";
import Reports from "./Pages/Reports/Reports";
import Members from "./Pages/Members/Members";
import NavigationPane from "./Components/NavigationPane";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "navigate/",
        element: <NavigationPane />,
      },

      {
        path: "master/",
        element: <Master />,
        children: [
          {
            index: true,
            element: <MasterIndex />,
          },
          {
            path: "party/",
            element: <Party2 />,
            loader: partyLoader,
          },
          {
            path: "party/:partyId/Edit",
            element: <PartyEdit />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "party/:partyId",
            element: <PartyView />,
            loader: viewLoader,
          },
        ],
      },
      {
        path: "society/",
        element: <Society />,
        children: [
          {
            index: true,
            element: <SocietyNav />,
          },
        ],
      },
      {
        path: "reports/",
        element: <Reports />,
      },
      {
        path: "members/",
        element: <Members />,
      },

      {
        path: "transactions/",
        element: <Money />,
        children: [
          {
            index: true,
            element: <MoneyNav />,
          },

          {
            path: "payment/",
            element: <Payment />,
            loader: paymentLoader,
            action: paymentAction,
          },
          {
            path: "reciept/",
            element: <Reciept />,
            loader: recieptLoader,
            action: recieptAction,
          },
          {
            path: "purchase/",
            element: <Purchase />,
            loader: purchaseLoader,
            action: purchaseAction,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
