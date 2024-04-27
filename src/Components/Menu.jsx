/* eslint-disable react/prop-types */

import { Menu } from "semantic-ui-react";

export default function Menubar({ activeItem, handleItemClick }) {
  return (
    <Menu>
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleItemClick}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        name="society"
        active={activeItem === "society"}
        onClick={handleItemClick}
      >
        Society
      </Menu.Item>
      <Menu.Item
        name="members"
        active={activeItem === "members"}
        onClick={handleItemClick}
      >
        Members
      </Menu.Item>
      <Menu.Item
        name="transactions"
        active={activeItem === "transactions"}
        onClick={handleItemClick}
      >
        Transactions
      </Menu.Item>
      <Menu.Item
        name="reports"
        active={activeItem === "reports"}
        onClick={handleItemClick}
      >
        Reports
      </Menu.Item>

      <Menu.Item
        name="master"
        active={activeItem === "master"}
        onClick={handleItemClick}
      >
        Master
      </Menu.Item>
    </Menu>
  );
}
