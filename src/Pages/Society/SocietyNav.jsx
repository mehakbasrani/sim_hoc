import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "semantic-ui-react";

export default function SocietyNav() {
  return (
    <div>
      <CardGroup itemsPerRow={3}>
        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Forms</Card.Header>
            <Card.Description>
              Listing of all Customers and Vendors.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">By Laws</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Circulars</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Nomination</Card.Header>
            <Card.Description>Listing of all Activities.</Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Profile</Card.Header>
            <Card.Description>Listing of all the Processes.</Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Comittee Members</Card.Header>
            <Card.Description>Listing of all Locations.</Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Bank Accounts</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Bills</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Balance Sheets</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">P & L</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Asset List</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">P & L</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Parking Penalities</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
      </CardGroup>
    </div>
  );
}
