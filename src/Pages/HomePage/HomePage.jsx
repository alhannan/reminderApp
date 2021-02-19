import React, { useState } from "react";
import AppBar from "../../Components/AppBar/AppBar";
import StatusToggle from "../../Components/StatusToggle/StatusToggle";

function HomePage() {
  const [reminderType, setReminderType] = useState(1);
  const [statusType, setStatusType] = useState(1);

  return (
    <div>
      <AppBar reminderType={reminderType} setReminderType={setReminderType} />
      <StatusToggle statusType={statusType} setStatusType={setStatusType} />
    </div>
  );
}

export default HomePage;
